import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
  variant?: "hero" | "inline";
  eyebrow?: string;
  description?: string;
  ctaHref?: string;
  ctaLabel?: string;
}

const Billboard: React.FC<BillboardProps> = ({
  data,
  variant = "hero",
  eyebrow = "Featured drop",
  description = "Designed for the long-haul commute. Engineered for everyday use — field-tested on the move.",
  ctaHref = "#collection",
  ctaLabel = "Shop the drop",
}) => {
  if (variant === "inline") {
    return (
      <div className="relative overflow-hidden rounded-3xl border border-border">
        <div
          className="relative aspect-[2.4/1] w-full bg-cover bg-center md:aspect-[3/1]"
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-center gap-4 p-6 sm:p-10">
            <span className="chip w-fit">Collection</span>
            <h2 className="max-w-xl font-display text-2xl font-semibold leading-tight text-foreground sm:text-4xl">
              {data?.label}
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-surface-1 ring-glow">
      <div className="grid gap-0 lg:grid-cols-5">
        <div className="relative z-10 flex flex-col justify-between gap-10 p-8 sm:p-12 lg:col-span-2 lg:p-14">
          <div>
            <span className="chip">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(190_95%_55%)]" />
              {eyebrow}
            </span>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {data?.label || "Gear that moves with you."}
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              {description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_hsl(258_90%_66%/0.45)] transition hover:-translate-y-px hover:bg-primary/90"
            >
              {ctaLabel}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="#essentials"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-surface-3"
            >
              Browse essentials
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:col-span-3 lg:min-h-[560px]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${data?.imageUrl})`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/80 lg:bg-gradient-to-l lg:via-transparent lg:to-background/80" />
          <div className="absolute bottom-6 right-6 max-w-xs rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="inline-block h-2 w-2 rounded-full bg-[hsl(190_95%_55%)]" />
              Live inventory
            </div>
            <p className="mt-2 font-display text-sm font-medium text-foreground">
              Limited release — restocks weekly. Free shipping over $80.
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[hsl(258_90%_66%)] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-[hsl(190_95%_55%)] opacity-20 blur-3xl" />
    </section>
  );
};

export default Billboard;
