import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", "publish"], // singleton — no create/delete
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      initialValue: "DortiBox",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "ussdCode",
      title: "USSD Code",
      type: "string",
      description: "The USSD shortcode displayed site-wide",
      initialValue: "*715*380#",
    }),
    defineField({
      name: "appStoreUrl",
      title: "App Store URL",
      type: "url",
    }),
    defineField({
      name: "playStoreUrl",
      title: "Google Play Store URL",
      type: "url",
    }),
    defineField({
      name: "footerTagline",
      title: "Footer Tagline",
      type: "string",
      initialValue: "Click N Troway — Waste Management Made Easy",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        { name: "facebook", type: "url", title: "Facebook" },
        { name: "instagram", type: "url", title: "Instagram" },
        { name: "twitter", type: "url", title: "X / Twitter" },
        { name: "linkedin", type: "url", title: "LinkedIn" },
      ],
    }),
    defineField({
      name: "partnerLogos",
      title: "Partnership Logos (shown site-wide)",
      description: "GSMA, Orange Money, Afrimoney, Freetown City Council etc.",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string", title: "Partner Name" },
            { name: "logo", type: "image", title: "Logo" },
            { name: "url", type: "url", title: "Website URL" },
          ],
          preview: {
            select: { title: "name", media: "logo" },
          },
        },
      ],
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      initialValue: "info@fwtsl.net",
    }),
    defineField({
      name: "contactPhone",
      title: "Contact Phone",
      type: "string",
      initialValue: "+232 76 242 328",
    }),
    defineField({
      name: "address",
      title: "Physical Address",
      type: "string",
      initialValue: "BSI Offices, 55A Wilkinson Road Third Floor, Freetown",
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site Settings" };
    },
  },
});
