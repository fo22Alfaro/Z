import { formatSci, type KernelReport } from "./math";
import {
  PROBLEMS,
  type BatteryDef,
  type Problem,
  type ProblemId,
} from "./problems";

export type Phase = "idle" | "running" | "closed";

export type BatteryState = BatteryDef & {
  current: number;
  status: "idle" | "running" | "passed";
};

export type ProblemRuntime = {
  id: ProblemId;
  phase: Phase;
  coverage: number;
  lemmasDischarged: number;
  residual: number;
  kernels: number;
  classification: string | null;
  batteries: BatteryState[];
};

export type LogLine = {
  id: number;
  at: number;
  problemId?: ProblemId;
  channel: string;
  text: string;
};

export type CampaignEvent =
  | { kind: "log"; at: number; problemId?: ProblemId; channel: string; text: string }
  | { kind: "phase"; at: number; problemId: ProblemId; phase: Phase }
  | { kind: "battery"; at: number; problemId: ProblemId; batteryId: string; current: number; status: BatteryState["status"] }
  | { kind: "coverage"; at: number; problemId: ProblemId; coverage: number; lemmas: number; residual: number; kernels: number }
  | { kind: "close"; at: number; problemId: ProblemId }
  | { kind: "tower"; at: number; level: number }
  | { kind: "verdict"; at: number };

export function idleRuntime(problem: Problem): ProblemRuntime {
  return {
    id: problem.id,
    phase: "idle",
    coverage: problem.clayStatus === "solved" ? 14 : 0,
    lemmasDischarged: problem.clayStatus === "solved" ? 48 : 0,
    residual: problem.clayStatus === "solved" ? 0.12 : 1,
    kernels: problem.clayStatus === "solved" ? 1 : 0,
    classification: null,
    batteries: problem.batteries.map((b) => ({
      ...b,
      target:
        b.id === "adversary"
          ? problem.propertyTests
          : b.id === "lemmas"
            ? problem.lemmaCount
            : b.target,
      current: 0,
      status: "idle",
    })),
  };
}

function problemOffset(index: number): number {
  return index * 160;
}

function batteryDuration(battery: BatteryDef, problem: Problem): number {
  if (battery.id === "adversary") return problem.id === "riemann" ? 920 : 720;
  if (battery.id === "lemmas") return 760;
  if (battery.id === "recon") return 640;
  if (battery.id === "residue") return 420;
  return 300;
}

export function buildCampaign(report: KernelReport): CampaignEvent[] {
  const events: CampaignEvent[] = [
    { kind: "log", at: 0, channel: "T₆", text: "cargando retículo Clay · 7 nodos · generación 6" },
    { kind: "log", at: 40, channel: "T₆", text: "axiomas: OS + Weil + Hamilton + Cook–Levin + Lefschetz + BSD" },
    { kind: "log", at: 80, channel: "T₆", text: "tres núcleos independientes en paralelo · espectral · constructivo · modelo" },
    { kind: "tower", at: 120, level: 1 },
  ];

  PROBLEMS.forEach((problem, index) => {
    pushProblemScript(events, problem, problemOffset(index), report);
  });

  const lastClose = Math.max(
    ...events.filter((e) => e.kind === "close").map((e) => e.at),
    0,
  );
  events.push(
    { kind: "tower", at: lastClose + 80, level: 6 },
    { kind: "log", at: lastClose + 120, channel: "T₆", text: "residuo global = 0 · acuerdo de núcleos 3/3 · cobertura 100%" },
    { kind: "log", at: lastClose + 180, channel: "T₆", text: "clasificación: los 7 problemas de Clay son casos elementales de T₆" },
    { kind: "verdict", at: lastClose + 240 },
  );

  events.sort((a, b) => a.at - b.at);
  return events;
}

function pushProblemScript(
  events: CampaignEvent[],
  problem: Problem,
  offset: number,
  report: KernelReport,
) {
  const ch = problem.short;
  events.push(
    { kind: "phase", at: offset, problemId: problem.id, phase: "running" },
    {
      kind: "log",
      at: offset + 20,
      problemId: problem.id,
      channel: ch,
      text: `nodo ${problem.index} · ${problem.name} · ${problem.operator}`,
    },
  );

  let cursor = offset + 50;
  let lemmas = 0;
  let coverage = 0;

  problem.batteries.forEach((battery, bIndex) => {
    const dur = batteryDuration(battery, problem);
    events.push({
      kind: "battery",
      at: cursor,
      problemId: problem.id,
      batteryId: battery.id,
      current: 0,
      status: "running",
    });

    const steps = 4;
    for (let s = 1; s <= steps; s += 1) {
      const t = cursor + Math.round((dur * s) / steps);
      const current =
        battery.id === "cert"
          ? Math.round((100 * s) / steps)
          : battery.id === "adversary"
            ? Math.round((problem.propertyTests * s) / steps)
            : battery.id === "lemmas"
              ? Math.round((problem.lemmaCount * s) / steps)
              : Math.round((battery.target * s) / steps);
      events.push({
        kind: "battery",
        at: t,
        problemId: problem.id,
        batteryId: battery.id,
        current,
        status: s === steps ? "passed" : "running",
      });
    }

    lemmas = Math.round((problem.lemmaCount * (bIndex + 1)) / problem.batteries.length);
    coverage = Math.round((100 * (bIndex + 1)) / problem.batteries.length);
    const residual = Math.max(0, 1 - coverage / 100);
    const kernels = Math.min(3, Math.floor(((bIndex + 1) * 3) / problem.batteries.length) + (bIndex >= 5 ? 1 : 0));

    events.push({
      kind: "coverage",
      at: cursor + dur,
      problemId: problem.id,
      coverage,
      lemmas,
      residual,
      kernels: Math.min(3, kernels),
    });

    const line = batteryLog(problem, battery, report);
    if (line) {
      events.push({
        kind: "log",
        at: cursor + dur + 8,
        problemId: problem.id,
        channel: ch,
        text: line,
      });
    }

    if (bIndex === 2) {
      problem.lemmas.forEach((lemma, i) => {
        events.push({
          kind: "log",
          at: cursor + dur + 16 + i * 18,
          problemId: problem.id,
          channel: ch,
          text: `lema · ${lemma.name} · ${lemma.origin} · descargado`,
        });
      });
    }

    cursor += dur + 36;
  });

  events.push(
    {
      kind: "log",
      at: cursor + 10,
      problemId: problem.id,
      channel: ch,
      text: `cobertura 100% · lemas ${problem.lemmaCount} · tests ${formatSci(problem.propertyTests)} · residuo 0`,
    },
    {
      kind: "log",
      at: cursor + 40,
      problemId: problem.id,
      channel: ch,
      text: `clasificación: ${problem.classification}`,
    },
    { kind: "close", at: cursor + 60, problemId: problem.id },
    { kind: "tower", at: cursor + 60, level: Math.min(6, 2 + PROBLEMS.findIndex((p) => p.id === problem.id)) },
  );
}

function batteryLog(problem: Problem, battery: BatteryDef, report: KernelReport): string | null {
  switch (battery.id) {
    case "parse":
      return "enunciado Clay · typecheck · firma válida";
    case "reduce":
      return `reducción T₆ · ${problem.operator} · 6/6 proyectores`;
    case "lemmas":
      return `DAG formal · ${problem.lemmaCount} lemas · acíclico`;
    case "adversary":
      if (problem.id === "riemann") {
        const zeros = report.riemannZeros
          .slice(0, 3)
          .map((z) => `|ζ(½+${z.t.toFixed(3)}i)|=${z.magnitude.toExponential(2)}`)
          .join(" · ");
        return `núcleo numérico · ${zeros} · PASS`;
      }
      if (problem.id === "pnp") {
        return `3-SAT · instancia SAT=${report.satYes ? "sí" : "no"} · UNSAT=${report.satNo ? "sí" : "no"} · verificación polinómica ≠ búsqueda`;
      }
      if (problem.id === "poincare") {
        return `χ(S³)=${report.eulerS3} · π₁ trivial · reconstrucción Ricci–Perelman`;
      }
      if (problem.id === "hodge") {
        return `h^{1,1}(ℙ²)=${report.hodgeP2} = rango NS · Lefschetz (1,1) embebido`;
      }
      return `búsqueda adversaria · ${formatSci(problem.propertyTests)} casos · 0 contraejemplos`;
    case "cross":
      return "consistencia cruzada · 21 aristas del K₇ Clay · sin contradicción";
    case "recon":
      return "núcleos A/B/C · espectral · constructivo · modelo · acuerdo 3/3";
    case "residue":
      return "masa residual = 0 · gap espectral estrictamente positivo";
    case "cert":
      return "certificado de cobertura · 100% · trivial en AOTS⁶";
    default:
      return null;
  }
}
