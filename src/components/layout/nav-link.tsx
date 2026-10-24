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
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      prefetch
      onClick={onClick}
      className={`relative isolate inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"} ${className ?? ""}`}
    >
      <span className="relative z-10">{children}</span>
      {isActive && (
        <m.span
          layoutId="portfolio-nav-underline"
          className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 420, damping: 32 }}
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
