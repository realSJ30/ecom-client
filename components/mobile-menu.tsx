"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { Menu, X, Search } from "lucide-react";
import { usePathname } from "next/navigation";

import IconButton from "@/components/ui/icon-button";
import Logo from "@/components/ui/logo";
import { Category } from "@/types";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  categories: Category[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const routes = [
    { href: "/", label: "Home" },
    ...categories.map((c) => ({ href: `/category/${c.id}`, label: c.name })),
    { href: "/cart", label: "Cart" },
  ];

  return (
    <>
      <IconButton
        aria-label="Open menu"
        icon={<Menu className="h-4 w-4" />}
        onClick={() => setOpen(true)}
        className="lg:hidden"
      />

      <Dialog
        as="div"
        open={open}
        onClose={() => setOpen(false)}
        className="relative z-50 lg:hidden"
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 flex">
          <Dialog.Panel className="ml-auto flex h-full w-full max-w-sm flex-col bg-[hsl(240_16%_6%)] shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <Logo />
              <IconButton
                aria-label="Close menu"
                icon={<X className="h-4 w-4" />}
                onClick={() => setOpen(false)}
              />
            </div>

            <div className="border-b border-border px-5 py-4">
              <label className="relative block">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  placeholder="Search gear, bags, accessories…"
                  className="h-11 w-full rounded-full border border-border bg-surface-2 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:outline-none"
                />
              </label>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4">
              <ul className="space-y-1">
                {routes.map((r) => {
                  const active = pathname === r.href;
                  return (
                    <li key={r.href}>
                      <Link
                        href={r.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
                          active
                            ? "bg-surface-2 text-foreground border border-border"
                            : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                        )}
                      >
                        <span>{r.label}</span>
                        <span className="text-muted-foreground">→</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-border p-5">
              <p className="text-xs text-muted-foreground">
                Built for movers. Sign in to track orders and sync your wishlist.
              </p>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileMenu;
