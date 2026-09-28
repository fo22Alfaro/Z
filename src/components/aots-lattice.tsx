import { PROBLEMS, type ProblemId } from "@/lib/aots/problems";
import type { ProblemRuntime } from "@/lib/aots/campaign";
import { cn } from "@/lib/utils";

type Props = {
  runtimes: Record<ProblemId, ProblemRuntime>;
  selected: ProblemId;
  tower: number;
  onSelect: (id: ProblemId) => void;
};

const CX = 170;
const CY = 160;
const R = 102;

function pos(i: number) {
  const angle = -Math.PI / 2 + (i * 2 * Math.PI) / 7;
  return {
    x: CX + R * Math.cos(angle),
    y: CY + R * Math.sin(angle),
  };
}

export function AotsLattice({ runtimes, selected, tower, onSelect }: Props) {
  const points = PROBLEMS.map((p, i) => ({ ...p, ...pos(i), runtime: runtimes[p.id] }));

  return (
    <div className="relative overflow-hidden rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-4">
      <div className="mb-2 flex items-baseline justify-between gap-3">
        <h2 className="font-display text-xl italic text-fg sm:text-2xl">Retículo T₆</h2>
        <p className="font-mono text-xs tracking-wide text-muted">{tower}/6 núcleos</p>
      </div>
      <svg
        viewBox="0 0 340 320"
        className="mx-auto block h-auto w-full max-w-md"
        role="img"
        aria-label="Retículo de los siete problemas de Clay"
      >
        {Array.from({ length: 6 }, (_, i) => {
          const rr = 18 + i * 14;
          const on = tower > i;
          return (
            <circle
              key={i}
              cx={CX}
              cy={CY}
              r={rr}
              fill="none"
              stroke={on ? "var(--color-closed)" : "var(--color-border)"}
              strokeWidth={on ? 1.2 : 0.7}
              opacity={on ? 0.9 : 0.4}
            />
          );
        })}
        {points.map((a, i) =>
          points.slice(i + 1).map((b) => {
            const lit = a.runtime.phase === "closed" && b.runtime.phase === "closed";
            return (
              <line
                key={`${a.id}-${b.id}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={lit ? "var(--color-closed)" : "var(--color-border)"}
                strokeWidth={lit ? 1 : 0.55}
                opacity={lit ? 0.5 : 0.22}
              />
            );
          }),
        )}
        <text
          x={CX}
          y={CY - 4}
          textAnchor="middle"
          fill="var(--color-fg)"
          fontFamily="var(--font-display)"
          fontSize="20"
        >
          AOTS
          <tspan baselineShift="super" fontSize="10">
            6
          </tspan>
        </text>
        <text
          x={CX}
          y={CY + 16}
          textAnchor="middle"
          fill="var(--color-muted)"
          fontFamily="var(--font-mono)"
          fontSize="8"
          letterSpacing="0.16em"
        >
          CLAY K₇
        </text>
        {points.map((p) => {
          const isSelected = p.id === selected;
          const closed = p.runtime.phase === "closed";
          const running = p.runtime.phase === "running";
          const fill = closed
            ? "var(--color-closed)"
            : running
              ? "var(--color-accent)"
              : "var(--color-surface-2)";
          const stroke = isSelected ? "var(--color-fg)" : "var(--color-border-strong)";
          return (
            <g
              key={p.id}
              role="button"
              tabIndex={0}
              aria-label={p.short}
              className="cursor-pointer"
              onClick={() => onSelect(p.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelect(p.id);
                }
              }}
            >
              <circle cx={p.x} cy={p.y} r={isSelected ? 10 : 8} fill={fill} stroke={stroke} strokeWidth={isSelected ? 2 : 1} />
              {running ? (
                <circle
                  cx={p.x}
                  cy={p.y}
                  r={15}
                  fill="none"
                  stroke="var(--color-accent)"
                  strokeWidth="0.8"
                  opacity="0.55"
                />
              ) : null}
            </g>
          );
        })}
      </svg>
      <ul className="mt-1 flex flex-wrap justify-center gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {PROBLEMS.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => onSelect(p.id)}
              className={cn(
                "min-h-11 tracking-wide",
                p.id === selected ? "text-fg" : "text-muted hover:text-fg",
              )}
            >
              {p.index} {p.short}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
