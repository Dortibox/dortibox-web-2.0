import type { Metadata } from "next";
import Image from "next/image";
import { Target, Eye, Heart, Leaf, Users, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Freetown Waste Transformers was founded to make waste management simple, reliable, and accessible for every household and business in Freetown, Sierra Leone.",
  openGraph: {
    title: "About Us | DortiBox",
    description:
      "Learn about Freetown Waste Transformers — our story, mission, vision, and the values that guide everything we do.",
    url: "https://dortibox.com/about",
  },
};

const values = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description:
      "Every pickup, every subscription, every dial of our USSD code is a step toward a cleaner, healthier Freetown. We take that seriously.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "We build for the communities we serve — from households in Kroo Town to businesses in Brookfields. Local needs drive every decision.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description:
      "Waste doesn't wait. Neither do we. Our collectors show up, our platform works, and our support team is reachable when you need us.",
  },
  {
    icon: Heart,
    title: "Inclusion",
    description:
      "No smartphone? No data? No problem. DortiBox is built for everyone — that's why USSD access is a core feature, not an afterthought.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-forest-deeper overflow-hidden py-24 md:py-32">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
        <div className="absolute -left-16 bottom-0 w-[300px] h-[300px] rounded-full bg-amber opacity-10 pointer-events-none" />

        <div className="container-default relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber" />
              <span className="text-sage text-sm font-body">Our Story</span>
            </div>
            <h1 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Transforming waste.
              <br />
              <span className="text-amber">Transforming Freetown.</span>
            </h1>
            <p className="font-body text-sage text-lg leading-relaxed max-w-xl">
              Freetown Waste Transformers was founded with one goal — to make
              waste management simple, reliable, and accessible for every
              household and business in Freetown, Sierra Leone.
            </p>
          </div>
        </div>
      </section>

      {/* ── Story ── */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label block mb-3">Our Story</span>
              <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-6 leading-tight">
                Born out of a city that deserved better
              </h2>
              <div className="space-y-4 font-body text-muted text-base leading-relaxed">
                <p>
                  Freetown has always been a city of resilience and community.
                  But for too long, waste management remained informal,
                  unreliable, and inaccessible to many households — particularly
                  those without the means to engage formal services.
                </p>
                <p>
                  Freetown Waste Transformers was established to change that.
                  Starting with a simple idea — that technology could connect
                  households directly to verified collectors — we built
                  DortiBox, a platform designed specifically for the realities
                  of life in Freetown.
                </p>
                <p>
                  Mobile money integration, USSD access for non-smartphone
                  users, and community-level coverage were not features added
                  later. They were built in from day one, because we knew the
                  city we were building for.
                </p>
              </div>
            </div>

            {/* Stats panel */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  n: "2022",
                  label: "Year Founded",
                  sub: "Freetown, Sierra Leone",
                },
                { n: "7+", label: "Communities", sub: "Across Freetown's CBD" },
                {
                  n: "500+",
                  label: "Households",
                  sub: "Registered on DortiBox",
                },
                { n: "100%", label: "Local Team", sub: "Sierra Leonean built" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-offwhite rounded-3xl p-6 border border-sage/60"
                >
                  <div className="font-heading font-black text-3xl text-forest mb-1">
                    {s.n}
                  </div>
                  <div className="font-heading font-semibold text-navy text-sm mb-1">
                    {s.label}
                  </div>
                  <div className="font-body text-muted text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section-padding bg-offwhite">
        <div className="container-default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div className="bg-white rounded-3xl p-10 border border-sage/60">
              <div className="w-12 h-12 rounded-2xl bg-forest-light flex items-center justify-center mb-6">
                <Target size={22} className="text-forest" />
              </div>
              <span className="section-label block mb-3">Our Mission</span>
              <h3 className="font-heading font-bold text-navy text-2xl mb-4 leading-snug">
                Making waste management work for every Freetown resident
              </h3>
              <p className="font-body text-muted text-base leading-relaxed">
                To provide simple, reliable, and affordable waste collection
                services to households and businesses across Freetown — using
                technology that meets people where they are, with or without a
                smartphone.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-forest-deeper rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-forest opacity-40" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  <Eye size={22} className="text-amber" />
                </div>
                <span className="text-amber text-xs font-body font-semibold tracking-widest uppercase block mb-3">
                  Our Vision
                </span>
                <h3 className="font-heading font-bold text-white text-2xl mb-4 leading-snug">
                  A cleaner, healthier Freetown for every generation
                </h3>
                <p className="font-body text-sage text-base leading-relaxed">
                  To be the leading waste management platform in West Africa —
                  expanding city by city, community by community, with a model
                  that is both commercially sustainable and socially impactful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <SectionHeading
            label="What We Stand For"
            title="Our values guide everything we do"
            subtitle="From how we build our platform to how we show up in the communities we serve."
            className="mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
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
                  <h4 className="font-heading font-semibold text-navy text-base mb-3">
                    {v.title}
                  </h4>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Partners strip ── */}
      <section className="py-12 bg-offwhite border-y border-sage/60">
        <div className="container-default">
          <p className="text-center font-body text-xs text-muted tracking-widest uppercase mb-8">
            Backed and supported by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {["GSMA", "Orange Money", "Afrimoney", "Freetown City Council"].map(
              (p) => (
                <span
                  key={p}
                  className="font-heading font-bold text-navy/40 hover:text-navy text-sm tracking-wide transition-colors duration-200 cursor-default"
                >
                  {p}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection />
    </>
  );
}
