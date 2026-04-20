import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { cn } from "@/lib/utils";
import { Image } from "@/types";

interface GalleryTabProps {
  image: Image;
}

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
  return (
    <Tab className="relative flex aspect-square cursor-pointer items-center justify-center rounded-xl focus:outline-none">
      {({ selected }) => (
        <div className="relative h-full w-full">
          <span className="absolute inset-0 overflow-hidden rounded-xl border border-border">
            <NextImage
              fill
              src={image.url}
              alt=""
              sizes="140px"
              className="object-cover object-center"
            />
          </span>
          <span
            className={cn(
              "pointer-events-none absolute inset-0 rounded-xl ring-2 transition",
              selected
                ? "ring-[hsl(258_90%_66%)] ring-offset-2 ring-offset-background"
                : "ring-transparent"
            )}
          />
        </div>
      )}
    </Tab>
  );
};

export default GalleryTab;
