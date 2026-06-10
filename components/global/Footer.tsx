import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/types/sanity";

const footerNav = {
  Platform: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Impact", href: "/impact" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
  ],
  Partners: [
    { label: "Partner With Us", href: "/partners" },
    { label: "For Government", href: "/partners#government" },
    { label: "For Businesses", href: "/partners#business" },
  ],
  Support: [
    { label: "Support", href: "/support" },
    { label: "Contact Us", href: "/contact" },
    { label: "Delete Account", href: "/delete-account" },
    { label: "Privacy Policy", href: "/legal/privacy-policy" },
    { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  ],
};

interface FooterProps {
  settings?: SiteSettings | null;
}

export function Footer({ settings }: FooterProps) {
  const ussdCode = settings?.ussdCode || "*715*380#";
  const tagline =
    settings?.footerTagline || "Click N Troway — Waste Management Made Easy";

  const socials = [
    {
      label: "Facebook",
      href: settings?.socialLinks?.facebook || "#",
      abbr: "f",
    },
    {
      label: "Instagram",
      href: settings?.socialLinks?.instagram || "#",
      abbr: "ig",
    },
    { label: "X", href: settings?.socialLinks?.twitter || "#", abbr: "x" },
    {
      label: "LinkedIn",
      href: settings?.socialLinks?.linkedin || "#",
      abbr: "in",
    },
  ];

  return (
    <footer className="bg-forest-deeper text-white">
      <div className="container-default py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {settings?.logo ? (
                <Image
                  src={urlFor(settings.logo).height(120).url()}
                  alt={settings.siteName || "DortiBox"}
                  width={120}
                  height={120}
                  className="h-8 w-auto object-contain"
                />
              ) : (
                <>
                  <div className="w-8 h-8 rounded-lg bg-amber flex items-center justify-center">
                    <span className="text-white font-heading font-black text-xs">
                      DB
                    </span>
                  </div>
                  <span className="font-heading font-bold text-white text-lg">
                    Dorti<span className="text-amber">Box</span>
                  </span>
                </>
              )}
            </Link>

            <p className="font-body text-sage text-sm leading-relaxed mb-6 max-w-xs">
              {tagline}
            </p>

            {/* USSD */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-2xl px-4 py-3 mb-6">
              <span className="text-sage font-body text-xs">
                No smartphone? Dial
              </span>
              <span className="font-heading font-black text-amber text-base">
                {ussdCode}
              </span>
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-amber flex items-center justify-center font-heading font-bold text-white text-xs transition-colors duration-200"
                >
                  {s.abbr}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([group, links]) => (
            <div key={group}>
              <h4 className="font-heading font-semibold text-white text-sm mb-4">
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sage text-sm hover:text-amber transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-default py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-muted-light text-xs">
            Copyright © {new Date().getFullYear()} | DortiBox — Freetown Waste
            Transformers SL Limited
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
            <span className="font-body text-muted-light text-xs">
              Serving Freetown, Sierra Leone
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
