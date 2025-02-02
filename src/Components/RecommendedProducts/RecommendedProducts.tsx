// RecommendedProducts.tsx
"use client";
import React, { useEffect, useState } from 'react';
import ProductSwiper from '../ProductSection/ProductSwiper/ProductSwiper';
import { fetchRecommendedProducts } from "@/Utils/functions/dataFetchers";  // Assuming this is available

const RecommendedProducts = () => {
  const [products, setProducts] = useState<any[]>([]);
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

  return <ProductSwiper products={products} swiperRef={undefined} />;
};

export default RecommendedProducts;