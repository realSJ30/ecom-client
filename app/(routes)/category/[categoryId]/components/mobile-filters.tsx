"use client";
import IconButton from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog } from "@headlessui/react";
import { SlidersHorizontal, X } from "lucide-react";
import React, { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({ sizes, colors }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary/50 hover:bg-surface-3 lg:hidden"
      >
        <SlidersHorizontal className="h-4 w-4" />
        Filters
      </button>

      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={() => setOpen(false)}
      >
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className="ml-auto flex h-full w-full max-w-xs flex-col bg-[hsl(240_16%_6%)] shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                Filters
              </h3>
              <IconButton
                aria-label="Close filters"
                icon={<X className="h-4 w-4" />}
                onClick={() => setOpen(false)}
              />
            </div>
            <div className="flex-1 space-y-8 overflow-y-auto p-5">
              <Filter valueKey="sizeId" name="Size" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
