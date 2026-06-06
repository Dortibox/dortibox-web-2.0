"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn, MapPin } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";

interface GalleryItem {
  _id: string;
  title: string;
  description?: string;
  image: { asset: { _ref: string } };
  category: string;
  featured: boolean;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

const categoryLabels: Record<string, string> = {
  all: "All",
  marketing: "Marketing",
  operations: "Field Operations",
  community: "Community",
  events: "Events",
  team: "Team",
};

const fallbackItems: GalleryItem[] = [
  {
    _id: "f1",
    title: "DortiBox 2.0 Is For Everyone",
    description:
      "Marketing campaign highlighting USSD access for non-smartphone users across Freetown.",
    image: { asset: { _ref: "" } },
    category: "marketing",
    featured: true,
  },
  {
    _id: "f2",
    title: "Waste Management Made Simple",
    description: "DortiBox app interface showing the schedule pickup feature.",
    image: { asset: { _ref: "" } },
    category: "marketing",
    featured: false,
  },
];

export function GalleryGrid({ items }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const list = items.length ? items : [];
  const categories = [
    "all",
    ...Array.from(new Set(list.map((i) => i.category))),
  ];

  const filtered =
    activeCategory === "all"
      ? list
      : list.filter((i) => i.category === activeCategory);

  if (list.length === 0) {
    return (
      <div className="text-center py-24">
        <div className="w-16 h-16 rounded-full bg-forest-light flex items-center justify-center mx-auto mb-5">
          <span className="text-2xl">📸</span>
        </div>
        <h3 className="font-heading font-bold text-navy text-xl mb-3">
          Gallery coming soon
        </h3>
        <p className="font-body text-muted text-base max-w-sm mx-auto">
          We are adding photos from our operations and community work. Check
          back soon.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => {
          const count =
            cat === "all"
              ? list.length
              : list.filter((i) => i.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm transition-all duration-200",
                activeCategory === cat
                  ? "bg-forest text-white font-semibold"
                  : "bg-offwhite text-muted hover:bg-forest-light hover:text-forest",
              )}
            >
              {categoryLabels[cat] || cat}
              <span
                className={cn(
                  "text-xs px-1.5 py-0.5 rounded-full",
                  activeCategory === cat
                    ? "bg-white/20 text-white"
                    : "bg-sage/60 text-muted",
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((item, i) => (
          <div
            key={item._id}
            className="break-inside-avoid group relative rounded-3xl overflow-hidden cursor-pointer bg-forest-light"
            onClick={() => setLightbox(item)}
          >
            {item.image?.asset?._ref ? (
              <div className="relative">
                <Image
                  src={urlFor(item.image).width(600).url()}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ) : (
              <div className="h-56 bg-forest-gradient flex items-center justify-center">
                <span className="text-4xl opacity-30">📸</span>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-deeper/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="font-heading font-bold text-white text-sm mb-1">
                  {item.title}
                </p>
                {item.description && (
                  <p className="font-body text-sage text-xs line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <ZoomIn size={16} className="text-white" />
              </div>
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-body font-semibold bg-white/90 text-forest">
                {categoryLabels[item.category] || item.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-forest-deeper rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={18} className="text-white" />
            </button>

            {/* Image */}
            {lightbox.image?.asset?._ref ? (
              <div className="relative aspect-video">
                <Image
                  src={urlFor(lightbox.image).width(1200).url()}
                  alt={lightbox.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ) : (
              <div className="aspect-video bg-forest-gradient flex items-center justify-center">
                <span className="text-6xl opacity-30">📸</span>
              </div>
            )}

            {/* Caption */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-semibold bg-forest-light text-forest">
                  {categoryLabels[lightbox.category] || lightbox.category}
                </span>
              </div>
              <h3 className="font-heading font-bold text-white text-xl mb-2">
                {lightbox.title}
              </h3>
              {lightbox.description && (
                <p className="font-body text-sage text-sm leading-relaxed">
                  {lightbox.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
