"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      prefetch
      onClick={onClick}
      className={`relative isolate inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150 ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"} ${className ?? ""}`}
    >
      {isActive && (
        <span
          className="absolute inset-0 -z-10 rounded-md bg-primary/10 ring-1 ring-primary/15"
          aria-hidden="true"
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
