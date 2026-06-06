import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Landmark,
  Globe,
  Banknote,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { getPartners } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import type { Partner } from "@/types/sanity";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Partner with Freetown Waste Transformers. We work with government bodies, NGOs, international organisations, corporates, and impact investors.",
  openGraph: {
    title: "Partners | DortiBox",
    description:
      "Build a cleaner Freetown with us. Explore partnership opportunities with Freetown Waste Transformers.",
    url: "https://dortibox.com/partners",
  },
};

const partnershipTypes = [
  {
    icon: Landmark,
    title: "Government & Municipal",
    audience: "City councils, ministries, local government",
    description:
      "We work with government bodies to bring digital waste management infrastructure to communities at scale. Our platform integrates with existing municipal frameworks and supports data-driven policy decisions.",
    benefits: [
      "Community-level coverage data and reporting",
      "Digital payment trails replacing cash handling",
      "Scalable model deployable across districts",
      "Alignment with national sanitation goals",
    ],
    color: "bg-navy",
  },
  {
    icon: Globe,
    title: "NGO & International",
    audience: "Development organisations, impact funds, UN agencies",
    description:
      "For organisations working on urban sanitation, climate resilience, or economic inclusion in West Africa, DortiBox offers a proven, measurable platform to channel support and measure outcomes.",
    benefits: [
      "Measurable impact metrics for reporting",
      "Community reach across underserved areas",
      "USSD access ensuring last-mile inclusion",
      "Local team with strong community trust",
    ],
    color: "bg-forest-deeper",
  },
  {
    icon: Building2,
    title: "Corporate & Commercial",
    audience: "Businesses, property developers, institutions",
    description:
      "Companies operating in Freetown can partner with FWT for reliable commercial waste collection, CSR initiatives, or co-branded community programmes that demonstrate environmental commitment.",
    benefits: [
      "Reliable scheduled commercial collection",
      "CSR and sustainability reporting support",
      "Co-branded community clean-up programmes",
      "Flexible commercial contracts",
    ],
    color: "bg-navy",
  },
  {
    icon: Banknote,
    title: "Impact Investment",
    audience: "VCs, impact investors, development finance",
    description:
      "DortiBox operates in an underserved market with strong demand signals, proven mobile money infrastructure, and a platform architecturally ready to scale across Sierra Leone and West Africa.",
    benefits: [
      "Proven operational model in Block 6 CBD",
      "Multi-tenant SaaS architecture for scale",
      "Strong USSD + mobile-first inclusion story",
      "Aligned with SDG 11 and SDG 13",
    ],
    color: "bg-forest-deeper",
  },
];

const typeLabels: Record<string, string> = {
  government: "Government",
  "mobile-money": "Mobile Payments",
  ngo: "NGO / International",
  corporate: "Corporate",
  technology: "Technology",
};

export default async function PartnersPage() {
  const partners = await getPartners();

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
              Partnerships & Collaboration
            </span>
          </div>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl leading-tight mb-6">
            Build a cleaner Freetown
            <span className="text-amber"> with us.</span>
          </h1>
          <p className="font-body text-sage text-lg leading-relaxed max-w-xl mb-10">
            Whether you are a government body, an international organisation, a
            local business, or an impact investor — there is a meaningful way to
            work with Freetown Waste Transformers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber text-white font-heading font-bold text-base hover:bg-amber-dark transition-colors duration-200"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Current Partners — from Sanity */}
      {partners.length > 0 && (
        <section className="section-padding bg-white">
          <div className="container-default">
            <SectionHeading
              label="Current Partners"
              title="Who we already work with"
              subtitle="FWT is backed and supported by organisations that believe in what we are building."
              className="mb-16"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partners.map((p: Partner) => (
                <div
                  key={p._id}
                  className="bg-white rounded-3xl p-7 border border-sage/60 hover:border-forest/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-5">
                    {/* Logo or initial */}
                    <div className="w-12 h-12 rounded-2xl bg-forest-light flex items-center justify-center overflow-hidden">
                      {p.logo ? (
                        <Image
                          src={urlFor(p.logo).width(80).height(80).url()}
                          alt={p.name}
                          width={48}
                          height={48}
                          className="object-contain w-full h-full p-1"
                        />
                      ) : (
                        <span className="font-heading font-black text-forest text-sm">
                          {p.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    {p.type && (
                      <span className="text-xs font-body text-muted bg-sage/40 px-3 py-1 rounded-full">
                        {typeLabels[p.type] || p.type}
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-base mb-3">
                    {p.name}
                  </h3>
                  {p.description && (
                    <p className="font-body text-muted text-sm leading-relaxed">
                      {p.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partnership Types */}
      <section className="section-padding bg-offwhite">
        <div className="container-default">
          <SectionHeading
            label="How We Partner"
            title="Find the right partnership model"
            subtitle="We work with different types of organisations in different ways. Find the model that fits your mandate."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnershipTypes.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={i}
                  className={`${p.color} rounded-3xl p-10 relative overflow-hidden`}
                >
                  <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <Icon size={22} className="text-amber" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-white text-xl leading-snug">
                          {p.title}
                        </h3>
                        <p className="font-body text-sage text-xs mt-1">
                          {p.audience}
                        </p>
                      </div>
                    </div>
                    <p className="font-body text-sage text-sm leading-relaxed mb-7">
                      {p.description}
                    </p>
                    <ul className="space-y-2.5">
                      {p.benefits.map((b, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <CheckCircle
                            size={15}
                            className="text-amber shrink-0 mt-0.5"
                          />
                          <span className="font-body text-sage text-sm">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why FWT */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label block mb-3">Why FWT</span>
              <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-6 leading-tight">
                Why partner with Freetown Waste Transformers?
              </h2>
              <div className="space-y-4 font-body text-muted text-base leading-relaxed">
                <p>
                  FWT is not a startup importing a foreign model into Sierra
                  Leone. We are a local organisation that understands the city,
                  the infrastructure, and the people we serve. That local
                  knowledge is a genuine competitive advantage — and it is
                  something a partner gains access to immediately.
                </p>
                <p>
                  Our platform is built to scale. DortiBox Plus — currently in
                  development — is a multi-tenant SaaS architecture designed to
                  support expansion across multiple cities and regions without
                  rebuilding from scratch.
                </p>
                <p>
                  We have already demonstrated that the model works. Hundreds of
                  households and businesses across Freetown's CBD are paying,
                  scheduling, and receiving collections through our platform
                  every week.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "2022", label: "Founded", sub: "Freetown, Sierra Leone" },
                {
                  n: "2+",
                  label: "Active Partners",
                  sub: "GSMA and Freetown City Council",
                },
                { n: "7+", label: "Communities", sub: "Block 6 CBD coverage" },
                {
                  n: "SDG 11",
                  label: "& SDG 13",
                  sub: "Sustainable cities and climate action",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-offwhite rounded-3xl p-6 border border-sage/60"
                >
                  <div className="font-heading font-black text-2xl text-forest mb-1">
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

      {/* CTA */}
      <section className="section-padding bg-offwhite">
        <div className="container-default">
          <div className="bg-navy rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-forest/20 pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-amber/10 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <span className="section-label block mb-3 text-amber">
                Start a Conversation
              </span>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-5 leading-tight">
                Ready to work together?
              </h2>
              <p className="font-body text-sage text-base leading-relaxed mb-8">
                Tell us about your organisation and what you are looking to
                achieve. We will respond within 2 business days.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber text-white font-heading font-bold text-base hover:bg-amber-dark transition-colors duration-200"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}