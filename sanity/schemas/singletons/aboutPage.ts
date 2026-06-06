import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About Page",
  type: "document",
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
            {
              name: "description",
              type: "text",
              title: "Description",
              rows: 2,
            },
            { name: "icon", type: "string", title: "Icon name (Lucide)" },
          ],
          preview: { select: { title: "title" } },
        },
      ],
    }),
    defineField({
      name: "ceoSection",
      title: "Word from Our CEO",
      type: "object",
      fields: [
        { name: "name", type: "string", title: "CEO Name" },
        { name: "role", type: "string", title: "Role / Title" },
        {
          name: "photo",
          type: "image",
          title: "CEO Photo",
          options: { hotspot: true },
        },
        { name: "quote", type: "text", title: "Opening Quote", rows: 2 },
        {
          name: "body",
          type: "array",
          title: "Message Body",
          of: [{ type: "block" }],
        },
        { name: "linkedin", type: "url", title: "LinkedIn URL" },
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "About Page" };
    },
  },
});
