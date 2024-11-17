"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Box, Button, Typography } from '@mui/material';
import Btn from '@/Components/Btn/Btn';


const Slides = [
  {
    mainTitle: 'Main Title 1',
    subtitle: 'Subtitle 1',
    smallText: 'Small descriptive text for slide 1.',
    imageXs: 'https://new-ella-demo.myshopify.com/cdn/shop/files/h14f2-spotlight-3_570x.jpg?v=1642058989',
    imageMd: 'https://new-ella-demo.myshopify.com/cdn/shop/files/h14f2-spotlight-4_570x.jpg?v=1642058989',
  },
  {
    mainTitle: 'Main Title 2',
    subtitle: 'Subtitle 2',
    smallText: 'Small descriptive text for slide 2.',
    imageXs: 'https://example.com/image-xs-2.jpg',
    imageMd: 'https://example.com/image-md-2.jpg',
  },
  // Add more slide objects as needed
];
export default () => {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      {Slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              backgroundImage: {
                xs: `url(${slide.imageXs})`,
                md: `url(${slide.imageMd})`,
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
                  {slide.mainTitle}
                </Typography>

                {/* Subtitle */}
                <Typography sx={{ pb: 1, fontSize: '1.25rem', fontWeight: 'medium' }} component="h2">
                  {slide.subtitle}
                </Typography>

                {/* Small Descriptive Text */}
                <Typography sx={{ mb: 2, fontSize: '1rem', fontWeight: 'light' }} component="p">
                  {slide.smallText}
                </Typography>

                <Btn v2={true} sx={{ mt: 1 }}>
                  Hello world
                </Btn>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};