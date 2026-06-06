import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { formatDate, categoryLabels } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { CTASection } from "@/components/sections/CTASection";
import type { BlogPost } from "@/types/sanity";
import { BlogGrid } from "@/components/sections/BlogGrid";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "News, impact stories, community updates and product announcements from Freetown Waste Transformers and DortiBox.",
  openGraph: {
    title: "Blog | DortiBox",
    description:
      "Stories, updates and insights from the DortiBox team in Freetown.",
    url: "https://dortibox.com/blog",
  },
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-forest-deeper overflow-hidden py-24 md:py-28">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
        <div className="absolute -left-16 bottom-0 w-[300px] h-[300px] rounded-full bg-amber opacity-10 pointer-events-none" />

        <div className="container-default relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber" />
            <span className="text-sage text-sm font-body">
              Stories, Updates & Impact
            </span>
          </div>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl leading-tight mb-5">
            From the
            <span className="text-amber"> DortiBox team.</span>
          </h1>
          <p className="font-body text-sage text-lg leading-relaxed">
            News, community stories, product updates, and insights from Freetown
            Waste Transformers.
          </p>
        </div>
      </section>

      {/* Blog grid with category filter */}
      <section className="section-padding bg-white">
        <div className="container-default">
          {posts.length > 0 ? (
            <BlogGrid posts={posts} />
          ) : (
            <div className="text-center py-24">
              <div className="w-16 h-16 rounded-full bg-forest-light flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-heading font-bold text-navy text-xl mb-3">
                No posts yet
              </h3>
              <p className="font-body text-muted text-base max-w-sm mx-auto">
                Check back soon — we will be publishing news and stories from
                across Freetown shortly.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
