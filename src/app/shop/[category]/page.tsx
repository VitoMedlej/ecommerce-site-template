import { fetchProducts } from "@/Utils/functions/dataFetchers";
import CollectionsClient from "@/Components/ClientSide/CollectionsClient/CollectionsClient";
import React from "react";

const ShopPage = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const {
    category = "collection",
    subcategory = "",
    sort = "",
    skip = "0",
    limit = "10",
    search
  } = searchParams;

  const filters: Record<string, string> = {
    search: search || "",
    sort: sort || "",
    subcategory: subcategory || ""
  };

  const data = await fetchProducts(
    category,
    filters.sort,
    parseInt(skip, 10),
    parseInt(limit, 10),
    filters.search,
    filters.subcategory
  );

  return (
    <>
      <CollectionsClient data={data} />
    </>
  );
};

export default ShopPage;