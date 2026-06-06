import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getLegalPageBySlug, getLegalSlugs } from "@/sanity/lib/queries";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getLegalSlugs().catch(() => []);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLegalPageBySlug(slug).catch(() => null);
  if (!page) return { title: "Legal" };
  return {
    title: page.title,
    description: `${page.title} — Freetown Waste Transformers SL Limited`,
  };
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = await getLegalPageBySlug(slug).catch(() => null);

  if (!page) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-sage/60 py-16 md:py-20">
        <div className="container-default max-w-3xl">
          <h1 className="font-heading font-black text-navy text-4xl md:text-5xl mb-4">
            {page.title}
          </h1>
          {page.lastUpdated && (
            <p className="font-body text-muted text-sm">
              Last updated: {formatDate(page.lastUpdated)}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-default max-w-3xl">
          {page.body ? (
            <PortableTextRenderer
              value={page.body}
              className="prose-sm md:prose"
            />
          ) : (
            <p className="font-body text-muted">
              This page has no content yet. Please check back later.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
