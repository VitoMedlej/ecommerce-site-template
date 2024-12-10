import { AboutPage } from "@/app/about/page";
import { CategoryCardsSection, HeroSlide } from "@/app/Utils/Types";
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

export const fetchAboutPage = async (revalidate?: number) : Promise<AboutPage | null> => {
  return await fetchSanityData(
    `*[_type == "aboutPage"][0] {
      _id,
      title,
      heroImage {
        asset->{_id, url},
        hotspot
      },
      introText,
      brandQuote,
      brandStory,
      footerText
    }`,
    { revalidate }
  );
};
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

export const fetchCardSection = async (revalidate?: number): Promise<CategoryCardsSection | null> => {
  return await fetchSanityData(
    `*[_type == "categoryCardsSection"] | order(_createdAt asc)[0]`,
    { revalidate }
  );
};
