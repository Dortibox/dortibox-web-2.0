import Link from "next/link";
import { cn } from "@/lib/utils";

interface AudienceSegment {
  label: string;
  description: string;
  icon: string;
  linkTo: string;
}

interface AudienceBannerProps {
  segments?: AudienceSegment[];
}

const defaultSegments: AudienceSegment[] = [
  {
    label: "I'm a Resident",
    description: "Download the app, schedule pickups, pay with mobile money.",
    icon: "🏠",
    linkTo: "#download",
  },
  {
    label: "I'm a Partner / Government",
    description: "Explore how we work with municipalities and organizations.",
    icon: "🤝",
    linkTo: "/partners",
  },
  {
    label: "I'm an Investor",
    description: "Discover our impact, model, and growth trajectory.",
    icon: "📈",
    linkTo: "/impact",
  },
];

export function AudienceBanner({ segments = defaultSegments }: AudienceBannerProps) {
  return (
    <section className="bg-offwhite border-y border-sage">
      <div className="container-default py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {segments.map((segment, i) => (
            <Link
              key={i}
              href={segment.linkTo}
              className={cn(
                "group flex items-start gap-4 p-5 rounded-2xl",
                "bg-white hover:bg-forest hover:text-white",
                "border border-sage hover:border-forest",
                "transition-all duration-300 cursor-pointer"
              )}
            >
              <span className="text-2xl shrink-0">{segment.icon}</span>
              <div>
                <h3 className="font-heading font-semibold text-navy group-hover:text-white text-sm">
                  {segment.label}
                </h3>
                <p className="font-body text-muted group-hover:text-sage text-xs mt-1 leading-relaxed">
                  {segment.description}
                </p>
              </div>
              <span className="ml-auto text-muted group-hover:text-amber font-bold shrink-0">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
