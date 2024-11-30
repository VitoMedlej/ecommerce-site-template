import { defineField, defineType } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Category Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subcategories',
      title: 'Sub-Categories',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of sub-categories under this category',
    }),
  ],
});
