import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, MapPin, Smartphone, Recycle } from "lucide-react";

const stats = [
  {
    icon: MapPin,
    number: "7+",
    label: "Communities Served",
    description: "Across Freetown's CBD including Kroo Town, Murray Town, Brookfields and more",
  },
  {
    icon: Users,
    number: "500+",
    label: "Registered Households",
    description: "Families and businesses managing waste digitally on the platform",
  },
  {
    icon: Smartphone,
    number: "2",
    label: "Payment Partners",
    description: "Orange Money and Afrimoney — pay from any Sierra Leonean mobile number",
  },
  {
    icon: Recycle,
    number: "100%",
    label: "Sierra Leonean",
    description: "Built for Freetown, by a local team that understands the city",
  },
];

export function ImpactStats() {
  return (
    <section className="section-padding bg-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-forest opacity-10 translate-x-32 -translate-y-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold opacity-10 -translate-x-16 translate-y-16 pointer-events-none" />

      <div className="container-default relative z-10">
        <SectionHeading
          label="Our Impact"
          title="Freetown is getting cleaner"
          subtitle="Real numbers. Real communities. Real change."
          theme="dark"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="group relative p-7 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-amber/30 transition-all duration-300"
              >
                <div className="absolute top-0 left-6 right-6 h-px bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />

                <div className="w-11 h-11 rounded-2xl bg-forest/30 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-amber" />
                </div>

                <div className="font-heading font-black text-4xl text-white mb-2 leading-none">
                  {stat.number}
                </div>

                <div className="font-heading font-semibold text-sage text-sm mb-2">
                  {stat.label}
                </div>
                <div className="font-body text-muted-light text-xs leading-relaxed">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}