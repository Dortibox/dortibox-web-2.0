import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const testimonials = [
  {
    quote:
      "Since we started using DortiBox, managing our household waste has become so easy. The app helps us schedule collections and we've noticed a big difference in our neighborhood.",
    name: "Fatmata Kamara",
    role: "Household User",
    community: "Murray Town",
    initial: "F",
    avatarBg: "bg-forest-light",
    avatarText: "text-forest",
  },
  {
    quote:
      "As a small restaurant owner, waste management was always a challenge. DortiBox has changed that completely. The regular pickups and reliable service mean my business stays clean.",
    name: "Alkap Koroma",
    role: "Small Business Owner",
    community: "Brookfields",
    initial: "A",
    avatarBg: "bg-amber-light",
    avatarText: "text-amber-dark",
  },
  {
    quote:
      "The DortiBox app is so easy to use! I can track my collection schedule, pay for services, and report any issues right from my phone. It keeps our community organized and clean.",
    name: "Isatu Bangura",
    role: "Household User",
    community: "Kroo Town",
    initial: "I",
    avatarBg: "bg-navy/10",
    avatarText: "text-navy",
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <SectionHeading
          label="Customer Experiences"
          title="What Freetown residents are saying"
          subtitle="Join hundreds of satisfied DortiBox users across our communities."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 border border-sage/60 hover:border-forest/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <Quote size={24} className="text-forest/20 mb-4 shrink-0" />

              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={13} className="text-amber fill-amber" />
                ))}
              </div>

              <blockquote className="font-body text-charcoal/80 text-sm leading-relaxed flex-1 mb-7">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center gap-3 pt-5 border-t border-sage/60">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm shrink-0 ${t.avatarBg} ${t.avatarText}`}>
                  {t.initial}
                </div>
                <div>
                  <p className="font-heading font-semibold text-navy text-sm">{t.name}</p>
                  <p className="font-body text-muted text-xs">
                    {t.role} · {t.community}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}