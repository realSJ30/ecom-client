"use client";
import { Product } from "@/types";
import React from "react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart, ShieldCheck, Truck, Repeat } from "lucide-react";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();

  const onAddToCart = () => {
    cart.addItem(data);
  };

  return (
    <div className="rounded-3xl border border-border bg-surface-1 p-6 sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="chip">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[hsl(190_95%_55%)]" />
          In stock
        </span>
        <span className="chip">{data.category?.name}</span>
      </div>

      <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {data.name}
      </h1>

      <div className="mt-4 flex items-baseline gap-3">
        <Currency
          value={data.price}
          className="font-display text-3xl font-semibold text-foreground"
        />
        <span className="text-xs text-muted-foreground">Incl. taxes · Free shipping over $80</span>
      </div>

      <div className="divider my-6" />

      <div className="space-y-5">
        {data.size?.name && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Size
            </h3>
            <div className="mt-2 inline-flex rounded-full border border-border bg-surface-2 px-4 py-1.5 text-sm font-medium text-foreground">
              {data.size.name}
            </div>
          </div>
        )}

        {data.color?.value && (
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Color
            </h3>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-1.5 text-sm font-medium text-foreground">
              <span
                className="h-3.5 w-3.5 rounded-full border border-white/10"
                style={{ backgroundColor: data.color.value }}
              />
              {data.color.name}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button
          size="lg"
          className="flex-1"
          onClick={onAddToCart}
        >
          Add to cart
          <ShoppingCart className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="lg" className="flex-1">
          Buy now
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
        <Perk icon={Truck} label="Free shipping" />
        <Perk icon={Repeat} label="30-day returns" />
        <Perk icon={ShieldCheck} label="Secure checkout" />
      </div>
    </div>
  );
};

const Perk: React.FC<{
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}> = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 rounded-xl border border-border bg-surface-2 p-3 text-muted-foreground">
    <Icon className="h-3.5 w-3.5 text-foreground" />
    <span>{label}</span>
  </div>
);

export default Info;
