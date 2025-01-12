'use server';

import { ProductData, Section } from "../Types";
import { FilterType } from "./ProcessHomeSectionsData";


export async function fetchExternalData<T>(
  url: string,
  body ?: object | null,
  fetchOptions: RequestInit = { next: { revalidate: 60 } },
  method ?: 'POST' | 'GET' | 'PUT' | 'DELETE'
): Promise<T | null> {
  try {
    const response = await fetch(url, {
      method: method ? method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TKN}`,
      },
      body: method !== 'GET' ? JSON.stringify(body) : null,
      ...fetchOptions,
    });

    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

    const jsonData = await response.json();
    return jsonData?.responseObject;
  } catch (error) {
    console.error("Error fetching external data:", error);
    return null;
  }
}


export const fetchHomeProducts = async (
  filterTypes: FilterType[],
  revalidate: number | false = 60
): Promise<{ Sectiontype: string; data: ProductData[] }[] | null> => {
  return await fetchExternalData(
    `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/products/home`,
    filterTypes,
    { next: { revalidate } }
  );
};

export const fetchProducts = async (
  category: string,
  sort?: string,
  skip = 0,
  limit = 10,
  search?: string,
  subcategory?: string
) => {
  const params: Record<string, string> = {};

  if (search && search.length > 2) params.search = search;
  if (sort) params.sort = sort;
  params.skip = String(skip);
  params.limit = String(limit);

  const queryString = new URLSearchParams(params).toString();

  try {
      const endpoint = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/products/shop/${category}` +
      (subcategory ? `/${subcategory}` : "") +
      (queryString ? `?${queryString}` : "");
    

      const data = await fetchExternalData<Section>(endpoint, null, { next: { revalidate: search ? 0 : 60 } }, 'GET');

      if (!data) {
          console.error('No products found.');
          return null;
      }

      return data;
  } catch (error: unknown) {
      if (error instanceof Error) {
          console.error('Error fetching products:', error.message);
      } else {
          console.error('Unexpected error fetching products:', error);
      }
      return null;
  }
};


export const fetchProductById = async (
  id: string
): Promise<ProductData | null> => {
  if (!id) {
    console.error('Invalid product ID provided.');
    return null;
  }

  try {
    const product = await fetchExternalData<ProductData>(
      `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/products/${id}`,
      null,
      { next: { revalidate: 0 } },
      'GET'
    );

    if (!product) {
      console.error(`Product with ID: ${id} not found.`);
      return null;
    }
    
    return product;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error fetching product with ID: ${id}:`, error.message);
    } else {
      console.error(`Unexpected error fetching product with ID: ${id}:`, error);
    }
    return null;
  }
};