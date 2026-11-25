"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SiteLogo } from "@/components/site-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navItems, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        <SiteLogo
          priority
          sizes="(min-width: 640px) 80px, 64px"
          className="h-16 w-16 sm:h-20 sm:w-20"
        />

        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Principale"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-primary"
          >
            Instagram
          </Link>
          <Link
            href="/#contatti"
            className={cn(
              buttonVariants({ size: "sm", variant: "outline" }),
              "border-primary/25 bg-primary/15 text-foreground hover:bg-primary/25",
            )}
          >
            Iscrizioni
          </Link>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-expanded={open}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open ? (
        <div className="border-t border-border/60 bg-background px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contatti"
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "mt-2 w-full border-primary/25 bg-primary/15 text-foreground hover:bg-primary/25",
              )}
            >
              Iscrizioni
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
