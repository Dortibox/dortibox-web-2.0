// import { Navbar } from "@/components/global/Navbar";
// import { Footer } from "@/components/global/Footer";
// import { getSiteSettings } from "@/sanity/lib/queries";

// export default async function SiteLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Never let a Sanity failure crash the page
//   const settings = await getSiteSettings().catch(() => null);

//   return (
//     <>
//       <Navbar settings={settings} />
//       <main>{children}</main>
//       <Footer settings={settings} />
//     </>
//   );
// }

import { Navbar } from "@/components/global/Navbar";
import { Footer } from "@/components/global/Footer";
import { FloatingButtons } from "@/components/global/FloatingButtons";
import { getSiteSettings } from "@/sanity/lib/queries";

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
    </>
  );
}
