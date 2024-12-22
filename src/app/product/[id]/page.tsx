// import { fetchProductById } from "@/app/Utils/functions/dataFetchers";
// import ProductClient from "@/Components/ClientSide/ProductClient/ProductClient";
// import { notFound } from "next/navigation";

export const Page = async ({ params }: { params: { id: string } }) => {
  console.log('params: ', params);
  // const { id } = await params;

  // const product = await fetchProductById(id);

  // if (!product) {
  //   console.error(`Product with ID: ${id} could not be found.`);
  //   return notFound(); // Return a 404 if no product is found
  // }

  return (
    <>
      {/* <ProductClient product={product} /> */}
    </>
  );
};