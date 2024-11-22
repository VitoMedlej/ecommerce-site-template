// app/product/[id]/page.tsx

// Add `"use server"` to mark the server component
'use server';

import ProductClient from '@/Components/ClientSide/ProductClient/ProductClient';
import TrendingItems from '@/Components/ClientSide/TrendingItems/TrendingItems';
import ProductSection from '@/Components/ProductSection/ProductSection';
import { notFound } from 'next/navigation';

const ProductPage = async ({ params } : any) => {
    const { id } = await params
 

  // Fetch product data (replace this with your API endpoint)
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${id}`, {
//     cache: 'force-cache', // Cache the response for improved performance
//     next: {
//       revalidate: 60, // Regenerate the page every 60 seconds
//     },
//   });

//   if (!res.ok) return notFound();

//   const product = await res.json();

  return (
    <>
      <ProductClient/>
      <ProductSection/>
      {/* <h1>{product.title}</h1> */}
      {/* <p>{product.description}</p> */}
      {/* Render other product details */}
    </>
  );
};

export default ProductPage;
