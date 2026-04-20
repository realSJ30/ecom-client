import React from "react";
import Container from "@/components/ui/container";

const Loading = () => {
  return (
    <Container className="py-8 sm:py-10 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="aspect-square w-full animate-pulse rounded-3xl border border-border bg-surface-1" />
          <div className="mt-5 grid grid-cols-4 gap-3">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square animate-pulse rounded-xl border border-border bg-surface-1"
              />
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="space-y-4 rounded-3xl border border-border bg-surface-1 p-8">
            <div className="h-4 w-24 animate-pulse rounded-full bg-surface-3" />
            <div className="h-10 w-3/4 animate-pulse rounded-xl bg-surface-3" />
            <div className="h-6 w-32 animate-pulse rounded-full bg-surface-3" />
            <div className="h-px w-full bg-border" />
            <div className="h-20 w-full animate-pulse rounded-xl bg-surface-3" />
            <div className="h-12 w-full animate-pulse rounded-full bg-surface-3" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Loading;
