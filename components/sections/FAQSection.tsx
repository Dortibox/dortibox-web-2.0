"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

const fallbackFaqs: FAQItem[] = [
  {
    _id: "1",
    question: "How do I register for DortiBox?",
    answer: "Download the DortiBox app from Google Play or the App Store, then register with your phone number. If you don't have a smartphone, dial *715*380# from any Sierra Leonean mobile number.",
    category: "general",
  },
  {
    _id: "2",
    question: "Which areas does DortiBox currently serve?",
    answer: "We currently serve 7 communities across Freetown's Block 6 CBD: Sorie Town, Albert Academy, Kroo Town, Sanders Brook, Central, Murray Town, and Brookfields. We are actively expanding to new communities.",
    category: "service",
  },
  {
    _id: "3",
    question: "How do I pay for my subscription?",
    answer: "DortiBox supports payment via Orange Money and Afrimoney. After selecting your plan, you will receive a USSD code to complete the payment from your mobile money wallet. No cash required.",
    category: "payments",
  },
  {
    _id: "4",
    question: "What subscription plans are available?",
    answer: "We offer three plans: 1 Month at 200 SLE (4 pickups), 3 Months at 585 SLE (save 2.5%), and 12 Months at 2280 SLE (save 5%). All plans include scheduled weekly pickups.",
    category: "service",
  },
  {
    _id: "5",
    question: "What if I don't have a smartphone?",
    answer: "No problem. Dial *715*380# from any Sierra Leonean mobile number to register and manage your waste collection without needing a smartphone or internet connection.",
    category: "technical",
  },
  {
    _id: "6",
    question: "How do I become a partner or investor?",
    answer: "We welcome partnerships with government bodies, NGOs, corporates, and impact investors. Visit our Partners page or contact us directly at info@fwtsl.net to start a conversation.",
    category: "partnership",
  },
  {
    _id: "7",
    question: "What bin sizes are available?",
    answer: "DortiBox offers multiple bin sizes to suit households and businesses — from 120 litres for standard households up to 1000 litres for commercial clients. Select your size when subscribing.",
    category: "service",
  },
  {
    _id: "8",
    question: "How do I cancel or change my subscription?",
    answer: "You can manage your subscription directly in the DortiBox app under Service Management. To cancel, select your active subscription and tap Cancel. For assistance, contact us at info@fwtsl.net.",
    category: "service",
  },
];

const categoryLabels: Record<string, string> = {
  all: "All",
  general: "General",
  service: "Service & Pricing",
  payments: "Payments",
  technical: "Technical",
  partnership: "Partnership",
};

export function FAQSection({ faqs }: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const list = faqs.length ? faqs : fallbackFaqs;

  const categories = ["all", ...Array.from(new Set(list.map((f) => f.category)))];

  const filtered = activeCategory === "all"
    ? list
    : list.filter((f) => f.category === activeCategory);

  return (
    <section className="section-padding bg-offwhite">
      <div className="container-default">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about DortiBox. Can't find the answer? Contact our team directly."
          className="mb-12"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 rounded-full font-body text-sm transition-all duration-200",
                activeCategory === cat
                  ? "bg-forest text-white font-semibold"
                  : "bg-white text-muted border border-sage/60 hover:border-forest/30 hover:text-forest"
              )}
            >
              {categoryLabels[cat] || cat}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filtered.map((faq) => (
            <div
              key={faq._id}
              className="bg-white rounded-2xl border border-sage/60 overflow-hidden hover:border-forest/30 transition-colors duration-200"
            >
              <button
                onClick={() => setOpenId(openId === faq._id ? null : faq._id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-heading font-semibold text-navy text-sm md:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={cn(
                    "text-muted shrink-0 transition-transform duration-300",
                    openId === faq._id && "rotate-180 text-forest"
                  )}
                />
              </button>

              <div className={cn(
                "overflow-hidden transition-all duration-300",
                openId === faq._id ? "max-h-96" : "max-h-0"
              )}>
                <div className="px-6 pb-5 border-t border-sage/40">
                  <p className="font-body text-muted text-sm leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12">
          <p className="font-body text-muted text-sm mb-4">
            Still have questions?
          </p>
          
           <a
            href="mailto:info@fwtsl.net"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-white font-heading font-semibold text-sm hover:bg-forest-dark transition-colors duration-200"
          >
            Email Our Team
          </a>
        </div>
      </div>
    </section>
  );
}