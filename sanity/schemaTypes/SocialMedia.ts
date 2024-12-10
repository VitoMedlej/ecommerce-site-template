import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'socialMedia',
  title: 'Social Media Links',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'Whatsapp', value: 'whatsapp' },
          { title: 'Twitter', value: 'twitter' },
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'YouTube', value: 'youtube' },
        ],
      },
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
        }),
    }),
    // defineField({
    //   name: 'icon',
    //   title: 'Icon',
    //   type: 'image',
    //   options: {
    //     hotspot: true,
    //   },
    // }),
  ],
});
