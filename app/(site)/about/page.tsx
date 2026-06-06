// import type { Metadata } from "next";
// import Image from "next/image";
// import { Target, Eye, Heart, Leaf, Users, Shield } from "lucide-react";
// import { SectionHeading } from "@/components/ui/SectionHeading";
// import { CTASection } from "@/components/sections/CTASection";

// export const metadata: Metadata = {
//   title: "About Us",
//   description:
//     "Freetown Waste Transformers was founded to make waste management simple, reliable, and accessible for every household and business in Freetown, Sierra Leone.",
//   openGraph: {
//     title: "About Us | DortiBox",
//     description:
//       "Learn about Freetown Waste Transformers — our story, mission, vision, and the values that guide everything we do.",
//     url: "https://dortibox.com/about",
//   },
// };

// const values = [
//   {
//     icon: Leaf,
//     title: "Environmental Responsibility",
//     description:
//       "Every pickup, every subscription, every dial of our USSD code is a step toward a cleaner, healthier Freetown. We take that seriously.",
//   },
//   {
//     icon: Users,
//     title: "Community First",
//     description:
//       "We build for the communities we serve — from households in Kroo Town to businesses in Brookfields. Local needs drive every decision.",
//   },
//   {
//     icon: Shield,
//     title: "Reliability",
//     description:
//       "Waste doesn't wait. Neither do we. Our collectors show up, our platform works, and our support team is reachable when you need us.",
//   },
//   {
//     icon: Heart,
//     title: "Inclusion",
//     description:
//       "No smartphone? No data? No problem. DortiBox is built for everyone — that's why USSD access is a core feature, not an afterthought.",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <>
//       {/* ── Hero ── */}
//       <section className="relative bg-forest-deeper overflow-hidden py-24 md:py-32">
//         <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
//         <div className="absolute -left-16 bottom-0 w-[300px] h-[300px] rounded-full bg-amber opacity-10 pointer-events-none" />

//         <div className="container-default relative z-10">
//           <div className="max-w-3xl">
//             <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
//               <span className="w-2 h-2 rounded-full bg-amber" />
//               <span className="text-sage text-sm font-body">Our Story</span>
//             </div>
//             <h1 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
//               Transforming waste.
//               <br />
//               <span className="text-amber">Transforming Freetown.</span>
//             </h1>
//             <p className="font-body text-sage text-lg leading-relaxed max-w-xl">
//               Freetown Waste Transformers was founded with one goal — to make
//               waste management simple, reliable, and accessible for every
//               household and business in Freetown, Sierra Leone.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ── Story ── */}
//       <section className="section-padding bg-white">
//         <div className="container-default">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <span className="section-label block mb-3">Our Story</span>
//               <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-6 leading-tight">
//                 Born out of a city that deserved better
//               </h2>
//               <div className="space-y-4 font-body text-muted text-base leading-relaxed">
//                 <p>
//                   Freetown has always been a city of resilience and community.
//                   But for too long, waste management remained informal,
//                   unreliable, and inaccessible to many households — particularly
//                   those without the means to engage formal services.
//                 </p>
//                 <p>
//                   Freetown Waste Transformers was established to change that.
//                   Starting with a simple idea — that technology could connect
//                   households directly to verified collectors — we built
//                   DortiBox, a platform designed specifically for the realities
//                   of life in Freetown.
//                 </p>
//                 <p>
//                   Mobile money integration, USSD access for non-smartphone
//                   users, and community-level coverage were not features added
//                   later. They were built in from day one, because we knew the
//                   city we were building for.
//                 </p>
//               </div>
//             </div>

//             {/* Stats panel */}
//             <div className="grid grid-cols-2 gap-4">
//               {[
//                 {
//                   n: "2022",
//                   label: "Year Founded",
//                   sub: "Freetown, Sierra Leone",
//                 },
//                 { n: "7+", label: "Communities", sub: "Across Freetown's CBD" },
//                 {
//                   n: "500+",
//                   label: "Households",
//                   sub: "Registered on DortiBox",
//                 },
//                 { n: "100%", label: "Local Team", sub: "Sierra Leonean built" },
//               ].map((s, i) => (
//                 <div
//                   key={i}
//                   className="bg-offwhite rounded-3xl p-6 border border-sage/60"
//                 >
//                   <div className="font-heading font-black text-3xl text-forest mb-1">
//                     {s.n}
//                   </div>
//                   <div className="font-heading font-semibold text-navy text-sm mb-1">
//                     {s.label}
//                   </div>
//                   <div className="font-body text-muted text-xs">{s.sub}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Mission & Vision ── */}
//       <section className="section-padding bg-offwhite">
//         <div className="container-default">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Mission */}
//             <div className="bg-white rounded-3xl p-10 border border-sage/60">
//               <div className="w-12 h-12 rounded-2xl bg-forest-light flex items-center justify-center mb-6">
//                 <Target size={22} className="text-forest" />
//               </div>
//               <span className="section-label block mb-3">Our Mission</span>
//               <h3 className="font-heading font-bold text-navy text-2xl mb-4 leading-snug">
//                 Making waste management work for every Freetown resident
//               </h3>
//               <p className="font-body text-muted text-base leading-relaxed">
//                 To provide simple, reliable, and affordable waste collection
//                 services to households and businesses across Freetown — using
//                 technology that meets people where they are, with or without a
//                 smartphone.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-forest-deeper rounded-3xl p-10 relative overflow-hidden">
//               <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-forest opacity-40" />
//               <div className="relative z-10">
//                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
//                   <Eye size={22} className="text-amber" />
//                 </div>
//                 <span className="text-amber text-xs font-body font-semibold tracking-widest uppercase block mb-3">
//                   Our Vision
//                 </span>
//                 <h3 className="font-heading font-bold text-white text-2xl mb-4 leading-snug">
//                   A cleaner, healthier Freetown for every generation
//                 </h3>
//                 <p className="font-body text-sage text-base leading-relaxed">
//                   To be the leading waste management platform in West Africa —
//                   expanding city by city, community by community, with a model
//                   that is both commercially sustainable and socially impactful.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ── Values ── */}
//       <section className="section-padding bg-white">
//         <div className="container-default">
//           <SectionHeading
//             label="What We Stand For"
//             title="Our values guide everything we do"
//             subtitle="From how we build our platform to how we show up in the communities we serve."
//             className="mb-16"
//           />
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((v, i) => {
//               const Icon = v.icon;
//               return (
//                 <div
//                   key={i}
//                   className="group p-7 rounded-3xl border border-sage/60 hover:border-forest/30 hover:shadow-card transition-all duration-300"
//                 >
//                   <div className="w-11 h-11 rounded-2xl bg-forest-light flex items-center justify-center mb-5 group-hover:bg-forest transition-colors duration-300">
//                     <Icon
//                       size={20}
//                       className="text-forest group-hover:text-white transition-colors duration-300"
//                     />
//                   </div>
//                   <h4 className="font-heading font-semibold text-navy text-base mb-3">
//                     {v.title}
//                   </h4>
//                   <p className="font-body text-muted text-sm leading-relaxed">
//                     {v.description}
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* ── Partners strip ── */}
//       <section className="py-12 bg-offwhite border-y border-sage/60">
//         <div className="container-default">
//           <p className="text-center font-body text-xs text-muted tracking-widest uppercase mb-8">
//             Backed and supported by
//           </p>
//           <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
//             {["GSMA", "Orange Money", "Afrimoney", "Freetown City Council"].map(
//               (p) => (
//                 <span
//                   key={p}
//                   className="font-heading font-bold text-navy/40 hover:text-navy text-sm tracking-wide transition-colors duration-200 cursor-default"
//                 >
//                   {p}
//                 </span>
//               ),
//             )}
//           </div>
//         </div>
//       </section>

//       {/* ── CTA ── */}
//       <CTASection />
//     </>
//   );
// }


import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Heart, Leaf, Users, Shield, Linkedin, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { getAboutPage } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextRenderer } from "@/components/ui/PortableTextRenderer";

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

export default async function AboutPage() {
  const page = await getAboutPage();
  const ceo = page?.ceoSection;

  return (
    <div>
      {/* Hero */}
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
              Transforming waste.<br />
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

      {/* Story */}
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
                  unreliable, and inaccessible to many households.
                </p>
                <p>
                  Freetown Waste Transformers was established to change that.
                  Starting with a simple idea — that technology could connect
                  households directly to verified collectors — we built DortiBox,
                  a platform designed specifically for the realities of life in
                  Freetown.
                </p>
                <p>
                  Mobile money integration, USSD access for non-smartphone users,
                  and community-level coverage were not features added later.
                  They were built in from day one.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "2022", label: "Year Founded", sub: "Freetown, Sierra Leone" },
                { n: "7+", label: "Communities", sub: "Across Freetown's CBD" },
                { n: "500+", label: "Households", sub: "Registered on DortiBox" },
                { n: "100%", label: "Local Team", sub: "Sierra Leonean built" },
              ].map((s, i) => (
                <div key={i} className="bg-offwhite rounded-3xl p-6 border border-sage/60">
                  <div className="font-heading font-black text-3xl text-forest mb-1">{s.n}</div>
                  <div className="font-heading font-semibold text-navy text-sm mb-1">{s.label}</div>
                  <div className="font-body text-muted text-xs">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="section-padding bg-navy relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-forest/20 pointer-events-none" />
        <div className="absolute -left-10 bottom-0 w-64 h-64 rounded-full bg-amber/10 pointer-events-none" />

        <div className="container-default relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">

            {/* Photo */}
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-3 rounded-3xl bg-amber/20 rotate-3" />
                <div className="absolute -inset-3 rounded-3xl bg-forest/20 -rotate-3" />

                {/* Photo or placeholder */}
                <div className="relative w-64 h-72 rounded-3xl overflow-hidden bg-forest">
                  {ceo?.photo ? (
                    <Image
                      src={urlFor(ceo.photo).width(400).height(500).url()}
                      alt={ceo.name || "CEO"}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-forest-gradient">
                      <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mb-4">
                        <span className="font-heading font-black text-white text-4xl">
                          {ceo?.name?.charAt(0) || "A"}
                        </span>
                      </div>
                      <span className="font-body text-sage text-sm">Photo coming soon</span>
                    </div>
                  )}
                </div>

                {/* Name badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber rounded-2xl px-5 py-2.5 shadow-amber whitespace-nowrap">
                  <p className="font-heading font-bold text-white text-sm">
                    {ceo?.name || "Aminata B. Dumbuya-Jarr"}
                  </p>
                  <p className="font-body text-white/80 text-xs">
                    {ceo?.role || "Chief Executive Officer"}
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3 pt-8 lg:pt-0">
              <span className="text-amber text-xs font-body font-semibold tracking-widest uppercase block mb-4">
                A Word from Our CEO
              </span>

              {/* Opening quote */}
              <div className="relative mb-6">
                <Quote size={40} className="text-amber/30 absolute -top-2 -left-2" />
                <blockquote className="font-heading font-semibold text-white text-xl md:text-2xl leading-relaxed pl-8">
                  {ceo?.quote ||
                    "Freetown deserves clean streets, reliable services, and a platform built by people who understand this city. That is exactly what we are building."}
                </blockquote>
              </div>

              {/* Body */}
              {ceo?.body ? (
                <div className="font-body text-sage text-base leading-relaxed">
                  <PortableTextRenderer value={ceo.body} />
                </div>
              ) : (
                <div className="space-y-3 font-body text-sage text-base leading-relaxed">
                  <p>
                    When we started Freetown Waste Transformers, the goal was
                    simple — give every household in Freetown access to reliable,
                    affordable waste collection. What we discovered along the way
                    is that the problem was never really about waste. It was about
                    trust, reliability, and inclusion.
                  </p>
                  <p>
                    DortiBox is our answer to that challenge. A platform built for
                    Freetown, by a team that lives here, understands the city, and
                    is committed to making it cleaner — one community at a time.
                  </p>
                </div>
              )}

              {/* LinkedIn */}
              {ceo?.linkedin && (
                <Link
                  href={ceo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full border border-white/20 text-sage hover:text-white hover:border-white transition-all duration-200 font-body text-sm"
                >
                  <Linkedin size={15} />
                  Connect on LinkedIn
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-offwhite">
        <div className="container-default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-10 border border-sage/60">
              <div className="w-12 h-12 rounded-2xl bg-forest-light flex items-center justify-center mb-6">
                <Target size={22} className="text-forest" />
              </div>
              <span className="section-label block mb-3">Our Mission</span>
              <h3 className="font-heading font-bold text-navy text-2xl mb-4 leading-snug">
                Making waste management work for every Freetown resident
              </h3>
              <p className="font-body text-muted text-base leading-relaxed">
                {page?.mission ||
                  "To provide simple, reliable, and affordable waste collection services to households and businesses across Freetown — using technology that meets people where they are, with or without a smartphone."}
              </p>
            </div>

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
                  {page?.vision ||
                    "To be the leading waste management platform in West Africa — expanding city by city, community by community, with a model that is both commercially sustainable and socially impactful."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
                    <Icon size={20} className="text-forest group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h4 className="font-heading font-semibold text-navy text-base mb-3">{v.title}</h4>
                  <p className="font-body text-muted text-sm leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section-padding bg-offwhite">
        <div className="container-default">
          <div className="bg-white rounded-3xl p-10 md:p-14 border border-sage/60 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="section-label block mb-2">Meet the Team</span>
              <h3 className="font-heading font-bold text-navy text-2xl md:text-3xl leading-tight">
                The people behind DortiBox
              </h3>
              <p className="font-body text-muted text-base mt-3 max-w-md">
                Every person on our team lives and works in Freetown. Built by
                Sierra Leoneans, for Sierra Leone.
              </p>
            </div>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-forest text-white font-heading font-bold text-base hover:bg-forest-dark transition-colors duration-200 shrink-0"
            >
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

      {/* Partners strip */}
      <section className="py-12 bg-white border-y border-sage/60">
        <div className="container-default">
          <p className="text-center font-body text-xs text-muted tracking-widest uppercase mb-8">
            Backed and supported by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {["GSMA", "Freetown City Council"].map((p) => (
              <span
                key={p}
                className="font-heading font-bold text-navy/40 hover:text-navy text-sm tracking-wide transition-colors duration-200 cursor-default"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}