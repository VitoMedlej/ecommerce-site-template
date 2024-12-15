import { ProductData } from "@/app/Utils/Types";


export async function fetchExternalData<T>(url: string): Promise<T | null> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching external data:", error);
      return null;
    }
  }

  export const fetchHomeProducts = async (): Promise<ProductData[] | null> => {
    return await fetchExternalData(`${process.env.EXTERNAL_API_URL}/products/home`);
  };