import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';


export const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || "8hww7tr9", 
  dataset: process.env.SANITY_DATASET || "production",    
  useCdn: process.env.SANITY_USE_CDN === "true",         
  apiVersion: process.env.SANITY_API_VERSION || "2024-01-01", 
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, 
});


  const builder = imageUrlBuilder(client)
  

  export function urlFor(source: SanityImageSource | null) {
    const fallbackImageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png";
  
    if (!source || (source as any)._upload) {
      return { url: () => fallbackImageUrl }; 
    }
  
    return builder.image(source);
  }