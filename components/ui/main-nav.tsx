"use client";
import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface MainNavProps {
  data: Category[];
  className?: string;
  onNavigate?: () => void;
}

const MainNav: React.FC<MainNavProps> = ({ data, className, onNavigate }) => {
  const pathname = usePathname();
  const routes = [
    { href: "/", label: "Home", active: pathname === "/" },
    ...data.map((route) => ({
      href: `/category/${route.id}`,
      label: route.name,
      active: pathname === `/category/${route.id}`,
    })),
  ];

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          onClick={onNavigate}
          className={cn(
            "relative rounded-full px-3.5 py-2 text-sm font-medium transition",
            route.active
              ? "text-foreground bg-surface-2 border border-border"
              : "text-muted-foreground hover:text-foreground hover:bg-white/5"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
