import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The title of the home page.',
    }),
    defineField({
      name: 'sections',
      title: 'Page Sections',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            { type: 'categoryCardsSection' },
            { type: 'productsSection' },
          ],
        },
      ],
      description: 'Add and reorder sections to control the layout of the home page.',
    }),
  ],
});
