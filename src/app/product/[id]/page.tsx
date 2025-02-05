import {fetchProductById} from '@/Utils/functions/dataFetchers';
import {ProductData} from '@/Utils/Types';
import ProductClient from '@/Components/ClientSide/ProductClient/ProductClient';
import {notFound, redirect} from 'next/navigation';
import React from 'react'
import {ResolvingMetadata, Metadata} from 'next';

export async function generateMetadata({params, searchParams} : any, parent : ResolvingMetadata) : Promise < Metadata > {
    const id = await params.id;

    const product: ProductData | null = await fetchProductById(id, 200);

    if (!product) {
        return {title: 'Product Page - Wavescode'};
    }

    const productTitle = product
        ?.title
            ? `${product
                ?.title} - Wavescode`
                : 'Product Page - Wavescode';

    return {
        title: productTitle,
        description: `Transform your Lebanese home with Wavescode bespoke metal furniture and modern decor. Crafted for style and durability, our designs elevate any space.`,
        icons: {
            icon: `https://ecommerce-dashboard-template.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwxm8f25f%2Fimage%2Fupload%2Fv1738451792%2Fxa1lbee2op8ziygfxc2j.jpg&w=64&q=75`
        }
    };
}

export const Page = async({params} : {
    params: {
        id: string
    }
}) => {
    try {

    const {id} = await params;
    const product : ProductData | null = await fetchProductById(id);

    if (!product) {
        notFound();
    }
    return (<ProductClient product={product}/>)
}

catch(e){
    console.log('e: ', e);
    redirect('/')
}
}

export default Page