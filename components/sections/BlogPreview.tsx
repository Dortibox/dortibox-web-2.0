import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { formatDate, categoryLabels } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type { BlogPost } from "@/types/sanity";

interface BlogPreviewProps {
  posts?: BlogPost[];
}

export function BlogPreview({ posts = [] }: BlogPreviewProps) {
  if (!posts.length) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="flex items-end justify-between mb-12">
          <SectionHeading
            label="From Our Blog"
            title="Latest from DortiBox"
            align="left"
          />
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-1 text-forest font-heading font-semibold text-sm hover:text-amber transition-colors"
          >
            All posts →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.slice(0, 3).map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="card group overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Cover image */}
              <div className="relative h-48 bg-forest-light overflow-hidden">
                {post.coverImage ? (
                  <Image
                    src={urlFor(post.coverImage).width(600).height(300).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-forest-gradient flex items-center justify-center">
                    <span className="text-4xl opacity-40">♻️</span>
                  </div>
                )}
                {post.category && (
                  <div className="absolute top-3 left-3">
                    <Badge variant="forest">
                      {categoryLabels[post.category] || post.category}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {post.publishedAt && (
                  <p className="font-body text-muted text-xs mb-2">
                    {formatDate(post.publishedAt)}
                  </p>
                )}
                <h3 className="font-heading font-semibold text-navy text-base leading-snug mb-2 group-hover:text-forest transition-colors">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="font-body text-muted text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/blog" className="btn-ghost">
            View all posts →
          </Link>
        </div>
      </div>
    </section>
  );
}
