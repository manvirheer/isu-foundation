import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import aboutSection from './aboutSection'
import post from './post'
import gallerySection from './gallerySection'

export const schemaTypes = [post, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blockContent, aboutSection, gallerySection],
}
