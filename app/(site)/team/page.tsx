import type { Metadata } from "next";
import { Linkedin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Sierra Leonean team behind DortiBox — built by people who live and work in Freetown, for the city they call home.",
  openGraph: {
    title: "Our Team | DortiBox",
    description:
      "Meet the people behind DortiBox and Freetown Waste Transformers.",
    url: "https://dortibox.com/team",
  },
};

const leadership = [
  {
    name: "Aminata B. Dumbuya-Jarr",
    role: "Chief Executive Officer",
    bio: "Energy access practitioner and waste transformer with over 20 years of experience across sectors in Africa. Aminata leads FWT's strategic direction and stakeholder relationships.",
    initial: "A",
    color: "bg-forest text-white",
    linkedin: "#",
  },
  {
    name: "Chinedum Eke",
    role: "Tech Lead & Product Owner",
    bio: "Leading the development of DortiBox Plus — FWT's next-generation waste management platform. Chinedum drives product strategy, architecture, and the all-Sierra Leonean development team.",
    initial: "C",
    color: "bg-navy text-white",
    linkedin: "#",
  },
];

const team = [
  {
    name: "Mohamed Koroma",
    role: "Operations Manager",
    bio: "Oversees collector networks, community onboarding, and on-ground service delivery across all active zones in Freetown.",
    initial: "M",
    color: "bg-amber text-white",
  },
  {
    name: "Fatmata Sesay",
    role: "Customer Success",
    bio: "First point of contact for DortiBox users. Fatmata handles support, feedback, and ensures every customer has a smooth experience.",
    initial: "F",
    color: "bg-forest-light text-forest",
  },
  {
    name: "Ibrahim Bangura",
    role: "Field Supervisor",
    bio: "Coordinates collector schedules, monitors pickup quality, and ensures service reliability across all communities.",
    initial: "I",
    color: "bg-sage text-navy",
  },
  {
    name: "Mariama Conteh",
    role: "Community Liaison",
    bio: "Bridges the gap between FWT and the communities we serve — building trust, driving adoption, and gathering feedback on the ground.",
    initial: "M",
    color: "bg-offwhite text-navy",
  },
];

export default function TeamPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-forest-deeper overflow-hidden py-24 md:py-32">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
        <div className="absolute -left-16 bottom-0 w-[300px] h-[300px] rounded-full bg-amber opacity-10 pointer-events-none" />

        <div className="container-default relative z-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber" />
            <span className="text-sage text-sm font-body">
              The People Behind DortiBox
            </span>
          </div>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl leading-tight mb-6">
            Built by Sierra Leoneans,
            <br />
            <span className="text-amber">for Sierra Leone.</span>
          </h1>
          <p className="font-body text-sage text-lg leading-relaxed">
            Every person on our team lives and works in Freetown. We are not
            building from the outside — we are building for the city we call
            home.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <SectionHeading
            label="Leadership"
            title="Who leads FWT"
            subtitle="The people setting direction, making decisions, and accountable for outcomes."
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((member, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl border border-sage/60 hover:border-forest/30 hover:shadow-card-hover transition-all duration-300 overflow-hidden"
              >
                <div className="h-2 bg-forest-gradient" />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center font-heading font-black text-2xl ${member.color}`}
                    >
                      {member.initial}
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        className="w-9 h-9 rounded-full border border-sage/60 flex items-center justify-center text-muted hover:text-navy hover:border-navy transition-colors duration-200"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin size={15} />
                      </a>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-navy text-xl mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-amber text-sm font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="font-body text-muted text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full team */}
      <section className="section-padding bg-offwhite">
        <div className="container-default">
          <SectionHeading
            label="The Team"
            title="Everyone who makes it work"
            subtitle="Operations, community, support, and field — the full DortiBox team."
            className="mb-16"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-sage/60 hover:border-forest/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-heading font-black text-xl mb-5 ${member.color}`}
                >
                  {member.initial}
                </div>
                <h4 className="font-heading font-semibold text-navy text-base mb-1">
                  {member.name}
                </h4>
                <p className="font-body text-amber text-xs font-semibold mb-3">
                  {member.role}
                </p>
                <p className="font-body text-muted text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="bg-navy rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-forest/20 pointer-events-none" />
            <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-amber/10 pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto">
              <span className="section-label block mb-3 text-amber">
                Join Us
              </span>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-5 leading-tight">
                Want to help build a cleaner Freetown?
              </h2>
              <p className="font-body text-sage text-base leading-relaxed mb-8">
                We are always looking for passionate, hardworking Sierra
                Leoneans to join our team — in operations, technology,
                community, and beyond.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber text-white font-heading font-bold text-base hover:bg-amber-dark transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
