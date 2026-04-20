"use client";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Size, Color } from "@/types";
import qs from "query-string";
import { cn } from "@/lib/utils";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter: React.FC<FilterProps> = ({ data, name, valueKey }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {name}
      </h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {data.map((filter) => {
          const active = selectedValue === filter.id;
          return (
            <button
              type="button"
              key={filter.id}
              onClick={() => onClick(filter.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition",
                active
                  ? "border-primary/60 bg-gradient-to-br from-[hsl(258_90%_66%)]/20 to-[hsl(190_95%_55%)]/20 text-foreground"
                  : "border-border bg-surface-2 text-muted-foreground hover:border-primary/40 hover:text-foreground"
              )}
            >
              {"value" in filter && /^#/.test(filter.value) && (
                <span
                  className="h-3 w-3 rounded-full border border-white/10"
                  style={{ backgroundColor: filter.value }}
                />
              )}
              {filter.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
