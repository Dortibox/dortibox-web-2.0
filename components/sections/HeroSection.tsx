import Link from "next/link";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Download, Phone, CheckCircle, CreditCard } from "lucide-react";

interface HeroSectionProps {
  ussdCode?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export function HeroSection({
  ussdCode = "*715*380#",
  appStoreUrl = "#",
  playStoreUrl = "#",
}: HeroSectionProps) {
  return (
    <section className="relative bg-forest-deeper overflow-hidden min-h-[92vh] flex items-center">
      {/* Background blobs */}
      <div className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full bg-forest opacity-20 pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[350px] h-[350px] rounded-full bg-amber opacity-10 pointer-events-none" />

      <div className="container-default relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ── Left — copy ── */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-7">
              <span className="w-2 h-2 rounded-full bg-amber animate-pulse shrink-0" />
              <span className="text-sage text-sm font-body">
                Now serving Freetown communities
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-black text-white leading-[1.05] mb-6">
              <span className="block text-5xl md:text-6xl lg:text-[3.75rem]">
                Click N Troway.
              </span>
              <span className="block text-4xl md:text-5xl lg:text-[3rem] text-amber mt-2">
                Waste Management
              </span>
              <span className="block text-4xl md:text-5xl lg:text-[3rem] text-amber">
                Made Easy.
              </span>
            </h1>

            {/* Sub */}
            <p className="font-body text-sage text-lg leading-relaxed max-w-md mb-10">
              Schedule pickups, pay with mobile money, and keep your community
              clean — all from your phone.
            </p>

            {/* App store CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href={playStoreUrl}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-amber text-white font-heading font-bold text-sm hover:bg-amber-dark active:scale-95 transition-all duration-200 shadow-amber"
              >
                <Download size={17} strokeWidth={2.5} />
                Google Play
              </Link>
              <Link
                href={appStoreUrl}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full border-2 border-white/30 text-white font-heading font-semibold text-sm hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                <Download size={17} strokeWidth={2.5} />
                App Store
              </Link>
            </div>

            {/* USSD */}
            <div className="flex items-center gap-3 mb-12">
              <Phone size={15} className="text-muted-light shrink-0" />
              <span className="text-muted-light font-body text-sm">
                No smartphone?
              </span>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
                <span className="text-sage font-body text-xs">Dial</span>
                <span className="font-heading font-black text-amber text-base tracking-wide">
                  {ussdCode}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
              {[
                { n: "7+", label: "Communities" },
                { n: "500+", label: "Households" },
                { n: "2", label: "Partners" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="font-heading font-black text-2xl text-white">
                    {s.n}
                  </div>
                  <div className="font-body text-sage text-xs mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — phones ── */}
          <div className="relative hidden lg:flex items-center justify-center h-[600px]">
            {/* Back phone */}
            <div className="absolute right-16 top-12 opacity-50 scale-90 rotate-[8deg] origin-bottom">
              <PhoneMockup
                src="/images/app-subscription.png"
                alt="DortiBox subscription"
              />
            </div>

            {/* Front phone */}
            <div className="absolute right-0 top-0">
              <PhoneMockup
                src="/images/app-dashboard.png"
                alt="DortiBox dashboard"
                priority
              />
            </div>

            {/* Floating card — pickup confirmed */}
            <div className="absolute left-0 top-20 bg-white rounded-2xl px-4 py-3 shadow-card w-56">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-forest-light flex items-center justify-center shrink-0">
                  <CheckCircle size={16} className="text-forest" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-navy text-xs leading-tight">
                    Pickup Confirmed
                  </p>
                  <p className="font-body text-muted text-xs mt-0.5">
                    Friday 8am · Murray Town
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card — payment */}
            <div className="absolute left-4 bottom-28 bg-white rounded-2xl px-4 py-3 shadow-card w-52">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-light flex items-center justify-center shrink-0">
                  <CreditCard size={16} className="text-amber-dark" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-navy text-xs leading-tight">
                    Payment Success
                  </p>
                  <p className="font-body text-muted text-xs mt-0.5">
                    200 SLE · Orange Money
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
