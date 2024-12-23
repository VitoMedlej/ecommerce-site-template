"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Box, Typography } from '@mui/material';
import Btn from '@/Components/Btn/Btn';
import { HeroSlide } from '@/Utils/Types';
import { urlFor } from '@/Utils/functions/sanityClient';

export default  function SwiperCarousel({slides: Slides} : {slides : HeroSlide[] | null })  {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {Slides && Slides?.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              backgroundImage: {
                xs: `url(${urlFor(slide?.image)}?q=30)`,
                md: `url(${urlFor(slide?.image)}?q=30)`,
              },
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              '::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.15)', // Dark overlay
                display: { xs: 'block', md: 'none' }, // Show on small screens only
                zIndex: 1,
              },
            }}
          >
            <Box
              sx={{
                width: '500px',
                py: 4,
                px: 4,
                backgroundColor: { xs: 'transparent', md: 'white' }, // Transparent on XS, white on MD
                position: 'relative',
                zIndex: 2,
              }}
            >
              <Box
                sx={{
                  py: 7,
                  border: { md: '2px solid gray' },
                  textAlign: 'center',
                  color: { xs: 'white', md: 'inherit' },
                }}
              >
                {/* Main Title */}
                <Typography sx={{ pb: 1, fontSize: '2rem', fontWeight: 'bold' }} component="h1">
                  {slide.title}
                </Typography>

                {/* Subtitle */}
                <Typography sx={{ pb: 1, fontSize: '1.25rem', fontWeight: 'medium' }} component="h2">
                  {slide.subtitle}
                </Typography>

                {/* Small Descriptive Text */}
                {/* <Typography sx={{ mb: 2, fontSize: '1rem', fontWeight: 'light' }} component="p">
                  {slide.smallText}
                </Typography> */}

                <Btn v2={true} sx={{ mt: 1 }}>
                 {slide.cta}
                </Btn>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};