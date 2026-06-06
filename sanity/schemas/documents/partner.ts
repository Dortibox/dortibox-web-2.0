import { defineField, defineType } from "sanity";

export const partner = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Partner Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "type",
      title: "Partner Type",
      type: "string",
      options: {
        list: [
          { title: "Government", value: "government" },
          { title: "Mobile Money", value: "mobile-money" },
          { title: "NGO / International", value: "ngo" },
          { title: "Corporate", value: "corporate" },
          { title: "Technology", value: "technology" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "featured",
      title: "Featured Partner?",
      type: "boolean",
      description: "Featured partners appear in the homepage partner strip",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "type", media: "logo" },
  },
});
