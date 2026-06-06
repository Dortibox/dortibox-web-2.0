import { defineField, defineType } from "sanity";

export const customer = defineType({
  name: "customer",
  title: "Customer",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      description: "e.g. 'Kroo Town Community', 'ABC School', 'Fatmata Kamara'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Customer Type",
      type: "string",
      options: {
        list: [
          { title: "Household", value: "household" },
          { title: "Community", value: "community" },
          { title: "Business", value: "business" },
          { title: "School", value: "school" },
          { title: "Institution / NGO", value: "institution" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location / Area",
      type: "string",
      description: "Community or area in Freetown",
    }),
    defineField({
      name: "logo",
      title: "Logo / Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "testimonialQuote",
      title: "Testimonial Quote",
      type: "text",
      rows: 3,
      description: "Optional — displayed on Impact page",
    }),
    defineField({
      name: "featured",
      title: "Featured on Impact Page?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "type",
      media: "logo",
    },
    prepare({ title, subtitle, media }) {
      const typeLabels: Record<string, string> = {
        household: "Household",
        community: "Community",
        business: "Business",
        school: "School",
        institution: "Institution / NGO",
      };
      return {
        title,
        subtitle: typeLabels[subtitle] || subtitle,
        media,
      };
    },
  },
});
