import { HeroSection } from "@/components/sections/HeroSection";
import { AudienceBanner } from "@/components/global/AudienceBanner";
import { PartnersStrip } from "@/components/sections/PartnersStrip";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { USSDCallout } from "@/components/global/USSDCallout";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTASection } from "@/components/sections/CTASection";
import { getSiteSettings, getBlogPosts } from "@/sanity/lib/queries";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DortiBox — Click N Troway | Waste Management Made Easy",
  description:
    "Schedule waste pickups, pay with mobile money, and keep your Freetown community clean. Download DortiBox or dial *715*380# — no smartphone needed.",
  openGraph: {
    title: "DortiBox — Click N Troway | Waste Management Made Easy",
    description:
      "Schedule waste pickups, pay with mobile money, and keep your Freetown community clean.",
    url: "https://dortibox.com",
  },
};

export default async function HomePage() {
  const [settings, posts] = await Promise.all([
    getSiteSettings(),
    getBlogPosts(3),
  ]);

  return (
    <>
      <HeroSection
        ussdCode={settings?.ussdCode}
        appStoreUrl={settings?.appStoreUrl}
        playStoreUrl={settings?.playStoreUrl}
      />
      <AudienceBanner />
      <PartnersStrip partners={settings?.partnerLogos} />
      <HowItWorks />
      <ImpactStats />
      <TestimonialsSection />
      <USSDCallout ussdCode={settings?.ussdCode} />
      <BlogPreview posts={posts} />
      <CTASection
        playStoreUrl={settings?.playStoreUrl}
        appStoreUrl={settings?.appStoreUrl}
      />
    </>
  );
}