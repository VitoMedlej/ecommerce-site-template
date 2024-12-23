
import { fetchProductById } from '@/app/Utils/functions/dataFetchers';
import { ProductData } from '@/app/Utils/Types';
import ProductClient from '@/Components/ClientSide/ProductClient/ProductClient';
import { notFound } from 'next/navigation';
import React from 'react'

export const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product : ProductData | null = await fetchProductById(id);
  console.log('product: ', product);

  if (!product) {
    notFound();
  }

  return (

      <ProductClient product={product} />
  )
}

export default Page