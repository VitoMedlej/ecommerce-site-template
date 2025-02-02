// RecommendedProducts.tsx
"use client";
import React, { useEffect, useState } from 'react';
import ProductSwiper from '../ProductSection/ProductSwiper/ProductSwiper';
import { fetchRecommendedProducts } from "@/Utils/functions/dataFetchers";  // Assuming this is available
import { ProductData } from '@/Utils/Types';
import { Box, Typography } from '@mui/material';

const RecommendedProducts = () => {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recommended = await fetchRecommendedProducts();
       if (recommended) {
           setProducts(recommended);
        }
      } catch (err) {
        setError("Failed to load recommended products.");
        console.error("Error loading recommended products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <></>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  if (!products || products?.length === 0) return null;
  return (
  <Box sx={{mt:{xs:8,md:12,lg:24},width:'100%'}}>
    <Typography sx={{fontWeight:700,pb:3}}>You might also like</Typography>
    <Box sx={{width:'100%',height:'100%'}}>
      
  <ProductSwiper products={products} swiperRef={undefined} />
    </Box>
  </Box>
  )
};

export default RecommendedProducts;