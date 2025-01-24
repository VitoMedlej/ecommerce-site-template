"use client";

import { Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";
import SwiperCarousel from "./SwiperCarousel/SwiperCarousel";
import { HeroSlide } from "@/Utils/Types";

export default function HomePage({ slides: staticSlides }: { slides: HeroSlide[] | null }) {
  const [slides, setSlides] = useState<HeroSlide[]>(staticSlides || []);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (staticSlides === null) {
      const fetchSlidesFromSanity = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/sanity-slides`, {
            cache: "force-cache",  next: {  revalidate: 0 },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch slides: ${response.statusText}`);
          }

          const result: HeroSlide[] = await response.json();
          setSlides(result);
        } catch (error )  {
         
  if (error instanceof Error) {
    setError(error.message);
  } else {
    setError("An unknown error occurred"); 
  }
        }
      };

      fetchSlidesFromSanity();
    }
  }, [staticSlides]);

  return (
    <Grid2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <SwiperCarousel slides={slides} />
    </Grid2>
  );
}
