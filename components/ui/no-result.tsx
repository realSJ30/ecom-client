import React from "react";
import { SearchX } from "lucide-react";

const NoResult = () => {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-surface-1 text-center">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface-2 text-muted-foreground">
        <SearchX className="h-5 w-5" />
      </div>
      <div>
        <p className="font-display text-base font-medium text-foreground">
          Nothing here yet
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Try adjusting your filters or check back soon for new drops.
        </p>
      </div>
    </div>
  );
};

export default NoResult;
