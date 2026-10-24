"use client";

import { m } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  description?: string;
  className?: string;
  eyebrow?: string;
}

export function SectionHeading({
  title,
  description,
  eyebrow,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14", className)}>
      {eyebrow && (
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
          <span className="section-label">{eyebrow}</span>
        </div>
      )}
      <m.h2
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="group/title inline-flex text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] animated-underline transition-colors duration-150 hover:text-gradient"
      >
        {title}
      </m.h2>
      {description && (
        <m.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.22, delay: 0.04, ease: "easeOut" }}
          className="mt-4 text-muted-foreground max-w-2xl text-[15px] leading-relaxed"
        >
          {description}
        </m.p>
      )}
      <m.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.32, delay: 0.08, ease: "easeOut" }}
        className="mt-8 h-px origin-left bg-gradient-to-r from-primary/50 via-border to-transparent"
      />
    </div>
  );
}
