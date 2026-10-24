"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { m } from "motion/react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, [pathname]);

  const [targetPath, targetHash] = href.split("#");
  const isHashLink = Boolean(targetHash);
  const isActive = isHashLink
    ? pathname === targetPath && currentHash === `#${targetHash}`
    : href === "/"
      ? pathname === "/" && !currentHash
      : pathname === href && !currentHash;

  return (
    <Link
      href={href}
      prefetch
      onClick={onClick}
      className={`group relative isolate inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"} ${className ?? ""}`}
    >
      <m.span
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-xl border border-transparent bg-primary/0"
        whileHover={{ scale: 1.04, backgroundColor: "var(--nav-hover-bg, rgba(124, 58, 237, 0.10))", borderColor: "rgba(139, 92, 246, 0.28)" }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 420, damping: 28 }}
      />
      {isActive && (
        <m.span
          layoutId="portfolio-nav-active-box"
          className="absolute inset-0 -z-10 rounded-xl border border-primary/30 bg-primary/10 shadow-sm shadow-primary/10"
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
          aria-hidden="true"
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
