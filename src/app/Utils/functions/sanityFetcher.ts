import { AboutPage } from "@/app/about/page";
import { CategoryCardsSection, HeroSlide } from "@/app/Utils/Types";
import { client } from "@/app/Utils/functions/sanityClient";



export interface Category {
  _id: string;
  title: string;
}


type FetchOptions = {
  revalidate?: number;
};

export type bannerImage = {

    asset: {
      _id: string;
      url: string;
    };
 
}
export interface ProductsSection {
  _type: 'productsSection';
  _id: string;
  title: string;
  layout: string;
  bannerImage: bannerImage;
  filterType: string;
  category?: Category;
  tags: string[];
}


export interface HomePage {
  _id: string;
  title: string;
  sections: Array<CategoryCardsSection | ProductsSection>;
}[0]


export async function fetchSanityData<T>(
  query: string,
  options: FetchOptions = { revalidate: 60 } 
): Promise<T | null> {
  try {
    const data = await client.fetch(query, {}, {
      cache: "force-cache",
      next: { revalidate: options.revalidate },
    });
    return data;
  } catch (error) {
    console.error("Error fetching Sanity data:", error);
    return null;
  }
}


export const fetchAboutPage = (revalidate?: number): Promise<AboutPage | null> =>
  fetchSanityData(
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

export const fetchCategories = (revalidate?: number) =>
  fetchSanityData(`*[_type == "category"] { title, subcategories }`, { revalidate });

export const fetchSlides = (revalidate?: number): Promise<HeroSlide[] | null> =>
  fetchSanityData(`*[_type == "heroSlide"] | order(_createdAt asc)`, { revalidate });

export const fetchCardSection = (revalidate?: number): Promise<CategoryCardsSection | null> =>
  fetchSanityData(
    `*[_type == "categoryCardsSection"] | order(_createdAt asc)[0]`,
    { revalidate }
  ); 
  export const fetchHomePageSections = (revalidate?: number): Promise<HomePage[] | null> =>
    
    fetchSanityData(
      `*[_type == "homePage" && _id == "homePage"]{
    _id,
    title,
    sections[]->{
      _id,
      _type,
      title,
      ...
    }
  }`,
      { revalidate }
    );
  
 
  