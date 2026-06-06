import { defineField, defineType } from "sanity";

export const impactPage = defineType({
  name: "impactPage",
  title: "Impact Page",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "hero",
      title: "Hero Section",
      type: "object",
      fields: [
        { name: "headline", type: "string", title: "Headline" },
        { name: "subheading", type: "text", title: "Subheading", rows: 2 },
        {
          name: "image",
          type: "image",
          title: "Hero Image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "keyMetrics",
      title: "Key Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "number",
              type: "string",
              title: "Number (e.g. 7, 500, Weekly)",
            },
            {
              name: "suffix",
              type: "string",
              title: "Suffix (e.g. +, %, leave blank if none)",
            },
            {
              name: "label",
              type: "string",
              title: "Label (e.g. Communities Served)",
            },
            { name: "description", type: "string", title: "Description" },
          ],
          preview: {
            select: { title: "label", subtitle: "number" },
          },
        },
      ],
    }),
    defineField({
      name: "communities",
      title: "Communities Served",
      description: "List of community names shown on the coverage map section",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "impactStories",
      title: "Impact Stories",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Story Title" },
            { name: "headline", type: "string", title: "Story Headline" },
            { name: "body", type: "text", title: "Story Body", rows: 4 },
            {
              name: "image",
              type: "image",
              title: "Story Image",
              options: { hotspot: true },
            },
            { name: "community", type: "string", title: "Community / Area" },
            {
              name: "tag",
              type: "string",
              title: "Tag (e.g. Community, Payments, Business)",
            },
          ],
          preview: {
            select: { title: "title", subtitle: "community" },
          },
        },
      ],
    }),
    defineField({
      name: "featuredCustomers",
      title: "Featured Customers",
      description:
        "Households, communities, businesses, schools pulled from Customer records",
      type: "array",
      of: [{ type: "reference", to: [{ type: "customer" }] }],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Impact Page" };
    },
  },
});
