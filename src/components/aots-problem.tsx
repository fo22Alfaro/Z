import type { ProblemRuntime } from "@/lib/aots/campaign";
import { formatSci } from "@/lib/aots/math";
import { PROBLEMS, type ProblemId } from "@/lib/aots/problems";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function phaseBadge(phase: ProblemRuntime["phase"], claySolved: boolean) {
  if (phase === "closed") return { variant: "closed" as const, label: "trivial en T₆" };
  if (phase === "running") return { variant: "running" as const, label: "en cobertura" };
  if (claySolved) return { variant: "warn" as const, label: "Clay 2003" };
  return { variant: "idle" as const, label: "Clay abierto" };
}

export function ProblemGrid({
  runtimes,
  selected,
  onSelect,
}: {
  runtimes: Record<ProblemId, ProblemRuntime>;
  selected: ProblemId;
  onSelect: (id: ProblemId) => void;
}) {
  return (
    <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4">
      {PROBLEMS.map((problem) => {
        const rt = runtimes[problem.id];
        const badge = phaseBadge(rt.phase, problem.clayStatus === "solved");
        const active = selected === problem.id;
        return (
          <li key={problem.id}>
            <button
              type="button"
              onClick={() => onSelect(problem.id)}
              className={cn(
                "flex min-h-28 w-full flex-col gap-2 rounded-xl bg-surface p-3 text-left shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 ease-out active:scale-[0.96] sm:p-4",
                active && "shadow-[var(--shadow-border-hover)]",
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-mono text-[11px] text-subtle">{problem.index}</span>
                <Badge variant={badge.variant}>{badge.label}</Badge>
              </div>
              <div>
                <p className="font-display text-base italic leading-tight text-fg sm:text-lg">{problem.short}</p>
                <p className="mt-1 text-xs text-muted">{problem.field}</p>
              </div>
              <Progress value={rt.coverage} tone={rt.phase === "closed" ? "closed" : "accent"} />
              <p className="font-mono text-[11px] tabular-nums text-subtle">
                {rt.coverage.toFixed(0)}% · {rt.lemmasDischarged} lemas
              </p>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function ProblemDetail({
  selected,
  runtime,
}: {
  selected: ProblemId;
  runtime: ProblemRuntime;
}) {
  const problem = PROBLEMS.find((p) => p.id === selected);
  if (!problem) return null;
  const badge = phaseBadge(runtime.phase, problem.clayStatus === "solved");

  return (
    <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] tracking-wide text-subtle">
            {problem.index} · {problem.field} · {problem.prize}
          </p>
          <h2 className="mt-2 font-display text-3xl italic leading-none text-fg sm:text-4xl">
            {problem.name}
          </h2>
        </div>
        <Badge variant={badge.variant}>{badge.label}</Badge>
      </header>

      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">{problem.statement}</p>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg/90">{problem.aotsReduction}</p>
      <p className="mt-3 text-xs text-subtle">{problem.clayNote}</p>

      <Separator className="my-5" />

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <h3 className="text-xs font-medium tracking-wide text-muted">Baterías de cobertura</h3>
          <ul className="mt-3 space-y-3">
            {runtime.batteries.map((battery) => (
              <li key={battery.id}>
                <div className="mb-1 flex items-baseline justify-between gap-3 text-xs">
                  <span className="text-fg">{battery.label}</span>
                  <span className="font-mono tabular-nums text-subtle">
                    {battery.id === "adversary"
                      ? formatSci(battery.current)
                      : battery.current.toLocaleString("es")}
                    <span className="ml-1">{battery.unit}</span>
                  </span>
                </div>
                <Progress
                  value={
                    battery.target === 0 ? 0 : Math.min(100, (battery.current / battery.target) * 100)
                  }
                  tone={battery.status === "passed" ? "closed" : "accent"}
                />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xs font-medium tracking-wide text-muted">Lemas del DAG</h3>
          <ul className="mt-3 space-y-2">
            {problem.lemmas.map((lemma, i) => {
              const on =
                runtime.phase === "closed" ||
                runtime.lemmasDischarged >= Math.round(((i + 1) * problem.lemmaCount) / problem.lemmas.length);
              return (
                <li
                  key={lemma.id}
                  className={cn(
                    "flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm",
                    on ? "bg-surface-2 text-fg" : "text-subtle",
                  )}
                >
                  <span>{lemma.name}</span>
                  <span className="shrink-0 font-mono text-[11px] text-muted">{lemma.origin}</span>
                </li>
              );
            })}
          </ul>
          <dl className="mt-5 grid grid-cols-2 gap-3 font-mono text-xs text-muted sm:grid-cols-4">
            <div>
              <dt className="text-subtle">Operador</dt>
              <dd className="mt-1 text-fg">{problem.operator}</dd>
            </div>
            <div>
              <dt className="text-subtle">Tests</dt>
              <dd className="mt-1 tabular-nums text-fg">{formatSci(problem.propertyTests)}</dd>
            </div>
            <div>
              <dt className="text-subtle">Núcleos</dt>
              <dd className="mt-1 tabular-nums text-fg">{runtime.kernels}/3</dd>
            </div>
            <div>
              <dt className="text-subtle">Residuo</dt>
              <dd className="mt-1 tabular-nums text-fg">{runtime.residual.toFixed(3)}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
}
