import { defineField, defineType } from "sanity";

export default defineType({
  name: "announcement",
  title: "Announcement",
  type: "document",
  fields: [
    defineField({
      name: "message",
      title: "Message",
      type: "string",
      description: "The announcement message to display",
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(200)
          .warning("Keep it concise, max 200 characters."),
    }),
  ],
});
