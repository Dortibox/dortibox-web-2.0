import { defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "headline", type: "string", title: "Headline" },
        { name: "subheading", type: "text", title: "Subheading", rows: 3 },
        { name: "ctaPrimaryLabel", type: "string", title: "Primary CTA Label" },
        { name: "ctaPrimaryUrl", type: "string", title: "Primary CTA URL" },
        { name: "ctaSecondaryLabel", type: "string", title: "Secondary CTA Label" },
        { name: "ctaSecondaryUrl", type: "string", title: "Secondary CTA URL" },
        { name: "backgroundImage", type: "image", title: "Background Image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "audienceSegments",
      title: "Audience Segments",
      description: "The 3 audience cards — Resident, Partner/Government, Investor",
      type: "array",
      validation: (Rule) => Rule.length(3),
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "description", type: "text", title: "Description", rows: 2 },
            { name: "icon", type: "string", title: "Icon name (Lucide)" },
            { name: "linkTo", type: "string", title: "Link destination" },
          ],
          preview: { select: { title: "label" } },
        },
      ],
    }),
    defineField({
      name: "howItWorks",
      title: "How It Works Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "stepNumber", type: "number", title: "Step Number" },
            { name: "title", type: "string", title: "Title" },
            { name: "description", type: "text", title: "Description", rows: 2 },
            { name: "icon", type: "string", title: "Icon name (Lucide)" },
          ],
          preview: {
            select: { title: "title", subtitle: "stepNumber" },
            prepare({ title, subtitle }) {
              return { title: `Step ${subtitle}: ${title}` };
            },
          },
        },
      ],
    }),
    defineField({
      name: "impactStats",
      title: "Impact Statistics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "number", type: "string", title: "Number (e.g. '500')" },
            { name: "suffix", type: "string", title: "Suffix (e.g. '+', 'k', '%')" },
            { name: "label", type: "string", title: "Label (e.g. 'Households Served')" },
            { name: "description", type: "string", title: "Short description (optional)" },
          ],
          preview: {
            select: { title: "label", subtitle: "number" },
          },
        },
      ],
    }),
    defineField({
      name: "ussdCallout",
      title: "USSD Callout Section",
      description: "The 'No Smartphone? No Problem!' section",
      type: "object",
      fields: [
        { name: "headline", type: "string", title: "Headline" },
        { name: "body", type: "text", title: "Body text", rows: 3 },
        { name: "image", type: "image", title: "Phone image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "featuredTestimonials",
      title: "Featured Testimonials",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Home Page" };
    },
  },
});
