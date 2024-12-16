'use server';

import { ProductData } from "@/app/Utils/Types";
import { FilterType } from "@/app/page";

export async function fetchExternalData<T>(
  url: string,
  body: object,
  fetchOptions: RequestInit = { next: { revalidate: 60 } }
): Promise<T | null> {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TKN}`,
      },
      body: JSON.stringify(body),
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
    `${process.env.EXTERNAL_API_URL}/products/home`,
    filterTypes,
    { next: { revalidate } }
  );
};
