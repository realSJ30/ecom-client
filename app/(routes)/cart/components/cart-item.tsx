"use client";
import Currency from "@/components/ui/currency";
import IconButton from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  return (
    <li className="flex gap-4 p-4 sm:gap-6 sm:p-6">
      <Link
        href={`/product/${data.id}`}
        className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-border bg-surface-2 sm:h-32 sm:w-32"
      >
        <Image
          fill
          sizes="128px"
          src={data.images[0]?.url}
          alt={data.name}
          className="object-cover object-center"
        />
      </Link>
      <div className="relative flex flex-1 flex-col justify-between gap-2">
        <div className="absolute right-0 top-0">
          <IconButton
            aria-label="Remove item"
            onClick={onRemove}
            icon={<X className="h-3.5 w-3.5" />}
            className="h-8 w-8"
          />
        </div>
        <div className="pr-10">
          <Link
            href={`/product/${data.id}`}
            className="font-display text-base font-medium text-foreground transition hover:text-[hsl(280_85%_75%)] sm:text-lg"
          >
            {data.name}
          </Link>
          <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
            {data.color?.name && (
              <span className="inline-flex items-center gap-1.5">
                <span
                  className="h-2.5 w-2.5 rounded-full border border-white/10"
                  style={{ backgroundColor: data.color.value }}
                />
                {data.color.name}
              </span>
            )}
            {data.size?.name && (
              <span className="rounded-full border border-border bg-surface-2 px-2 py-0.5">
                Size {data.size.name}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <span className="text-xs text-muted-foreground">Qty 1</span>
          <Currency
            value={data.price}
            className="text-base font-semibold text-foreground"
          />
        </div>
      </div>
    </li>
  );
};

export default CartItem;
