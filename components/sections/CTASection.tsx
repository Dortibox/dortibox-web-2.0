import Link from "next/link";
import Image from "next/image";
import { Download, ArrowRight } from "lucide-react";

interface CTASectionProps {
  playStoreUrl?: string;
  appStoreUrl?: string;
}

export function CTASection({
  playStoreUrl = "#",
  appStoreUrl = "#",
}: CTASectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <div className="relative rounded-3xl overflow-hidden bg-forest-deeper">

          {/* Background image — subtle */}
          <div className="absolute inset-0">
            <Image
              src="/images/poster-grid.jpg"
              alt=""
              fill
              className="object-cover opacity-10"
              sizes="100vw"
            />
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-forest/30 pointer-events-none" />
          <div className="absolute -left-10 -bottom-10 w-52 h-52 rounded-full bg-amber/10 pointer-events-none" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <span className="inline-block font-body text-amber text-xs tracking-widest uppercase font-semibold mb-4">
              Get Started Today
            </span>

            <h2 className="font-heading font-black text-white text-3xl md:text-5xl mb-5 leading-tight max-w-2xl mx-auto">
              Ready to make Freetown cleaner?
            </h2>

            <p className="font-body text-sage text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Download DortiBox and schedule your first pickup in under 2 minutes.
              Join hundreds of households already making a difference.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                href={playStoreUrl}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber text-white font-heading font-bold text-base shadow-amber hover:bg-amber-dark active:scale-95 transition-all duration-200"
              >
                <Download size={18} strokeWidth={2.5} />
                Download on Google Play
              </Link>
              <Link
                href={appStoreUrl}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full border-2 border-white/40 text-white font-heading font-semibold text-base hover:border-white hover:bg-white/10 active:scale-95 transition-all duration-200"
              >
                <Download size={18} strokeWidth={2.5} />
                Download on App Store
              </Link>
            </div>

            <Link
              href="/impact"
              className="inline-flex items-center gap-2 text-sage hover:text-white font-body text-sm transition-colors duration-200"
            >
              Learn about our impact
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}