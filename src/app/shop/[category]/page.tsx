import { fetchProducts } from "@/app/Utils/functions/dataFetchers";
import CollectionsClient from "@/Components/ClientSide/CollectionsClient/CollectionsClient";
import React from "react";




const ProductPage = async ({ params }: { params: { [key: string]: string } }) => {
  const { category = "collections", sort = "", skip = "0", limit = "10", search  } = await params;
  const data   = await fetchProducts(category, sort, parseInt(skip), parseInt(limit), search);

  return (
    <>
      <CollectionsClient data={data}  />
    </>
  );
};

export default ProductPage;