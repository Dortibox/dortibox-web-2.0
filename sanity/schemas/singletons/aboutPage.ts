import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
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
        { name: "image", type: "image", title: "Hero Image", options: { hotspot: true } },
      ],
    }),
    defineField({
      name: "story",
      title: "Our Story",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "vision",
      title: "Our Vision",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "mission",
      title: "Our Mission",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "values",
      title: "Our Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string", title: "Value Title" },
            { name: "description", type: "text", title: "Description", rows: 2 },
            { name: "icon", type: "string", title: "Icon name (Lucide)" },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
