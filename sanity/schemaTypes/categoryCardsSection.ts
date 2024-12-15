// categoryCardsSection.js
import { defineField, defineType, defineArrayMember } from 'sanity';

export default defineType({
  name: 'categoryCardsSection',
  title: 'Cards Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'The title for this section, e.g., "Deals Under $15" or "Shop Men\'s Sale".',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          title: 'Card',
          fields: [
            defineField({
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'Title for the card, e.g., "Men\'s Sale" or "Accessories".',
            }),
            defineField({
              name: 'subtitle',
              title: 'Card Subtitle',
              type: 'string',
              description: 'Optional subtitle, e.g., "Up to 50% off".',
            }),
            defineField({
              name: 'image',
              title: 'Card Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              description: 'An image representing the card.',
            }),
            defineField({
              name: 'button',
              title: 'Button',
              type: 'string',
              description: 'What the button says',
            }),
            defineField({
              name: 'link',
              title: 'Card Link',
              type: 'url',
              validation: (Rule) => Rule.uri({
                scheme: ['http', 'https'],
              }),
              description: 'Where the card should navigate to when clicked.',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
      description: 'Add one or more cards to display in this section.',
    }),
  ],
});
