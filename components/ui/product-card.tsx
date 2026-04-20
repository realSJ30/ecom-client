"use client";
import { Product } from "@/types";
import Image from "next/image";
import React, { MouseEventHandler } from "react";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingCart, ArrowUpRight } from "lucide-react";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${data.id}`);
  };

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    previewModal.onOpen(data);
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(data);
  };

  return (
    <div
      onClick={handleClick}
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-surface-1 p-3 transition hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_20px_50px_-20px_hsl(258_90%_66%/0.35)]"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[hsl(240_14%_10%)]">
        {data?.images?.[0]?.url && (
          <Image
            alt={data.name}
            src={data.images[0].url}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

        {data.isFeatured && (
          <span className="chip absolute left-3 top-3 border-white/10 bg-black/50 text-foreground backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(190_95%_55%)]" />
            Featured
          </span>
        )}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 translate-y-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 p-1.5 backdrop-blur-md">
            <IconButton
              aria-label="Quick view"
              onClick={onPreview}
              icon={<Expand className="h-4 w-4" />}
              className="h-9 w-9 border-transparent bg-transparent hover:bg-white/10"
            />
            <IconButton
              aria-label="Add to cart"
              onClick={onAddToCart}
              icon={<ShoppingCart className="h-4 w-4" />}
              className="h-9 w-9 border-transparent bg-primary text-white hover:bg-primary/90"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3 px-1.5 pb-2">
        <div className="min-w-0">
          <p className="truncate font-display text-base font-medium text-foreground">
            {data.name}
          </p>
          <p className="mt-0.5 truncate text-xs uppercase tracking-wider text-muted-foreground">
            {data.category?.name}
          </p>
        </div>
        <div className="shrink-0 text-right">
          <Currency
            value={data?.price}
            className="text-sm font-semibold text-foreground"
          />
          <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-muted-foreground opacity-0 transition group-hover:opacity-100">
            View <ArrowUpRight className="h-3 w-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
