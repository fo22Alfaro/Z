import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

export function Progress({
  className,
  value = 0,
  tone = "accent",
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { tone?: "accent" | "closed" }) {
  return (
    <ProgressPrimitive.Root
      className={cn("relative h-1 w-full overflow-hidden rounded-full bg-surface-2", className)}
      value={value}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          "h-full w-full origin-left rounded-full transition-transform duration-300 ease-[var(--ease-smooth-out)]",
          tone === "closed" ? "bg-closed" : "bg-accent",
        )}
        style={{ transform: `scaleX(${Math.min(100, Math.max(0, value ?? 0)) / 100})` }}
      />
    </ProgressPrimitive.Root>
  );
}
