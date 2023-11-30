import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{
        type: 'image',
        options: { hotspot: true }, // Define hotspot here within each image object
      }],
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 10,
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
      title: 'title',
      media: 'images.0',
    },
    prepare(selection) {
      const { title, media } = selection
      return { title, media }
    },
  },
})
