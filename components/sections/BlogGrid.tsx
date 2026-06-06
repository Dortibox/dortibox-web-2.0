"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { formatDate, categoryLabels } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/types/sanity";

const categories = [
  { value: "all", label: "All Posts" },
  { value: "news", label: "News" },
  { value: "impact", label: "Impact" },
  { value: "community", label: "Community" },
  { value: "product", label: "Product" },
  { value: "press", label: "Press" },
];

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? posts : posts.filter((p) => p.category === active);

  return (
    <div>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {categories.map((cat) => {
          const count =
            cat.value === "all"
              ? posts.length
              : posts.filter((p) => p.category === cat.value).length;

          if (cat.value !== "all" && count === 0) return null;

          return (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-body text-sm transition-all duration-200 ${
                active === cat.value
                  ? "bg-forest text-white font-semibold"
                  : "bg-offwhite text-muted hover:bg-forest-light hover:text-forest"
              }`}
            >
              {cat.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded-full ${
                  active === cat.value
                    ? "bg-white/20 text-white"
                    : "bg-sage/60 text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Posts grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="font-body text-muted text-base">
            No posts in this category yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group bg-white rounded-3xl border border-sage/60 hover:border-forest/30 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden transition-all duration-300 flex flex-col"
            >
              {/* Cover image */}
              <div className="relative h-48 bg-forest-light overflow-hidden">
                {post.coverImage ? (
                  <Image
                    src={urlFor(post.coverImage).width(600).height(300).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-forest-gradient flex items-center justify-center">
                    <span className="text-4xl opacity-30">♻️</span>
                  </div>
                )}
                {post.category && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-semibold bg-white/90 text-forest">
                      {categoryLabels[post.category] || post.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {post.publishedAt && (
                  <div className="flex items-center gap-1.5 mb-3">
                    <Calendar size={12} className="text-muted" />
                    <span className="font-body text-muted text-xs">
                      {formatDate(post.publishedAt)}
                    </span>
                  </div>
                )}

                <h3 className="font-heading font-bold text-navy text-base leading-snug mb-3 group-hover:text-forest transition-colors duration-200 flex-1">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="font-body text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-1 text-forest font-body text-sm font-semibold mt-auto">
                  Read more
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
