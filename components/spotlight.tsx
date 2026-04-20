import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  CloudRain,
  ShieldCheck,
  Laptop,
  ArrowUpRight,
} from "lucide-react";
import Currency from "@/components/ui/currency";
import { Product } from "@/types";

interface SpotlightProps {
  product?: Product;
}

const highlights = [
  {
    icon: Box,
    title: "Spacious layout",
    description:
      "Purpose-built compartments keep essentials organized without the bulge.",
  },
  {
    icon: ShieldCheck,
    title: "Comfort fit",
    description:
      "Weight-dispersing straps keep long hauls feeling effortless.",
  },
  {
    icon: CloudRain,
    title: "All-weather shell",
    description:
      "Weatherproof exterior protects against rain, snow, and spills.",
  },
  {
    icon: Laptop,
    title: "Tech-ready",
    description: "Padded sleeve fits up to 16\" laptops with quick access.",
  },
];

const Spotlight: React.FC<SpotlightProps> = ({ product }) => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border bg-surface-1 p-6 sm:p-10 lg:p-14">
      <div className="pointer-events-none absolute inset-0 bg-card-glow opacity-70" />
      <div className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Best of the lineup
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Built to be your <span className="text-gradient">go-to</span> pack
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            One pack for the office, the airport, and everywhere in between —
            engineered to disappear into your routine.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
          <div className="grid grid-cols-1 gap-4 lg:col-span-4 lg:order-1">
            {highlights.slice(0, 2).map((h) => (
              <HighlightCard key={h.title} {...h} />
            ))}
          </div>

          <div className="relative order-first lg:col-span-4 lg:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-border bg-surface-2">
              {product?.images?.[0]?.url ? (
                <Image
                  src={product.images[0].url}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full items-center justify-center text-muted-foreground">
                  Featured product
                </div>
              )}
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-3 backdrop-blur-md">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {product?.name || "Signature Pack"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {product?.category?.name || "Flagship"}
                  </p>
                </div>
                {product?.price && (
                  <Currency
                    value={product.price}
                    className="text-sm font-semibold text-foreground"
                  />
                )}
              </div>
            </div>
            {product?.id && (
              <div className="mt-6 flex justify-center">
                <Link
                  href={`/product/${product.id}`}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_hsl(258_90%_66%/0.45)] transition hover:-translate-y-px hover:bg-primary/90"
                >
                  View product
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 gap-4 lg:col-span-4 lg:order-3">
            {highlights.slice(2).map((h) => (
              <HighlightCard key={h.title} {...h} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface HighlightProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const HighlightCard: React.FC<HighlightProps> = ({ icon: Icon, title, description }) => (
  <div className="rounded-2xl border border-border bg-surface-2/70 p-5 transition hover:border-primary/40 hover:bg-surface-3">
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-1 text-foreground">
      <Icon className="h-4 w-4" />
    </div>
    <p className="mt-4 font-display text-sm font-semibold uppercase tracking-wider text-foreground">
      {title}
    </p>
    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
      {description}
    </p>
  </div>
);

export default Spotlight;
