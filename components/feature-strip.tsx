import React from "react";
import { Truck, ShieldCheck, Repeat, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free shipping",
    description: "On every order over $80 — no code needed.",
  },
  {
    icon: ShieldCheck,
    title: "Secure checkout",
    description: "Bank-grade encryption and fraud protection.",
  },
  {
    icon: Repeat,
    title: "30-day returns",
    description: "Not feeling it? Send it back, on us.",
  },
  {
    icon: Headphones,
    title: "Human support",
    description: "Real humans, 7 days a week.",
  },
];

const FeatureStrip = () => {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => (
        <div
          key={f.title}
          className="group relative overflow-hidden rounded-2xl border border-border bg-surface-1 p-5 transition hover:border-primary/40 hover:bg-surface-2"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-[hsl(258_90%_66%)] to-[hsl(190_95%_55%)] opacity-0 blur-2xl transition duration-500 group-hover:opacity-20" />
          <div className="relative flex items-start gap-4">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-2 text-foreground">
              <f.icon className="h-4 w-4" />
            </div>
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {f.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {f.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeatureStrip;
