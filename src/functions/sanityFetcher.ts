import { HeroSlide } from "@/app/Utils/Types";
import { client } from "@/functions/sanityClient";

type FetchOptions = {
  revalidate?: number; // Revalidation interval in seconds
};

export async function fetchSanityData<T>(
  query: string,
  options?: FetchOptions
): Promise<T | null> {
  try {
    const { revalidate = 60 } = options || {}; // Default revalidation to 1 minute
    const data = await client.fetch(query, {}, { cache: "force-cache", next: { revalidate } });
    return data;
  } catch (error) {
    console.error("Error fetching Sanity data:", error);
    return null; // Fallback to null if the fetch fails
  }
}

// Specific data fetchers for reuse
export const fetchCategories = async (revalidate?: number) => {
  return await fetchSanityData(`*[_type == "category"] { title, subcategories }`, {
    revalidate,
  });
};

export const fetchSlides   = async (revalidate?: number) : Promise<HeroSlide[] | null> => {
  return await fetchSanityData(
    `*[_type == "heroSlide"] | order(_createdAt asc)`,
    { revalidate }
  );
};
