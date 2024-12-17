// app/product/[id]/page.tsx

// Add `"use server"` to mark the server component
'use server';

import ProductClient from '@/Components/ClientSide/ProductClient/ProductClient';
// import ProductSection from '@/Components/ProductSection/ProductSection';
import { notFound } from 'next/navigation';

const ProductPage = async () => {
  // const ProductPage = async ({ params } : unknown) => {
    // const { id } = await params
    // console.log('id: ', id);
 

  // Fetch product data (replace this with your API endpoint)
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
  //   // cache: 'force-cache', // Cache the response for improved performance
  //   next: {
  //     revalidate: 0, 
  //       },
  // });

  // if (!res.ok) return notFound();

  // const product = await res.json();

  return (
    <>
      {/* <ProductClient product={product}/> */}
      {/* <ProductSection isHomePage={false} sectionDetails={null}/> */}
      {/* <h1>{product.title}</h1> */}
      {/* <p>{product.description}</p> */}
      {/* Render other product details */}
    </>
  );
};

export default ProductPage;
