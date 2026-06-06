import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQSection } from "@/components/sections/FAQSection";
import { getFaqs } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the DortiBox team. Whether you are a resident, partner, or investor — we respond within 2 business days.",
  openGraph: {
    title: "Contact Us | DortiBox",
    description:
      "Reach out to Freetown Waste Transformers for service enquiries, partnerships, investment, or general questions.",
    url: "https://dortibox.com/contact",
  },
};

export default async function ContactPage() {
  const faqs = await getFaqs();

  return (
    <>
      <ContactForm />
      <FAQSection faqs={faqs} />
    </>
  );
}
