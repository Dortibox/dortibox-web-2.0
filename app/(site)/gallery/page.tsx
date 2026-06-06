import type { Metadata } from "next";
import { getGalleryItems } from "@/sanity/lib/queries";
import { GalleryGrid } from "@/components/sections/GalleryGrid";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "See DortiBox in action — field operations, community events, marketing materials, and the team behind Freetown Waste Transformers.",
  openGraph: {
    title: "Gallery | DortiBox",
    description:
      "Photos and materials from DortiBox operations across Freetown.",
    url: "https://dortibox.com/gallery",
  },
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-forest-deeper overflow-hidden py-24 md:py-32">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
        <div className="absolute -left-16 bottom-0 w-[300px] h-[300px] rounded-full bg-amber opacity-10 pointer-events-none" />

        <div className="container-default relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-sage text-sm font-body">
              Our Work in Pictures
            </span>
          </div>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl leading-tight mb-5">
            DortiBox in <span className="text-amber"> action.</span>
          </h1>
          <p className="font-body text-sage text-lg leading-relaxed">
            From community clean-ups to app screenshots, field operations to
            marketing campaigns — here is a look at everything we do to keep
            Freetown clean.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <GalleryGrid items={items} />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
