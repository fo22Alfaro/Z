import { useEffect, useRef } from "react";
import type { LogLine } from "@/lib/aots/campaign";
import { ScrollArea } from "@/components/ui/scroll-area";

type Props = {
  logs: LogLine[];
  running: boolean;
};

export function AotsLog({ logs, running }: Props) {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [logs.length]);

  return (
    <section className="flex min-h-56 flex-col overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
      <header className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <h2 className="font-display text-xl italic">Kernel</h2>
        <p className="font-mono text-xs text-muted">
          {running ? "en descarga" : logs.length ? "cerrado" : "en espera"}
          <span className="ml-3 tabular-nums text-subtle">{logs.length}</span>
        </p>
      </header>
      <ScrollArea className="h-56 sm:h-64">
        <ol className="space-y-1 px-4 py-3 font-mono text-[11px] leading-5 text-muted">
          {logs.length === 0 ? (
            <li className="text-subtle">El núcleo espera el despliegue de rigor máximo.</li>
          ) : (
            logs.map((line) => (
              <li key={line.id} className="flex gap-3">
                <span className="w-16 shrink-0 text-subtle tabular-nums">
                  {(line.at / 1000).toFixed(2)}s
                </span>
                <span className="w-16 shrink-0 text-accent">{line.channel}</span>
                <span className="text-fg/90">{line.text}</span>
              </li>
            ))
          )}
          <div ref={endRef} />
        </ol>
      </ScrollArea>
    </section>
  );
}
