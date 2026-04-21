"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Lock, Truck } from "lucide-react";
import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import { toast } from "@/components/ui/use-toast";
import useCart from "@/hooks/use-cart";
import { buildStoreApiUrl } from "@/lib/store-api";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cartItems = isMounted ? items : [];
  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price),
    0
  );
  const shippingThreshold = 80;
  const shipping = subtotal > 0 && subtotal < shippingThreshold ? 8 : 0;
  const total = subtotal + shipping;

  const onCheckout = async () => {
    try {
      const checkoutUrl = buildStoreApiUrl("checkout");
      const response = await axios.post(checkoutUrl, {
        productIds: cartItems.map((item) => item.id),
      });

      const redirectUrl = response.data?.url;

      if (typeof redirectUrl !== "string" || redirectUrl.length === 0) {
        throw new Error("Checkout response did not include a redirect URL.");
      }

      window.location.href = redirectUrl;
    } catch (error) {
      console.error("Checkout failed:", error);
      toast({
        title: "Checkout unavailable",
        description: "Please verify the store API URL and try again.",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if (searchParams.get("success")) {
      toast({ title: "Payment completed." });
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast({ title: "Something went wrong." });
    }
  }, [searchParams, removeAll]);

  return (
    <div className="sticky top-28 rounded-3xl border border-border bg-surface-1 p-6 sm:p-8">
      <h2 className="font-display text-lg font-semibold text-foreground">
        Order summary
      </h2>
      <div className="mt-6 space-y-3 text-sm">
        <Row label="Subtotal">
          <Currency value={subtotal} className="text-sm text-foreground" />
        </Row>
        <Row label="Shipping">
          {shipping === 0 ? (
            <span className="text-sm font-medium text-[hsl(190_95%_70%)]">
              Free
            </span>
          ) : (
            <Currency value={shipping} className="text-sm text-foreground" />
          )}
        </Row>
        <Row label="Taxes">
          <span className="text-sm text-muted-foreground">Calculated at checkout</span>
        </Row>
      </div>

      <div className="my-6 h-px bg-border" />

      <div className="flex items-baseline justify-between">
        <span className="font-display text-base font-semibold text-foreground">
          Total
        </span>
        <Currency
          value={total}
          className="font-display text-2xl font-semibold text-foreground"
        />
      </div>

      {subtotal > 0 && subtotal < shippingThreshold && (
        <p className="mt-4 rounded-xl border border-border bg-surface-2 p-3 text-xs text-muted-foreground">
          Add <Currency value={shippingThreshold - subtotal} className="inline text-xs text-foreground" /> more
          to unlock free shipping.
        </p>
      )}

      <Button
        onClick={onCheckout}
        disabled={cartItems.length === 0}
        size="lg"
        className="mt-6 w-full"
      >
        <Lock className="h-4 w-4" />
        Secure checkout
      </Button>

      <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
        <Truck className="h-3.5 w-3.5" />
        <span>Ships in 1–2 business days. Free returns within 30 days.</span>
      </div>
    </div>
  );
};

const Row: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div className="flex items-center justify-between">
    <span className="text-muted-foreground">{label}</span>
    {children}
  </div>
);

export default Summary;
