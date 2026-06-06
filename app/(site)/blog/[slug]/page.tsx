import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getBlogPostBySlug, getBlogSlugs, getBlogPosts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { formatDate, categoryLabels } from "@/lib/utils";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";
import type { BlogPost } from "@/types/sanity";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs().catch(() => []);
  return slugs.map((s: { slug: string }) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug).catch(() => null);
  if (!post) return { title: "Post not found" };
  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.seo?.ogImage
        ? [urlFor(post.seo.ogImage).width(1200).height(630).url()]
        : post.coverImage
        ? [urlFor(post.coverImage).width(1200).height(630).url()]
        : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(slug).catch(() => null),
    getBlogPosts(4).catch(() => []),
  ]);

  if (!post) notFound();

  const related = allPosts
    .filter((p: BlogPost) => p.slug.current !== slug)
    .slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-forest-deeper overflow-hidden py-20 md:py-24">
        <div className="absolute -right-32 -top-32 w-[400px] h-[400px] rounded-full bg-forest opacity-20 pointer-events-none" />

        <div className="container-default relative z-10 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sage hover:text-white font-body text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={15} />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            {post.category && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber/20 border border-amber/30 text-amber font-body text-xs font-semibold">
                <Tag size={11} />
                {categoryLabels[post.category] || post.category}
              </span>
            )}
            {post.publishedAt && (
              <span className="inline-flex items-center gap-1.5 text-sage font-body text-xs">
                <Calendar size={11} />
                {formatDate(post.publishedAt)}
              </span>
            )}
          </div>

          <h1 className="font-heading font-black text-white text-3xl md:text-5xl leading-tight mb-5">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="font-body text-sage text-lg leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="relative h-64 md:h-96 bg-forest-light overflow-hidden">
          <Image
            src={urlFor(post.coverImage).width(1400).height(600).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Body */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

            {/* Article */}
            <article className="lg:col-span-3">
              {post.body ? (
                <PortableTextRenderer value={post.body} />
              ) : (
                <p className="font-body text-muted">
                  This post has no content yet.
                </p>
              )}

              <div className="mt-12 pt-8 border-t border-sage/60 flex items-center justify-between flex-wrap gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-forest font-body text-sm font-semibold hover:text-amber transition-colors duration-200"
                >
                  <ArrowLeft size={15} />
                  Back to Blog
                </Link>
                <div className="flex items-center gap-2">
                  <span className="font-body text-muted text-xs">Share:</span>
                  {[
                    {
                      label: "Facebook",
                      href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://dortibox.com/blog/${slug}`)}`,
                    },
                    {
                      label: "X",
                      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://dortibox.com/blog/${slug}`)}`,
                    },
                  ].map((s) => (
                    
                    <a  key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full border border-sage/60 flex items-center justify-center font-heading font-bold text-muted text-xs hover:border-forest hover:text-forest transition-colors duration-200"
                    >
                      {s.label.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                <div className="bg-offwhite rounded-3xl p-6 border border-sage/60">
                  <h4 className="font-heading font-bold text-navy text-sm mb-3">
                    About DortiBox
                  </h4>
                  <p className="font-body text-muted text-xs leading-relaxed mb-4">
                    DortiBox is Freetown's digital waste management platform —
                    making collection simple, reliable, and accessible for every
                    household and business.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-forest font-body text-xs font-semibold hover:text-amber transition-colors duration-200"
                  >
                    Learn more
                    <ArrowLeft size={12} className="rotate-180" />
                  </Link>
                </div>

                <div className="bg-forest-deeper rounded-3xl p-6 relative overflow-hidden">
                  <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-forest/30 pointer-events-none" />
                  <div className="relative z-10">
                    <h4 className="font-heading font-bold text-white text-sm mb-2">
                      Download DortiBox
                    </h4>
                    <p className="font-body text-sage text-xs leading-relaxed mb-4">
                      Schedule your first pickup in under 2 minutes.
                    </p>
                    <Link
                      href="#download"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber text-white font-heading font-semibold text-xs hover:bg-amber-dark transition-colors duration-200"
                    >
                      Get the App
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-padding bg-offwhite">
          <div className="container-default">
            <h2 className="font-heading font-bold text-navy text-2xl mb-10">
              More from our blog
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p: BlogPost) => (
                <Link
                  key={p._id}
                  href={`/blog/${p.slug.current}`}
                  className="group bg-white rounded-3xl border border-sage/60 hover:border-forest/30 hover:shadow-card overflow-hidden transition-all duration-300"
                >
                  <div className="relative h-40 bg-forest-light overflow-hidden">
                    {p.coverImage ? (
                      <Image
                        src={urlFor(p.coverImage).width(400).height(200).url()}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-forest-gradient flex items-center justify-center">
                        <span className="text-3xl opacity-30">♻️</span>
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    {p.publishedAt && (
                      <p className="font-body text-muted text-xs mb-2">
                        {formatDate(p.publishedAt)}
                      </p>
                    )}
                    <h3 className="font-heading font-semibold text-navy text-sm leading-snug group-hover:text-forest transition-colors duration-200">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}