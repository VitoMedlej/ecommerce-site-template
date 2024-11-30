"use client";

import { Grid2 } from "@mui/material";
import React, { useEffect, useState } from "react";
import SwiperCarousel from "./SwiperCarousel/SwiperCarousel";
import { HeroSlide } from "@/app/Utils/Types";

export default function HomePage({ slides: staticSlides }: { slides: HeroSlide[] | null }) {
  const [slides, setSlides] = useState<HeroSlide[]>(staticSlides || []);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (staticSlides === null) {
      const fetchSlidesFromSanity = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sanity-slides`, {
            next: { revalidate: 1200 },
          });

          if (!response.ok) {
            throw new Error(`Failed to fetch slides: ${response.statusText}`);
          }

          const result: HeroSlide[] = await response.json();
          setSlides(result);
        } catch (error: any) {
          console.error("Error fetching slides from Sanity:", error);
          setError(error.message);
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
