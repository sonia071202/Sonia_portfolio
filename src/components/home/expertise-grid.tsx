"use client";

import {
  Server,
  Cloud,
  Brain,
  Link2,
  Layers,
  Shield,
  Code2,
  Cpu,
} from "lucide-react";
import { SectionContainer } from "@/components/shared/section-container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { m } from "motion/react";

const expertise = [
  { icon: Code2, title: "Programming", description: "Python, Java, JavaScript, and SQL", number: "01", gradient: "from-violet-500/20 to-purple-500/20" },
  { icon: Server, title: "Web Development", description: "Node.js, Express.js, HTML, CSS, and EJS", number: "02", gradient: "from-blue-500/20 to-cyan-500/20" },
  { icon: Layers, title: "Databases", description: "MongoDB, Mongoose, and MySQL", number: "03", gradient: "from-emerald-500/20 to-green-500/20" },
  { icon: Brain, title: "AI and Retrieval", description: "LangChain, embeddings, FAISS, and Gemini", number: "04", gradient: "from-pink-500/20 to-rose-500/20" },
  { icon: Link2, title: "Problem Solving", description: "Data structures, algorithms, and clean solutions", number: "05", gradient: "from-indigo-500/20 to-blue-500/20" },
  { icon: Shield, title: "Developer Tools", description: "Git, GitHub, authentication, and validation", number: "06", gradient: "from-amber-500/20 to-yellow-500/20" },
];

export function ExpertiseGrid() {
  return (
    <SectionContainer>
      <SectionHeading
        title="Core Expertise"
        eyebrow="Skills"
        description="The domains and disciplines I work across"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {expertise.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 0.06}>
            <SpotlightCard
              className="group bento-card rounded-xl h-full"
              spotlightColor={`oklch(0.72 0.22 ${250 + i * 15} / 0.08)`}
            >
              <div className="relative p-6 flex flex-col h-full">
                <div className={`absolute inset-0 rounded-[inherit] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <m.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/30 transition-all duration-500"
                    >
                      <item.icon className="h-5 w-5 text-primary" />
                    </m.div>
                    <span className="font-mono text-[10px] text-muted-foreground/30 group-hover:text-primary/40 transition-colors duration-500">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="font-semibold text-foreground text-sm tracking-tight mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        ))}
      </div>
    </SectionContainer>
  );
}
