import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide",
  {
    variants: {
      variant: {
        idle: "bg-surface-2 text-muted",
        running: "bg-accent/12 text-accent",
        closed: "bg-closed/18 text-closed",
        warn: "bg-warn/15 text-warn",
      },
    },
    defaultVariants: { variant: "idle" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
