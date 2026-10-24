"use client";

import { m } from "motion/react";

const nodes = [
  { id: "client", label: "Next.js", x: 50, y: 10, icon: "NX", layer: 4, tone: "from-violet-500/25 to-purple-500/10" },
  { id: "gateway", label: "Node.js API", x: 50, y: 31, icon: "JS", layer: 3, tone: "from-blue-500/25 to-cyan-500/10" },
  { id: "auth", label: "Passport.js", x: 14, y: 52, icon: "PA", layer: 2, tone: "from-fuchsia-500/25 to-pink-500/10" },
  { id: "services", label: "Python", x: 50, y: 54, icon: "PY", layer: 2, tone: "from-emerald-500/25 to-teal-500/10" },
  { id: "queue", label: "LangChain", x: 86, y: 52, icon: "LC", layer: 2, tone: "from-indigo-500/25 to-blue-500/10" },
  { id: "db", label: "MongoDB", x: 29, y: 77, icon: "MG", layer: 1, tone: "from-green-500/25 to-lime-500/10" },
  { id: "ai", label: "FAISS", x: 71, y: 77, icon: "AI", layer: 1, tone: "from-pink-500/25 to-rose-500/10" },
  { id: "cloud", label: "Cloudinary", x: 50, y: 96, icon: "CL", layer: 0, tone: "from-amber-500/25 to-orange-500/10" },
];

const edges: [string, string][] = [
  ["client", "gateway"],
  ["gateway", "auth"],
  ["gateway", "services"],
  ["gateway", "queue"],
  ["services", "db"],
  ["services", "ai"],
  ["auth", "db"],
  ["queue", "services"],
  ["db", "cloud"],
  ["ai", "cloud"],
];

function getNode(id: string) {
  return nodes.find((node) => node.id === id)!;
}

export function ArchitectureVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md [perspective:1100px]">
      <m.div
        className="absolute inset-0 [transform-style:preserve-3d]"
        initial={{ opacity: 0, rotateX: 8, rotateY: -8, y: 14 }}
        animate={{ opacity: 1, rotateX: 4, rotateY: -5, y: [0, -4, 0] }}
        transition={{ opacity: { duration: 0.6 }, rotateX: { duration: 0.9 }, rotateY: { duration: 0.9 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
        whileHover={{ rotateX: 0, rotateY: 0, scale: 1.015 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute inset-[8%] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute inset-[9%] rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary/[0.08] via-card/10 to-blue-500/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_25px_60px_rgba(70,40,160,0.12)] [transform:translateZ(-28px)]" />

        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true" style={{ transform: "translateZ(-4px)" }}>
          <defs>
            <linearGradient id="edge-gradient-3d" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.72 0.22 270)" stopOpacity="0.75" />
              <stop offset="100%" stopColor="oklch(0.72 0.22 230)" stopOpacity="0.18" />
            </linearGradient>
            <filter id="soft-glow">
              <feGaussianBlur stdDeviation="0.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {edges.map(([from, to], i) => {
            const a = getNode(from);
            const b = getNode(to);
            return (
              <g key={`${from}-${to}`}>
                <m.line
                  x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                  stroke="url(#edge-gradient-3d)"
                  strokeWidth="0.55"
                  strokeDasharray="2 1.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.8 }}
                  transition={{ duration: 0.8, delay: 0.25 + i * 0.07, ease: "easeOut" }}
                />
                <circle cx={(a.x + b.x) / 2} cy={(a.y + b.y) / 2} r="0.65" fill="oklch(0.72 0.22 270)" opacity="0.8" filter="url(#soft-glow)" />
              </g>
            );
          })}
          <circle r="1.05" fill="oklch(0.78 0.2 280)" filter="url(#soft-glow)">
            <animateMotion dur="4s" repeatCount="indefinite" path="M 50 10 L 50 31 L 50 54 L 29 77 L 50 96" />
          </circle>
          <circle r="0.9" fill="oklch(0.75 0.18 220)" filter="url(#soft-glow)">
            <animateMotion dur="5s" repeatCount="indefinite" begin="1s" path="M 50 31 L 86 52 L 50 54 L 71 77" />
          </circle>
          <circle r="0.8" fill="oklch(0.75 0.18 320)" filter="url(#soft-glow)">
            <animateMotion dur="5.5s" repeatCount="indefinite" begin="1.8s" path="M 50 31 L 14 52 L 29 77 L 50 96" />
          </circle>
        </svg>

        {nodes.map((node, i) => (
          <m.div
            key={node.id}
            initial={{ opacity: 0, scale: 0.72, z: -30 }}
            animate={{ opacity: 1, scale: 1, z: node.layer * 9 }}
            transition={{ duration: 0.55, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.13, z: node.layer * 9 + 24, rotateZ: i % 2 === 0 ? -2 : 2 }}
            className="absolute flex -translate-x-1/2 -translate-y-1/2 cursor-default flex-col items-center gap-1.5"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transformStyle: "preserve-3d" }}
          >
            <div className={`relative flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-gradient-to-br ${node.tone} bg-card/90 text-[10px] font-mono font-bold tracking-tight text-primary shadow-[0_8px_18px_rgba(80,50,170,0.16),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-xl transition-all duration-300 group-hover:border-primary/60 sm:h-11 sm:w-11`}>
              <span className="absolute inset-0 rounded-xl bg-primary/5" />
              <span className="relative">{node.icon}</span>
            </div>
            <span className="rounded-full border border-border/30 bg-background/70 px-2 py-0.5 text-[8px] font-mono tracking-wide text-muted-foreground shadow-sm backdrop-blur-md sm:text-[9px]">
              {node.label}
            </span>
          </m.div>
        ))}
      </m.div>
    </div>
  );
}
