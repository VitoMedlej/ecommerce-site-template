
import { fetchProductById } from '@/Utils/functions/dataFetchers';
import { ProductData } from '@/Utils/Types';
import ProductClient from '@/Components/ClientSide/ProductClient/ProductClient';
import { notFound } from 'next/navigation';
import React from 'react'

export const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product : ProductData | null = await fetchProductById(id);

  if (!product) {
    notFound();
  }

  return (

      <ProductClient product={product} />
  )
}

export default Page