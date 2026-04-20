import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Category } from "@/types";

interface CollectionsGridProps {
  categories: Category[];
}

const CollectionsGrid: React.FC<CollectionsGridProps> = ({ categories }) => {
  if (!categories?.length) return null;

  const [first, ...rest] = categories;

  return (
    <section id="collection" className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Collections
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Browse the lineup
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            A tightly curated set of categories — each piece pulls its weight.
            Start with what fits your day.
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-5">
        {/* Featured collection tile */}
        <Link
          href={`/category/${first.id}`}
          className="group relative col-span-1 overflow-hidden rounded-3xl border border-border bg-surface-1 lg:col-span-3"
        >
          <div
            className="aspect-[16/10] w-full bg-cover bg-center transition duration-700 group-hover:scale-[1.03]"
            style={{ backgroundImage: `url(${first.billboard?.imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <span className="chip">Featured collection</span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
              {first.name}
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground">
              {first.billboard?.label || "Shop the pieces defining the season."}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
              Explore
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </div>
        </Link>

        {/* Side collection grid */}
        <div className="grid gap-5 lg:col-span-2">
          {rest.slice(0, 2).map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="group relative overflow-hidden rounded-3xl border border-border bg-surface-1"
            >
              <div
                className="aspect-[16/9] w-full bg-cover bg-center transition duration-700 group-hover:scale-[1.03] lg:aspect-auto lg:h-full lg:min-h-[160px]"
                style={{ backgroundImage: `url(${cat.billboard?.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {cat.name}
                </h3>
                <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                  Shop now <ArrowUpRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
          {rest.length < 2 && (
            <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-3xl border border-dashed border-border bg-surface-1 p-6 text-center lg:aspect-auto lg:min-h-[160px]">
              <div>
                <p className="font-display text-lg font-semibold text-foreground">
                  More drops soon
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  New collections ship every few weeks.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {rest.length > 2 && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {rest.slice(2).map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.id}`}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface-1"
            >
              <div
                className="aspect-[4/3] w-full bg-cover bg-center transition duration-500 group-hover:scale-[1.04]"
                style={{ backgroundImage: `url(${cat.billboard?.imageUrl})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4">
                <p className="font-display text-sm font-semibold text-foreground">
                  {cat.name}
                </p>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-foreground" />
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default CollectionsGrid;
