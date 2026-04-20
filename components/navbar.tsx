import React from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

import Container from "@/components/ui/container";
import Logo from "@/components/ui/logo";
import MainNav from "@/components/ui/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";
import MobileMenu from "@/components/mobile-menu";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <header className="sticky top-0 z-40">
      <div className="relative overflow-hidden border-b border-border/60 bg-gradient-to-r from-[hsl(258_90%_10%)] via-[hsl(240_20%_6%)] to-[hsl(190_60%_10%)]">
        <Container>
          <div className="flex h-9 items-center justify-center gap-2 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-[hsl(190_95%_65%)]" />
            <span>
              <span className="text-foreground font-medium">NEW:</span> 10% off
              your first order with code{" "}
              <span className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-foreground">
                WELCOME10
              </span>
            </span>
          </div>
        </Container>
      </div>

      <div className="border-b border-border/60 bg-background/70 backdrop-blur-xl">
        <Container>
          <div className="flex h-16 items-center gap-4 lg:h-20">
            <Link href="/" className="shrink-0" aria-label="KULTUR home">
              <Logo />
            </Link>

            <MainNav data={categories} className="ml-6 hidden lg:flex" />

            <div className="ml-auto flex items-center gap-2">
              <NavbarActions />
              <MobileMenu categories={categories} />
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
