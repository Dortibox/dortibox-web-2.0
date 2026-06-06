import Image from "next/image";
import { Phone } from "lucide-react";

interface USSDCalloutProps {
  ussdCode?: string;
}

export function USSDCallout({ ussdCode = "*715*380#" }: USSDCalloutProps) {
  return (
    <section className="bg-forest-deeper section-padding overflow-hidden relative">
      <div className="absolute right-0 top-0 w-96 h-full bg-forest/20 pointer-events-none" />

      <div className="container-default relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Poster image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
            <Image
              src="/images/poster-ussd.jpg"
              alt="DortiBox — dial *715*380# to register"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber/20 border border-amber/30 rounded-full px-4 py-2 mb-6">
              <Phone size={14} className="text-amber" />
              <span className="text-amber text-sm font-body font-medium">
                No Smartphone Needed
              </span>
            </div>

            <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-5 leading-tight">
              DortiBox is for{" "}
              <span className="text-amber">everyone</span>{" "}
              in Freetown.
            </h2>

            <p className="font-body text-sage text-base leading-relaxed mb-8 max-w-md">
              Don't have a smartphone? No problem. DortiBox is committed to making
              waste management accessible for all communities — with or without a
              data connection.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 inline-block">
              <p className="text-sage font-body text-sm mb-2">
                Register and manage your pickup — dial:
              </p>
              <div className="font-heading font-black text-4xl text-amber tracking-wider mb-2">
                {ussdCode}
              </div>
              <p className="text-muted-light font-body text-xs">
                Works on any Sierra Leonean mobile number
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}