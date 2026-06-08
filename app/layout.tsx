import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "@/styles/globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dortibox.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DortiBox — Click N Troway | Waste Management Made Easy",
    template: "%s | DortiBox",
  },
  description:
    "DortiBox is Freetown's digital waste management platform. Schedule pickups, pay via mobile money, and keep your community clean — with or without a smartphone.",
  keywords: [
    "waste management",
    "Freetown",
    "Sierra Leone",
    "DortiBox",
    "recycling",
    "mobile money",
    "waste collection",
    "Orange Money",
    "clean Freetown",
    "USSD",
  ],
  authors: [{ name: "Freetown Waste Transformers SL Limited" }],
  creator: "Freetown Waste Transformers SL Limited",
  publisher: "Freetown Waste Transformers SL Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_SL",
    url: siteUrl,
    siteName: "DortiBox",
    title: "DortiBox — Click N Troway | Waste Management Made Easy",
    description:
      "DortiBox is Freetown's digital waste management platform. Schedule pickups, pay via mobile money, and keep your community clean.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DortiBox — Waste Management Made Easy for Freetown",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DortiBox — Click N Troway | Waste Management Made Easy",
    description:
      "DortiBox is Freetown's digital waste management platform. Schedule pickups, pay via mobile money, and keep your community clean.",
    images: ["/og-image.jpg"],
    creator: "@dortibox",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
