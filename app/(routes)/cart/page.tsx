"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const cart = useCart();

  return (
    <Container className="space-y-10 py-8 sm:py-10 lg:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Continue shopping
          </Link>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Your cart
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {cart.items.length} {cart.items.length === 1 ? "item" : "items"} in
            your bag
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-start lg:gap-10">
        <div className="lg:col-span-7">
          {cart.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-dashed border-border bg-surface-1 p-10 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-muted-foreground">
                <ShoppingBag className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display text-lg font-medium text-foreground">
                  Your cart is empty
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Browse the collection to find your next piece of gear.
                </p>
              </div>
              <Link
                href="/"
                className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[hsl(258_90%_66%)] via-[hsl(280_85%_62%)] to-[hsl(190_95%_55%)] px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
              >
                Explore products
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-border rounded-3xl border border-border bg-surface-1">
              {cart.items.map((item) => (
                <CartItem key={item.id} data={item} />
              ))}
            </ul>
          )}
        </div>
        <div className="lg:col-span-5">
          <Suspense>
            <Summary />
          </Suspense>
        </div>
      </div>
    </Container>
  );
};

export default CartPage;
