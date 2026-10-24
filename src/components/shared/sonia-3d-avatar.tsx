"use client";

import dynamic from "next/dynamic";

const Sonia3DScene = dynamic(
  () => import("./sonia-3d-scene").then((module) => module.Sonia3DScene),
  { ssr: false, loading: () => null },
);

export function Sonia3DAvatar({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-full bg-transparent ${className}`}
      aria-label="Cute animated AI companion"
      title="Cute animated AI companion"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="bunny-fallback" />
      </div>
      <div className="relative z-10 h-full w-full" aria-hidden="true">
        <Sonia3DScene />
      </div>
      <style jsx>{`
        .bunny-fallback { position: absolute; inset: 20%; border-radius: 48% 48% 44% 44%; background: #f5f3ff; border: 2px solid #c4b5fd; animation: bunny-float 1.8s ease-in-out infinite; }
        .bunny-fallback::before, .bunny-fallback::after { content: ""; position: absolute; top: -25%; width: 22%; height: 42%; border-radius: 999px; background: #f5f3ff; border: 2px solid #c4b5fd; }
        .bunny-fallback::before { left: 18%; transform: rotate(-12deg); }
        .bunny-fallback::after { right: 18%; transform: rotate(12deg); }
        @keyframes bunny-float { 0%, 100% { transform: translateY(2px); } 50% { transform: translateY(-4px); } }
        @media (prefers-reduced-motion: reduce) { .bunny-fallback { animation: none; } }
      `}</style>
    </div>
  );
}
