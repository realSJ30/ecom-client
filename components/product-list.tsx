import { Product } from "@/types";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import NoResult from "@/components/ui/no-result";
import ProductCard from "@/components/ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
  eyebrow?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  items,
  eyebrow,
  description,
  ctaLabel,
  ctaHref,
}) => {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {eyebrow && (
            <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">
              {description}
            </p>
          )}
        </div>
        {ctaLabel && ctaHref && (
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      {items.length === 0 ? (
        <NoResult />
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => (
            <ProductCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductList;
