import { CategoryCardsSection } from "../Types";
import { fetchHomeProducts } from "./dataFetchers";
import { fetchHomePageSections, HomePage, ProductsSection } from "./sanityFetcher";

export interface FilterType {
    filterBy: string;
    value: string | null;
}

// IMPORTANT: WHAT DOES THIS FILE DO?
// In simple terms, it gets the home page sections from the CMS, then fetches each section's data.


// First seperates sections
// Section that need products has sepecific "filter type" which helps us understand what products to fetch
// For example, fetch "New Arrivals" products.


// This makes the home page dynamic, CMS handles the sections, and we fetch the data accordingly.





// Function to separate product and non-product sections
const separateSections = (HomePageSections: (CategoryCardsSection | ProductsSection)[]) => {
  return HomePageSections.reduce(
    (acc: { productSections: ProductsSection[]; otherSections: CategoryCardsSection[] }, section) => {
      if (section._type === "productsSection") {
        acc.productSections.push(section);
      } else {
        acc.otherSections.push(section);
      }
      return acc;
    },
    { productSections: [], otherSections: [] }
  );
};

// Function to create filter types from product sections
const createFilterTypes = (productSections: ProductsSection[]): FilterType[] => {
  return productSections.flatMap((section: ProductsSection) => {
    const filters: FilterType[] = [];
    if (section.filterType) {
      filters.push({ filterBy: section.filterType, value: null });
    }
    if (section.category) {
      filters.push({ filterBy: 'category', value: section.category.title });
    }
    return filters;
  });
};

// Main function to process home sections data
export const ProcessHomeSectionsData = async () => {
   const SanityHomeSections : HomePage[] | null = await fetchHomePageSections(10)
  
    const HomePageSections = SanityHomeSections && SanityHomeSections[0].sections
  try {
    if (!HomePageSections) return null;
    const { productSections, otherSections } = separateSections(HomePageSections);

    const filterTypes = createFilterTypes(productSections);

    const homeProducts = await fetchHomeProducts(filterTypes, 10);
    console.log('homeProducts: ', homeProducts);

    // Map product sections data based on filterType
      const productSectionsData = productSections.map((section) => {
      const sectionData = homeProducts?.find((productGroup) => productGroup.Sectiontype === section.filterType);
      const filteredProducts = sectionData ? sectionData.data : [];

      return {
        Sectiontype: section.filterType,
        data: filteredProducts.length > 0 ? filteredProducts : null,
        _id: section._id,
        title: section.title,
        layout:  section.layout,
        bannerImage: section.bannerImage
      };
    });

    // Map other sections (non-product sections) to include their cards
    const otherSectionsData = otherSections.map((section) => ({
      Sectiontype: section._type,
      data: section.cards,
      _id: section._id,
      title: section.title,
    }));

    return [...productSectionsData, ...otherSectionsData];
  } catch (e) {
    console.error("Error processing home sections data: ", e);
    return [];
  }
};
