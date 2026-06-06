import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Description",
      type: "string",
      description: "e.g. 'Household User', 'Small Business Owner', 'Community Leader'",
    }),
    defineField({
      name: "community",
      title: "Community / Area",
      type: "string",
    }),
    defineField({
      name: "customerType",
      title: "Customer Type",
      type: "string",
      options: {
        list: [
          { title: "Household", value: "household" },
          { title: "Community", value: "community" },
          { title: "Business", value: "business" },
          { title: "School", value: "school" },
          { title: "Institution", value: "institution" },
        ],
      },
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "community", media: "photo" },
  },
});
