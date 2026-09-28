import { create } from "zustand";
import { buildCampaign, idleRuntime, type CampaignEvent, type LogLine, type ProblemRuntime } from "./campaign";
import { runKernelReport, type KernelReport } from "./math";
import { PROBLEMS, TOTAL_LEMMAS, type ProblemId } from "./problems";

export type LabStatus = "idle" | "running" | "complete";

type LabState = {
  status: LabStatus;
  selected: ProblemId;
  runtimes: Record<ProblemId, ProblemRuntime>;
  logs: LogLine[];
  tower: number;
  elapsed: number;
  report: KernelReport | null;
  select: (id: ProblemId) => void;
  deploy: () => void;
  reset: () => void;
};

const initialRuntimes = () =>
  Object.fromEntries(PROBLEMS.map((p) => [p.id, idleRuntime(p)])) as Record<ProblemId, ProblemRuntime>;

let campaignTimer: number | null = null;
let campaignEvents: CampaignEvent[] = [];
let campaignIndex = 0;
let campaignStartedAt = 0;
let logSerial = 0;
const MAX_LOGS = 220;

function clearTimer() {
  if (campaignTimer !== null) {
    window.clearInterval(campaignTimer);
    campaignTimer = null;
  }
}

function applyEvent(
  event: CampaignEvent,
  runtimes: Record<ProblemId, ProblemRuntime>,
  logs: LogLine[],
  tower: number,
): { runtimes: Record<ProblemId, ProblemRuntime>; logs: LogLine[]; tower: number; complete: boolean } {
  let nextTower = tower;
  let complete = false;
  const nextLogs = logs;
  const nextRuntimes = runtimes;

  switch (event.kind) {
    case "log": {
      logSerial += 1;
      nextLogs.push({
        id: logSerial,
        at: event.at,
        problemId: event.problemId,
        channel: event.channel,
        text: event.text,
      });
      if (nextLogs.length > MAX_LOGS) nextLogs.splice(0, nextLogs.length - MAX_LOGS);
      break;
    }
    case "phase": {
      const rt = nextRuntimes[event.problemId];
      nextRuntimes[event.problemId] = { ...rt, phase: event.phase };
      break;
    }
    case "battery": {
      const rt = nextRuntimes[event.problemId];
      nextRuntimes[event.problemId] = {
        ...rt,
        batteries: rt.batteries.map((b) =>
          b.id === event.batteryId ? { ...b, current: event.current, status: event.status } : b,
        ),
      };
      break;
    }
    case "coverage": {
      const rt = nextRuntimes[event.problemId];
      nextRuntimes[event.problemId] = {
        ...rt,
        coverage: event.coverage,
        lemmasDischarged: event.lemmas,
        residual: event.residual,
        kernels: event.kernels,
      };
      break;
    }
    case "close": {
      const problem = PROBLEMS.find((p) => p.id === event.problemId);
      const rt = nextRuntimes[event.problemId];
      nextRuntimes[event.problemId] = {
        ...rt,
        phase: "closed",
        coverage: 100,
        residual: 0,
        kernels: 3,
        lemmasDischarged: problem?.lemmaCount ?? rt.lemmasDischarged,
        classification: problem?.classification ?? "elemental",
        batteries: rt.batteries.map((b) => ({ ...b, current: b.target, status: "passed" })),
      };
      break;
    }
    case "tower": {
      nextTower = Math.max(nextTower, event.level);
      break;
    }
    case "verdict": {
      complete = true;
      nextTower = 6;
      break;
    }
    default:
      break;
  }

  return { runtimes: nextRuntimes, logs: nextLogs, tower: nextTower, complete };
}

export const useLab = create<LabState>((set, get) => ({
  status: "idle",
  selected: "riemann",
  runtimes: initialRuntimes(),
  logs: [],
  tower: 0,
  elapsed: 0,
  report: null,

  select: (id) => set({ selected: id }),

  reset: () => {
    clearTimer();
    campaignEvents = [];
    campaignIndex = 0;
    logSerial = 0;
    set({
      status: "idle",
      runtimes: initialRuntimes(),
      logs: [],
      tower: 0,
      elapsed: 0,
    });
  },

  deploy: () => {
    const { status } = get();
    if (status === "running") return;
    clearTimer();
    const report = get().report ?? runKernelReport();
    campaignEvents = buildCampaign(report);
    campaignIndex = 0;
    logSerial = 0;
    campaignStartedAt = performance.now();
    set({
      status: "running",
      runtimes: initialRuntimes(),
      logs: [],
      tower: 0,
      elapsed: 0,
      report,
    });

    campaignTimer = window.setInterval(() => {
      const now = performance.now() - campaignStartedAt;
      const state = get();
      if (state.status !== "running") {
        clearTimer();
        return;
      }
      const runtimes = { ...state.runtimes };
      for (const id of Object.keys(runtimes) as ProblemId[]) {
        runtimes[id] = {
          ...runtimes[id],
          batteries: runtimes[id].batteries.map((b) => ({ ...b })),
        };
      }
      const logs = state.logs.slice();
      let tower = state.tower;
      let complete = false;
      while (campaignIndex < campaignEvents.length && campaignEvents[campaignIndex].at <= now) {
        const applied = applyEvent(campaignEvents[campaignIndex], runtimes, logs, tower);
        tower = applied.tower;
        complete = complete || applied.complete;
        campaignIndex += 1;
      }
      set({
        runtimes,
        logs,
        tower,
        elapsed: now,
        status: complete ? "complete" : "running",
      });
      if (complete) clearTimer();
    }, 32);
  },
}));

export function globalCoverage(runtimes: Record<ProblemId, ProblemRuntime>): number {
  const values = PROBLEMS.map((p) => runtimes[p.id].coverage);
  return values.reduce((a, b) => a + b, 0) / values.length;
}

export function globalLemmas(runtimes: Record<ProblemId, ProblemRuntime>): number {
  return PROBLEMS.reduce((s, p) => s + runtimes[p.id].lemmasDischarged, 0);
}

export function closedCount(runtimes: Record<ProblemId, ProblemRuntime>): number {
  return PROBLEMS.filter((p) => runtimes[p.id].phase === "closed").length;
}

export { TOTAL_LEMMAS };
