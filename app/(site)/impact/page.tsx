import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Users,
  Recycle,
  TrendingUp,
  Building2,
  GraduationCap,
  Home,
  Store,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { getImpactPage } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Customer } from "@/types/sanity";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "See the real impact DortiBox is making across Freetown — 7+ communities served, 500+ households registered, and a city getting cleaner every week.",
  openGraph: {
    title: "Our Impact | DortiBox",
    description:
      "Real numbers from real communities. See how DortiBox is transforming waste management across Freetown.",
    url: "https://dortibox.com/impact",
  },
};

const fallbackMetrics = [
  {
    icon: MapPin,
    number: "7+",
    label: "Communities Served",
    description:
      "Across Freetown's Central Business District and surrounding areas",
  },
  {
    icon: Users,
    number: "500+",
    label: "Registered Households",
    description:
      "Families and businesses actively managing waste through DortiBox",
  },
  {
    icon: Recycle,
    number: "Weekly",
    label: "Collection Frequency",
    description:
      "Reliable scheduled pickups keeping communities consistently clean",
  },
  {
    icon: TrendingUp,
    number: "2",
    label: "Mobile Money Partners",
    description:
      "Orange Money and Afrimoney enabling cashless payments for all users",
  },
];

const fallbackCommunities = [
  "Sorie Town",
  "Albert Academy",
  "Kroo Town",
  "Sanders Brook",
  "Central",
  "Murray Town",
  "Brookfields",
];

const fallbackStories = [
  {
    community: "Kroo Town",
    headline: "From irregular pickups to weekly reliability",
    body: "Kroo Town residents previously relied on informal collectors with no fixed schedule. Since DortiBox launched coverage in the area, over 80 households have subscribed — and waste pileups on major streets have noticeably reduced.",
    tag: "Community",
  },
  {
    community: "Murray Town",
    headline: "Mobile money makes payment frictionless",
    body: "Many Murray Town residents were hesitant to subscribe due to cash handling concerns. The integration of Orange Money and Afrimoney removed that barrier entirely — over 60% of Murray Town subscribers pay via mobile money.",
    tag: "Payments",
  },
  {
    community: "Brookfields",
    headline: "Small businesses taking waste seriously",
    body: "The Brookfields business corridor now has over 20 commercial subscribers. Restaurant and shop owners report that reliable waste collection has improved customer perception and reduced pest-related complaints.",
    tag: "Business",
  },
];

const customerTypeIcons: Record<string, React.ElementType> = {
  household: Home,
  community: Users,
  business: Store,
  school: GraduationCap,
  institution: Building2,
};

const customerTypeColors: Record<string, { bg: string; icon: string }> = {
  household: { bg: "bg-forest-light", icon: "text-forest" },
  business: { bg: "bg-amber-light", icon: "text-amber-dark" },
  school: { bg: "bg-offwhite", icon: "text-navy" },
  community: { bg: "bg-sage", icon: "text-navy" },
  institution: { bg: "bg-navy/10", icon: "text-navy" },
};

const metricIcons = [MapPin, Users, Recycle, TrendingUp];

export default async function ImpactPage() {
  const page = await getImpactPage();

  const metrics = page?.keyMetrics?.length
    ? page.keyMetrics.map(
        (
          m: {
            number: string;
            suffix?: string;
            label: string;
            description?: string;
          },
          i: number,
        ) => ({
          icon: metricIcons[i % metricIcons.length],
          number: `${m.number}${m.suffix || ""}`,
          label: m.label,
          description: m.description || "",
        }),
      )
    : fallbackMetrics;

  const communities: string[] = page?.communities?.length
    ? page.communities
    : fallbackCommunities;

  const stories = page?.impactStories?.length
    ? page.impactStories
    : fallbackStories;

  const customers: Customer[] = page?.featuredCustomers || [];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-forest-deeper overflow-hidden py-24 md:py-32">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
        <div className="absolute -left-16 bottom-0 w-[300px] h-[300px] rounded-full bg-amber opacity-10 pointer-events-none" />

        <div className="container-default relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
              <span className="text-sage text-sm font-body">
                Real Impact. Real Numbers.
              </span>
            </div>
            <h1 className="font-heading font-black text-white text-5xl md:text-6xl leading-tight mb-6">
              {page?.hero?.headline || "Freetown is getting"}
              <span className="text-amber">
                {page?.hero?.headline ? "" : " cleaner."}
              </span>
            </h1>
            <p className="font-body text-sage text-lg leading-relaxed max-w-xl">
              {page?.hero?.subheading ||
                "Every subscription, every pickup, every USSD dial is a measurable step toward a healthier city. Here is what DortiBox has achieved across Freetown so far."}
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <SectionHeading
            label="Key Metrics"
            title="The numbers behind our work"
            subtitle="Updated figures from active operations across Freetown."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map(
              (
                m: {
                  icon: React.ElementType;
                  number: string;
                  label: string;
                  description: string;
                },
                i: number,
              ) => {
                const Icon = m.icon;
                return (
                  <div
                    key={i}
                    className="group p-7 rounded-3xl border border-sage/60 hover:border-forest/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-forest-light flex items-center justify-center mb-5 group-hover:bg-forest transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-forest group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div className="font-heading font-black text-3xl text-navy mb-1">
                      {m.number}
                    </div>
                    <div className="font-heading font-semibold text-forest text-sm mb-2">
                      {m.label}
                    </div>
                    <div className="font-body text-muted text-xs leading-relaxed">
                      {m.description}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-80 h-80 rounded-full bg-forest/20 pointer-events-none" />
        <div className="absolute -left-10 bottom-0 w-64 h-64 rounded-full bg-gold/10 pointer-events-none" />

        <div className="container-default relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber text-xs font-body font-semibold tracking-widest uppercase block mb-3">
                Coverage
              </span>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-5 leading-tight">
                Block 6 CBD Communities
              </h2>
              <p className="font-body text-sage text-base leading-relaxed mb-8">
                DortiBox currently operates across communities in Freetown's
                Central Business District. Each community has dedicated
                collectors and scheduled pickup days.
              </p>
              <div className="flex flex-wrap gap-3">
                {communities.map((c: string) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sage font-body text-sm hover:bg-white/20 transition-colors duration-200"
                  >
                    <MapPin size={12} className="text-amber shrink-0" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-video md:aspect-square">
              <Image
                src="/images/poster-collection-points.jpg"
                alt="DortiBox collection points across Freetown"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-heading font-bold text-white text-sm">
                  Block 6 | CBD Communities
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who we serve — from Sanity customers */}
      {customers.length > 0 && (
        <section className="section-padding bg-offwhite">
          <div className="container-default">
            <SectionHeading
              label="Who We Serve"
              title="Customers across every sector"
              subtitle="From individual households to schools, businesses, and community groups — DortiBox serves Freetown in all its diversity."
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {customers.map((c: Customer) => {
                const Icon = customerTypeIcons[c.type] || Home;
                const colors = customerTypeColors[c.type] || {
                  bg: "bg-forest-light",
                  icon: "text-forest",
                };
                return (
                  <div
                    key={c._id}
                    className="bg-white rounded-3xl p-7 border border-sage/60 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl ${colors.bg} flex items-center justify-center mb-5 overflow-hidden`}
                    >
                      {c.logo ? (
                        <Image
                          src={urlFor(c.logo).width(80).height(80).url()}
                          alt={c.name}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full p-1"
                        />
                      ) : (
                        <Icon size={22} className={colors.icon} />
                      )}
                    </div>
                    <h4 className="font-heading font-bold text-navy text-base mb-1">
                      {c.name}
                    </h4>
                    {c.location && (
                      <div className="flex items-center gap-1 mb-3">
                        <MapPin size={11} className="text-amber" />
                        <span className="font-body text-muted text-xs">
                          {c.location}
                        </span>
                      </div>
                    )}
                    {c.description && (
                      <p className="font-body text-muted text-sm leading-relaxed">
                        {c.description}
                      </p>
                    )}
                    {c.testimonialQuote && (
                      <blockquote className="mt-4 pt-4 border-t border-sage/60 font-body text-muted text-xs italic leading-relaxed">
                        "{c.testimonialQuote}"
                      </blockquote>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Impact Stories */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <SectionHeading
            label="Impact Stories"
            title="Change you can see on the ground"
            subtitle="Real stories from the communities DortiBox serves."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map(
              (
                s: {
                  community: string;
                  headline: string;
                  body: string;
                  tag: string;
                },
                i: number,
              ) => (
                <div
                  key={i}
                  className="rounded-3xl border border-sage/60 overflow-hidden hover:shadow-card hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="h-1.5 bg-forest-gradient" />
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-5">
                      <span className="inline-flex items-center gap-1.5 text-xs font-body text-muted">
                        <MapPin size={11} className="text-amber" />
                        {s.community}
                      </span>
                      {s.tag && (
                        <span className="text-xs font-body font-semibold text-forest bg-forest-light px-3 py-1 rounded-full">
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="font-heading font-bold text-navy text-lg mb-3 leading-snug">
                      {s.headline}
                    </h3>
                    <p className="font-body text-muted text-sm leading-relaxed">
                      {s.body}
                    </p>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Investor / Partner CTA */}
      <section className="section-padding bg-offwhite">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-navy rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-forest/20 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-amber text-xs font-body font-semibold tracking-widest uppercase block mb-4">
                  For Partners
                </span>
                <h3 className="font-heading font-bold text-white text-2xl mb-4 leading-snug">
                  Partner with us to expand coverage
                </h3>
                <p className="font-body text-sage text-sm leading-relaxed mb-7">
                  We are actively seeking government, NGO, and corporate
                  partners to help bring reliable waste management to more
                  Freetown communities.
                </p>
                <Link
                  href="/partners"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber text-white font-heading font-semibold text-sm hover:bg-amber-dark transition-colors duration-200"
                >
                  Explore Partnerships
                </Link>
              </div>
            </div>

            <div className="bg-forest-deeper rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-amber/10 pointer-events-none" />
              <div className="relative z-10">
                <span className="text-amber text-xs font-body font-semibold tracking-widest uppercase block mb-4">
                  For Investors
                </span>
                <h3 className="font-heading font-bold text-white text-2xl mb-4 leading-snug">
                  A proven model with room to scale
                </h3>
                <p className="font-body text-sage text-sm leading-relaxed mb-7">
                  DortiBox operates in an underserved market with strong demand,
                  mobile money infrastructure, and a platform built to scale
                  across Sierra Leone and West Africa.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/30 text-white font-heading font-semibold text-sm hover:border-white hover:bg-white/10 transition-all duration-200"
                >
                  Request a Brief
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
