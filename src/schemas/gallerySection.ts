import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3, // Adjust the number of rows as needed
    }),
    defineField({
      name: 'createdDate',
      title: 'Created Date',
      type: 'datetime',
    }),
    defineField({
      name: 'updatedDate',
      title: 'Updated Date',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'description',
      media: 'image',
    },
    prepare(selection) {
      const { title, media } = selection;
      return {
        title: title || 'No description', // Provide a fallback title if there's no description
        media,
      };
    },
  },
});
