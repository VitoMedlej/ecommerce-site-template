import { fetchProducts } from "@/Utils/functions/dataFetchers";
import CollectionsClient from "@/Components/ClientSide/CollectionsClient/CollectionsClient";
import React from "react";


// type CategoryParams = {
//   category: string;
//   subcategory?: string;
//   sort?: string;
//   skip?: string;
//   limit?: string;
//   search?: string;
// };

const ShopPage = async ({ params }: { params: { [key: string]: string } }) => {
  const {
    
    
      category = "collection",
      subcategory = "",
      sort = "",
      skip = "0",
      limit = "10",
      search
    } 
    = await params;
    console.log('search: ', search, category);

  
  const data = await fetchProducts(
      category,
      sort,
      parseInt(skip, 10),
      parseInt(limit, 10),
      search,
      subcategory
  );

  return (
      <>
          <CollectionsClient data={data} />
      </>
  );
};

export default ShopPage;