import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'productsSection',
  title: 'Products Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'layout',
      title: 'Layout',
      type: 'string',
      options: {
        list: [
          { title: 'Image with Products', value: 'with-image' },
          { title: 'No Image', value: 'no-image' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      hidden: ({ parent }) => parent?.layout === 'no-image',
    }),

    defineField({
      name: 'filterType',
      title: 'Filter Type',
      type: 'string',
      options: {
        list: [
          { title: 'New Arrivals', value: 'new-arrivals' },
          { title: 'Best Sellers', value: 'best-sellers' },
          { title: 'By Tags', value: 'tags' },
          { title: 'By Category', value: 'category' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      hidden: ({ parent }) => parent?.filterType !== 'category',
    }),

    defineField({
      name: 'tags',
      title: 'Tags (comma-separated)',
      type: 'string',
      hidden: ({ parent }) => parent?.filterType !== 'tags',
      description: 'Enter tags for filtering products.',
    }),
  ],
});
