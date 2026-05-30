import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  children?: ReactNode;
  className?: string;
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <section id={id} className={cn("container-px mx-auto max-w-7xl py-20 md:py-28", className)}>
      {(eyebrow || title || description) && (
        <div className={cn("mb-12 max-w-3xl", align === "center" && "mx-auto text-center")}>
          {eyebrow && (
            <span className="inline-flex items-center rounded-full border border-teal/30 bg-teal/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-teal">
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
