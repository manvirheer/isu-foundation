import type { PortableTextBlock } from '@portabletext/types'
import type { ImageAsset, Slug } from '@sanity/types'
import groq from 'groq'
import { type SanityClient } from 'next-sanity'
import { urlForImage } from './sanity.image'

export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`

export async function getPosts(client: SanityClient): Promise<Post[]> {
  return await client.fetch(postsQuery)
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]`

export async function getPost(
  client: SanityClient,
  slug: string,
): Promise<Post> {
  return await client.fetch(postBySlugQuery, {
    slug,
  })
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export interface Post {
  _type: 'post'
  _id: string
  _createdAt: string
  title?: string
  slug: Slug
  excerpt?: string
  mainImage?: ImageAsset
  body: PortableTextBlock[]
}

// Query for fetching 'About' page content
export const aboutQuery = groq`*[_type == "about"][0]`

// Function to fetch 'About' page content
export async function getAbout(client: SanityClient): Promise<AboutType> {
  return await client.fetch(aboutQuery)
}

// Define an interface for the 'About' page content
export interface AboutType {
  _type: 'about'
  _id: string
  title: string
  images: ImageAsset[]
  text: PortableTextBlock
  createdDate: string
  updatedDate: string
}

export const aboutImagesQuery = groq`*[_type == "about"][0]`;

export async function getAboutImages(client: SanityClient): Promise<string[]> {
  const result = await client.fetch(aboutImagesQuery);
  return result.images
    .map(img => {
      // Debugging: log the asset reference
      console.log("Asset Reference:", img.asset?._ref);

      // Check if the reference exists before calling urlForImage
      if (img.asset?._ref) {
        return urlForImage({ _ref: img.asset._ref }).url();
      }
      return null;
    })
    .filter(url => url !== null); // Filter out any null URLs
}
