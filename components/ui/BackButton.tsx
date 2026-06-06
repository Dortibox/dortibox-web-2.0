"use client";

import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30 text-white font-heading font-semibold text-base hover:border-white hover:bg-white/10 transition-all duration-200"
    >
      <ArrowLeft size={18} />
      Go Back
    </button>
  );
}
