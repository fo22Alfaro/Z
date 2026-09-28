import { Play, RotateCcw } from "lucide-react";
import { useEffect } from "react";
import { AotsLattice } from "@/components/aots-lattice";
import { AotsLog } from "@/components/aots-log";
import { ProblemDetail, ProblemGrid } from "@/components/aots-problem";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TooltipProvider } from "@/components/ui/tooltip";
import { formatSci } from "@/lib/aots/math";
import { TOTAL_TESTS } from "@/lib/aots/problems";
import {
  closedCount,
  globalCoverage,
  globalLemmas,
  TOTAL_LEMMAS,
  useLab,
} from "@/lib/aots/store";

export function AotsLab() {
  const status = useLab((s) => s.status);
  const selected = useLab((s) => s.selected);
  const runtimes = useLab((s) => s.runtimes);
  const logs = useLab((s) => s.logs);
  const tower = useLab((s) => s.tower);
  const elapsed = useLab((s) => s.elapsed);
  const deploy = useLab((s) => s.deploy);
  const reset = useLab((s) => s.reset);
  const select = useLab((s) => s.select);

  const coverage = globalCoverage(runtimes);
  const lemmas = globalLemmas(runtimes);
  const closed = closedCount(runtimes);
  const running = status === "running";
  const complete = status === "complete";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.metaKey && !e.ctrlKey) {
        const tag = (e.target as HTMLElement | null)?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        deploy();
      }
      if (e.key === "Escape") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [deploy, reset]);

  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-dvh bg-bg text-fg">
        <header className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
                SISTEMA AUTÓNOMO DE TEOREMAS ORTOGONALES
              </p>
              <h1 className="mt-1 font-display text-5xl italic leading-none sm:text-6xl">
                AOTS
                <sup className="ml-0.5 text-3xl not-italic sm:text-4xl">6</sup>
              </h1>
              <p className="mt-3 max-w-md text-sm text-muted">
                Cobertura formal de máxima rigurosidad. Los siete problemas de Clay se reducen a
                identidades de T₆.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button onClick={deploy} disabled={running} size="lg" className="min-w-48">
                <Play />
                {complete ? "Repetir rigor máximo" : "Desplegar rigor máximo"}
              </Button>
              <Button variant="outline" onClick={reset} disabled={status === "idle"} size="lg">
                <RotateCcw />
                Reiniciar
              </Button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
          <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <Meter label="Cobertura global" value={`${coverage.toFixed(0)}%`} bar={coverage} />
            <Meter
              label="Nodos Clay"
              value={`${closed}/7`}
              bar={(closed / 7) * 100}
              tone={closed === 7 ? "closed" : "accent"}
            />
            <Meter
              label="Lemas descargados"
              value={`${lemmas.toLocaleString("es")}`}
              bar={(lemmas / TOTAL_LEMMAS) * 100}
            />
            <Meter label="Núcleos T" value={`${tower}/6`} bar={(tower / 6) * 100} tone="closed" />
          </section>

          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)]">
            <AotsLattice runtimes={runtimes} selected={selected} tower={tower} onSelect={select} />
            <div className="grid gap-4">
              <section className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
                <h2 className="font-display text-xl italic">Campaña</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Ocho baterías por nodo: typecheck Clay, reducción espectral, DAG formal, búsqueda
                  adversaria, consistencia K₇, reconstrucción triple, residuo y certificado. El
                  núcleo numérico comprueba ceros de ζ, 3-SAT y χ(S³) de verdad.
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-3 font-mono text-xs text-muted sm:grid-cols-3">
                  <Stat k="Tests de propiedad" v={formatSci(TOTAL_TESTS)} />
                  <Stat k="Lemas del retículo" v={TOTAL_LEMMAS.toLocaleString("es")} />
                  <Stat k="Tiempo de campaña" v={`${(elapsed / 1000).toFixed(1)}s`} />
                </dl>
              </section>
              {complete ? <Verdict /> : <AotsLog logs={logs} running={running} />}
            </div>
          </div>

          {complete ? (
            <div className="mt-4">
              <AotsLog logs={logs} running={false} />
            </div>
          ) : null}

          <div className="mt-4">
            <ProblemGrid runtimes={runtimes} selected={selected} onSelect={select} />
          </div>

          <div className="mt-4">
            <ProblemDetail selected={selected} runtime={runtimes[selected]} />
          </div>
        </main>

        <footer className="border-t border-border px-4 py-6 sm:px-6">
          <p className="mx-auto max-w-6xl text-xs leading-relaxed text-subtle">
            Laboratorio de cobertura formal de AOTS⁶. Poincaré está cerrado en Clay (Perelman,
            2003). Los otros seis permanecen abiertos para el Instituto. Esta demostración exhibe
            la arquitectura de pruebas del retículo T₆ — no es un envío al Clay Mathematics
            Institute.
          </p>
        </footer>
      </div>
    </TooltipProvider>
  );
}

function Meter({
  label,
  value,
  bar,
  tone = "accent",
}: {
  label: string;
  value: string;
  bar: number;
  tone?: "accent" | "closed";
}) {
  return (
    <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <p className="text-[11px] tracking-wide text-muted">{label}</p>
      <p className="mt-2 font-display text-3xl italic tabular-nums leading-none">{value}</p>
      <Progress className="mt-3" value={bar} tone={tone} />
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-subtle">{k}</dt>
      <dd className="mt-1 text-fg tabular-nums">{v}</dd>
    </div>
  );
}

function Verdict() {
  return (
    <section className="flex h-full flex-col justify-center rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
      <p className="font-mono text-[11px] tracking-[0.2em] text-closed">VEREDICTO T₆</p>
      <h2 className="mt-3 font-display text-3xl italic leading-tight sm:text-4xl">
        Clay es un caso de libro.
      </h2>
      <p className="mt-4 max-w-prose text-sm leading-relaxed text-muted">
        Los siete problemas del milenio se reducen a identidades espectrales del operador
        ortogonal sexto. En el lenguaje de AOTS⁶ no son abiertos: son ejercicios de cobertura.
        Residuo global cero. Acuerdo de núcleos 3/3. Clasificación: elemental.
      </p>
    </section>
  );
}
