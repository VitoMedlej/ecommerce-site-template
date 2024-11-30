import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'



export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "8hww7tr9", // Default to your actual projectId
  dataset: process.env.SANITY_DATASET || "production",    // Default to your actual dataset
  useCdn: process.env.SANITY_USE_CDN === "true",          // Convert string to boolean
  apiVersion: process.env.SANITY_API_VERSION || "2024-01-01", // Default API version
});


  const builder = imageUrlBuilder(client)

  export function urlFor(source : any) {
    return builder.image(source)
  }