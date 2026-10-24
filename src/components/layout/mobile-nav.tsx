"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { navigation } from "@/data/navigation";
import { NavLink } from "./nav-link";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="md:hidden relative" />
        }
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-80 border-l-border/50 bg-background/95 backdrop-blur-xl">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <nav className="flex flex-col gap-2 mt-12">
          {navigation.map((item) => (
            <div key={item.href}>
              <NavLink
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors block"
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </nav>
        <div className="absolute bottom-8 left-6 right-6">
          <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />
          <p className="text-xs text-muted-foreground/50 text-center">Sonia Gupta</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
