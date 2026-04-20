"use client";
import React, { useEffect, useState } from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";
import IconButton from "@/components/ui/icon-button";
import { cn } from "@/lib/utils";

interface NavbarActionsProps {
  className?: string;
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ className }) => {
  const router = useRouter();
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={cn("flex items-center gap-2", className)}>
        <div className="h-10 w-10 rounded-full bg-surface-2" />
        <div className="h-10 w-10 rounded-full bg-surface-2" />
        <div className="h-10 w-24 rounded-full bg-surface-2" />
      </div>
    );
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <IconButton
        aria-label="Search"
        icon={<Search className="h-4 w-4" />}
        className="hidden sm:inline-flex"
      />
      <IconButton
        aria-label="Account"
        icon={<User className="h-4 w-4" />}
        className="hidden sm:inline-flex"
      />
      <button
        type="button"
        onClick={() => router.push("/cart")}
        aria-label="View cart"
        className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/80 pl-2 pr-4 py-1.5 text-sm font-medium text-foreground backdrop-blur transition hover:border-primary/50 hover:bg-surface-3"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white">
          <ShoppingBag className="h-3.5 w-3.5" />
        </span>
        <span>Cart</span>
        <span className="inline-flex min-w-6 items-center justify-center rounded-full bg-white/10 px-1.5 text-xs text-foreground">
          {cart.items.length}
        </span>
      </button>
    </div>
  );
};

export default NavbarActions;
