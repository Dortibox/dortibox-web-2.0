import Link from "next/link";
import { Home, Search } from "lucide-react";
import { BackButton } from "@/components/ui/BackButton";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-forest-deeper flex items-center justify-center relative overflow-hidden">
      <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[350px] h-[350px] rounded-full bg-amber opacity-10 pointer-events-none" />

      <div className="relative z-10 text-center px-6 py-20 max-w-2xl mx-auto">
        {/* 404 number */}
        <div className="relative mb-8">
          <span className="font-heading font-black text-[160px] md:text-[200px] leading-none text-white/5 select-none block">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-amber/20 border border-amber/30 flex items-center justify-center">
              <Search size={36} className="text-amber" />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-amber" />
          <span className="text-sage text-sm font-body">Page Not Found</span>
        </div>

        <h1 className="font-heading font-black text-white text-4xl md:text-5xl mb-5 leading-tight">
          Oops. This page
          <span className="text-amber"> doesn't exist.</span>
        </h1>

        <p className="font-body text-sage text-lg leading-relaxed mb-10 max-w-md mx-auto">
          The page you are looking for may have been moved, deleted, or never
          existed. Let us help you find what you need.
        </p>

        {/* Quick links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {[
            { label: "Homepage", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            { label: "Blog", href: "/blog" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3 font-body text-sage text-sm hover:bg-white/20 hover:text-white transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber text-white font-heading font-bold text-base hover:bg-amber-dark transition-colors duration-200"
          >
            <Home size={18} />
            Go to Homepage
          </Link>
          <BackButton />
        </div>

        {/* USSD reminder */}
        <div className="mt-12 inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3">
          <span className="text-sage font-body text-sm">No smartphone?</span>
          <span className="font-heading font-black text-amber text-base tracking-wide">
            *715*380#
          </span>
        </div>
      </div>
    </div>
  );
}
