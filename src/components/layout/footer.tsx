"use client";

import Link from "next/link";
import { Github, Linkedin, Code2, BookOpen } from "lucide-react";
import { socialLinks } from "@/data/social";
import { navigation } from "@/data/navigation";
import { Magnetic } from "@/components/ui/magnetic";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Code2,
  BookOpen,
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/30 mt-8 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, oklch(0.72 0.22 270 / 0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid sm:grid-cols-[1fr_auto_auto] gap-12 sm:gap-16">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
            >
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary via-primary/80 to-ring flex items-center justify-center shadow-sm shadow-primary/20">
                <img src="/images/sonia-gupta.jpg" alt="Sonia Gupta" className="h-full w-full rounded-lg object-cover" />
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                Sonia Gupta
              </span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Software Developer building practical web, backend, and AI applications.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.slice(0, 3).map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Magnetic key={link.platform} strength={0.2}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                      aria-label={link.platform}
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                    </a>
                  </Magnetic>
                );
              })}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-5 font-mono">
              Pages
            </h4>
            <nav className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 animated-underline inline-block w-fit"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/50 mb-5 font-mono">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 animated-underline inline-block w-fit"
              >
                Send a message
              </Link>
              <a
                href="https://www.linkedin.com/in/sonia-gupta-a46263278/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 animated-underline inline-block w-fit"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/sonia071202"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 animated-underline inline-block w-fit"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground/40">
          <span>&copy; {new Date().getFullYear()} Sonia Gupta. All rights reserved.</span>
          <span className="font-mono tracking-wider">Built with Next.js + Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
