// Sanity schema for About Us page

import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      description: 'The title of the About Us page.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'A hero image for the About Us page.',
    }),
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      description: 'A short introduction to the brand.',
    }),
    defineField({
      name: 'brandQuote',
      title: 'Brand Quote',
      type: 'string',
      description: 'A central quote or statement about the brand.',
    }),
    defineField({
      name: 'brandStory',
      title: 'Brand Story',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The story behind the brand, its mission, values, and vision.',
    }),
  
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      description: 'Additional information at the bottom of the page.',
    }),
  ],
});

// Define team member schema
export const teamMember = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
  ],
});
