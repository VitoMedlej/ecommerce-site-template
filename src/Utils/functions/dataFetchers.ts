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

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(`API Error: ${response.status} - ${errorMessage}`);
    }

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
  console.log('process.env.NEXT_PUBLIC_EXTERNAL_API_URL: ', process.env.NEXT_PUBLIC_EXTERNAL_API_URL);
  return await fetchExternalData(
    `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/api/products/home`,
    {filterTypes},
    { next: { revalidate } },
    'POST',  
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
  if (sort && sort?.length > 0) params.sort = sort;
  params.skip = String(skip);
  params.limit = String(limit);

  const queryString = new URLSearchParams(params).toString();

  try {
    const endpoint =
      `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/api/products/shop/${category}` +
      (subcategory ? `?subcategory=${subcategory}` : "") +
      (queryString ? `${subcategory ? '&' : '?'}${queryString}` : "");

    const body = { sort, size: params.size, color: params.color };
    console.log('body: ', body);

    console.log("endpoint: ", endpoint);

    const data = await fetchExternalData<Section>(
      endpoint,
      body,
      { next: { revalidate: search ? 0 : 60 } },
      "POST"
    );

    if (!data) {
      console.error("No products found.");
      return null;
    }

    return {...data, products: data.products.reverse()};
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching products:", error.message);
    } else {
      console.error("Unexpected error fetching products:", error);
    }
    return null;
  }
};


export const fetchProductById = async (
  id: string,
  revalidate ?: number,
): Promise<ProductData | null> => {
  if (!id) {
    console.error('Invalid product ID provided.');
    return null;
  }

  try {
    const product = await fetchExternalData<ProductData>(
      `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/api/products/get-item/${id}`,
      null,
      { next: { revalidate: revalidate ? revalidate : 0 } },
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



export const fetchRecommendedProducts = async (
  limit: number = 8
): Promise<ProductData[] | null> => {
  try {
    const endpoint = `${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/api/products/recommended?limit=${limit}`;

    const recommendedProducts = await fetchExternalData<{products:ProductData[]}>(
      endpoint,
      null,
      { next: { revalidate: 60 } },
      'GET'
    );

    if (!recommendedProducts || !recommendedProducts.products) {
      console.error('No recommended products found.');
      return null;
    }

    return recommendedProducts.products;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error fetching recommended products:', error.message);
    } else {
      console.error('Unexpected error fetching recommended products:', error);
    }
    return null;
  }
};