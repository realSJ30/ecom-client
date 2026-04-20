"use client";

import NextImage from "next/image";
import { Tab } from "@headlessui/react";

import { Image } from "@/types";

import GalleryTab from "./gallery-tab";

interface GalleryProps {
  images: Image[];
}

const Gallery: React.FC<GalleryProps> = ({ images = [] }) => {
  return (
    <Tab.Group as="div" className="flex flex-col gap-5">
      <Tab.Panels className="aspect-square w-full">
        {images.map((image) => (
          <Tab.Panel key={image.id}>
            <div className="relative aspect-square h-full w-full overflow-hidden rounded-3xl border border-border bg-surface-1">
              <NextImage
                fill
                src={image.url}
                alt="Product image"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>

      <div className="hidden w-full sm:block">
        <Tab.List className="grid grid-cols-4 gap-3">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </Tab.List>
      </div>
    </Tab.Group>
  );
};

export default Gallery;
