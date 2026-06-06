// export function PartnersStrip() {
//   const partners = [
//     { name: "GSMA", sub: "Global Partnership" },
//     { name: "Orange Money", sub: "Mobile Payments" },
//     { name: "Afrimoney", sub: "Mobile Payments" },
//     { name: "Freetown City Council", sub: "Municipal Partner" },
//   ];

//   return (
//     <section className="py-12 bg-white border-y border-sage/60">
//       <div className="container-default">
//         <p className="text-center font-body text-xs text-muted tracking-widest uppercase mb-8">
//           In partnership with
//         </p>
//         <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
//           {partners.map((p, i) => (
//             <div key={i} className="flex flex-col items-center gap-1 group cursor-default">
//               <span className="font-heading font-bold text-navy/40 group-hover:text-navy text-base tracking-wide transition-colors duration-200">
//                 {p.name}
//               </span>
//               <span className="font-body text-muted/50 text-xs">{p.sub}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/types/sanity";

interface PartnersStripProps {
  partners?: SiteSettings["partnerLogos"];
}

export function PartnersStrip({ partners }: PartnersStripProps) {
  // Fallback to known partners if Sanity hasn't loaded yet
  const fallback = [
    { name: "GSMA", logo: null, url: "#" },
    { name: "Freetown City Council", logo: null, url: "#" },
  ];

  const list = partners?.length ? partners : fallback;

  return (
    <section className="py-12 bg-white border-y border-sage/60">
      <div className="container-default">
        <p className="text-center font-body text-xs text-muted tracking-widest uppercase mb-8">
          In partnership with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
          {list.map((p, i) => (
            <a
              key={i}
              href={p.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1 group opacity-60 hover:opacity-100 transition-opacity duration-200"
            >
              {p.logo ? (
                <Image
                  src={urlFor(p.logo).height(40).url()}
                  alt={p.name}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <span className="font-heading font-bold text-navy group-hover:text-forest text-sm tracking-wide transition-colors duration-200">
                  {p.name}
                </span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}