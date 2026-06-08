import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { FloatingButtons } from "@/components/global/FloatingButtons";
import { getSiteSettings } from "@/sanity/lib/queries";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings().catch(() => null);

  return (
    <>
      <Navbar settings={settings} />
      <main>{children}</main>
      <Footer settings={settings} />
      <FloatingButtons />
      <SpeedInsights />
    </>
  );
}
