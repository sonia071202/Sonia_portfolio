"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";
import { Download } from "lucide-react";
import { NavLink } from "./nav-link";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollProgressBar } from "./scroll-progress";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4"
      >
        <div className={cn(
            "flex h-14 items-center justify-between px-6 rounded-2xl w-full max-w-4xl transition-none",
            scrolled
              ? "glass-panel shadow-lg shadow-black/5 dark:shadow-black/30 gradient-border"
              : "bg-transparent border border-transparent"
          )}>
            {/* Logo */}
            <Link
              href="/"
              className="group relative flex items-center gap-2.5"
            >
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary via-primary/80 to-ring flex items-center justify-center shrink-0 shadow-md shadow-primary/20">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/portrait_under_1mb-ToR80ufqRMQyIIcjzsSCkVXgao16Pm.jpg"
                  alt="Sonia Gupta"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <span className="font-mono text-sm font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                Sonia Gupta
              </span>
            </Link>

            {/* Desktop nav */}
            <a href="/resume/sonia-gupta-resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="Open Sonia Gupta resume" className="hidden items-center gap-2 rounded-md border border-primary/30 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/10 sm:inline-flex"><Download className="size-3.5" aria-hidden="true" />Resume</a>
        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 md:flex">
              {navigation.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <ThemeToggle />
              <MobileNav />
            </div>
          </div>
      </header>
    </>
  );
}
