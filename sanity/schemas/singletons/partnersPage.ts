import { defineField, defineType } from "sanity";

export const partnersPage = defineType({
  name: "partnersPage",
  title: "Partners Page",
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
      ],
    }),
    defineField({
      name: "partnershipTypes",
      title: "Partnership Types",
      description: "Types of partnerships FWT offers — e.g. Government, Corporate, NGO",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Partnership Title" },
            { name: "description", type: "text", title: "Description", rows: 3 },
            {
              name: "benefits",
              type: "array",
              title: "Key Benefits",
              of: [{ type: "string" }],
            },
            { name: "icon", type: "string", title: "Icon name (Lucide)" },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "cta",
      title: "Call to Action",
      type: "object",
      fields: [
        { name: "headline", type: "string", title: "Headline" },
        { name: "body", type: "text", title: "Body text", rows: 3 },
        { name: "buttonText", type: "string", title: "Button Label" },
        { name: "buttonLink", type: "string", title: "Button URL" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Partners Page" };
    },
  },
});
