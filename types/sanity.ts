import type { PortableTextBlock } from "@portabletext/react";

// ─── Shared ───────────────────────────────────────────────────────────────────
export interface SanityImage {
  _type: "image";
  asset: { _ref: string; _type: "reference" };
  hotspot?: { x: number; y: number };
  alt?: string;
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

// ─── Site Settings ────────────────────────────────────────────────────────────
export interface SiteSettings {
  siteName: string;
  logo: SanityImage;
  ussdCode: string;
  appStoreUrl: string;
  playStoreUrl: string;
  footerTagline: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  partnerLogos: Array<{
    name: string;
    logo: SanityImage;
    url?: string;
  }>;
  contactEmail: string;
  contactPhone: string;
  address: string;
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export interface HomePage {
  hero: {
    headline: string;
    subheading: string;
    ctaPrimaryLabel: string;
    ctaPrimaryUrl: string;
    ctaSecondaryLabel: string;
    ctaSecondaryUrl: string;
    backgroundImage: SanityImage;
  };
  audienceSegments: Array<{
    label: string;
    description: string;
    icon: string;
    linkTo: string;
  }>;
  howItWorks: Array<{
    stepNumber: number;
    title: string;
    description: string;
    icon: string;
  }>;
  impactStats: Array<{
    number: string;
    suffix: string;
    label: string;
    description?: string;
  }>;
  ussdCallout: {
    headline: string;
    body: string;
    image: SanityImage;
  };
  featuredTestimonials: Testimonial[];
}

// ─── Team ─────────────────────────────────────────────────────────────────────
export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  photo?: SanityImage;
  linkedIn?: string;
  isLeadership: boolean;
  order: number;
}

// ─── Blog ─────────────────────────────────────────────────────────────────────
export interface BlogPost {
  _id: string;
  title: string;
  slug: SanitySlug;
  publishedAt: string;
  category: "news" | "impact" | "community" | "product" | "press";
  coverImage?: SanityImage;
  excerpt?: string;
  body?: PortableTextBlock[];
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    ogImage?: SanityImage;
  };
}

// ─── Customer ─────────────────────────────────────────────────────────────────
export interface Customer {
  _id: string;
  name: string;
  type: "household" | "community" | "business" | "school" | "institution";
  location?: string;
  logo?: SanityImage;
  description?: string;
  testimonialQuote?: string;
  featured: boolean;
}

// ─── Partner ──────────────────────────────────────────────────────────────────
export interface Partner {
  _id: string;
  name: string;
  logo?: SanityImage;
  website?: string;
  type: "government" | "mobile-money" | "ngo" | "corporate" | "technology";
  description?: string;
  featured: boolean;
  order?: number;
}

// ─── Testimonial ──────────────────────────────────────────────────────────────
export interface Testimonial {
  quote: string;
  name: string;
  role?: string;
  community?: string;
  customerType?: string;
  photo?: SanityImage;
}
