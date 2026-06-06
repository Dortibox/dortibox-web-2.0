"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type { SiteSettings } from "@/types/sanity";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Blog", href: "/blog" },
  { label: "Partners", href: "/partners" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  settings?: SiteSettings | null;
}

export function Navbar({ settings }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-sage/60 shadow-sm">
      <nav className="container-default h-16 flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {settings?.logo ? (
            <Image
              src={urlFor(settings.logo).height(40).url()}
              alt={settings.siteName || "DortiBox"}
              width={120}
              height={40}
              className="h-9 w-auto object-contain"
            />
          ) : (
            <>
              <div className="w-8 h-8 rounded-lg bg-forest flex items-center justify-center">
                <span className="text-white font-heading font-black text-xs">DB</span>
              </div>
              <span className="font-heading font-bold text-forest text-lg leading-none">
                Dorti<span className="text-amber">Box</span>
              </span>
            </>
          )}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="px-3 py-2 rounded-lg font-body text-sm text-charcoal hover:text-forest hover:bg-forest-light transition-all duration-150"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block shrink-0">
          <Link
            href={settings?.playStoreUrl || "#"}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber text-white font-heading font-semibold text-sm hover:bg-amber-dark transition-colors duration-200"
          >
            <Download size={15} />
            Download App
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-forest-light transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open
            ? <X size={22} className="text-charcoal" />
            : <Menu size={22} className="text-charcoal" />
          }
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-sage",
        open ? "max-h-96" : "max-h-0"
      )}>
        <div className="container-default py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg font-body text-sm text-charcoal hover:text-forest hover:bg-forest-light transition-all"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-sage mt-2">
            <Link
              href={settings?.playStoreUrl || "#"}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-amber text-white font-heading font-semibold text-sm"
            >
              <Download size={15} />
              Download App
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}