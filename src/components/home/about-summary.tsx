"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { TerminalBlock } from "@/components/shared/terminal-block";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const terminalLines = [
  { label: "name", value: "Sonia Gupta" },
  { label: "role", value: "Software Developer" },
  { label: "location", value: "Hazaribag, Jharkhand, India" },
  { label: "education", value: "MCA, 2026" },
  { label: "focus", value: "Backend, AI, Retrieval, Web" },
];

const highlights = [
  { value: "MCA", label: "Amity University Jharkhand" },
  { value: "2", label: "Completed projects" },
  { value: "5+", label: "Core focus areas" },
  { value: "2026", label: "Graduation year" },
];

export function AboutSummary() {
  return (
    <SectionContainer id="about">
      <SectionHeading title="About Me" eyebrow="Background" />
      <div className="grid md:grid-cols-2 gap-14 items-start">
        <ScrollReveal>
          <div className="space-y-8">
            <div className="space-y-4 text-muted-foreground leading-relaxed text-[15px]">
              <p>I&apos;m an MCA graduate passionate about software development, backend engineering, AI-powered applications, and problem-solving.</p>
              <p>I enjoy building useful applications, learning from practical engineering challenges, and continuously improving my skills.</p>
              <Link href="/about" className="group inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 font-semibold transition-colors mt-3">
                Read more <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              {highlights.map((h) => (
                <SpotlightCard key={h.label} className="bento-card p-5 rounded-xl flex flex-col gap-1">
                  <AnimatedCounter value={h.value} className="text-3xl font-bold tracking-tight text-gradient" />
                  <span className="text-xs text-muted-foreground font-medium">{h.label}</span>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15} className="h-full">
          <div className="relative rounded-xl overflow-hidden"><div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/20 via-transparent to-ring/10" /><div className="relative glass-panel rounded-xl p-0.5 h-full gradient-border"><TerminalBlock lines={terminalLines} /></div></div>
        </ScrollReveal>
      </div>
    </SectionContainer>
  );
}
