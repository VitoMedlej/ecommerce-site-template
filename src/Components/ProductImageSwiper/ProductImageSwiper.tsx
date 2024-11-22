"use client"

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Box, Button, Typography } from '@mui/material';
import Btn from '@/Components/Btn/Btn';
import { LegacyRef } from 'react';


const Slides = [
  {
    mainTitle: 'Main Title 1',
    subtitle: 'Subtitle 1',
    smallText: 'Small descriptive text for slide 1.',
    imageXs: 'https://new-ella-demo.myshopify.com/cdn/shop/files/h14f2-spotlight-3_570x.jpg?v=1642058989',
  },
  {
    mainTitle: 'Main Title 2',
    subtitle: 'Subtitle 2',
    smallText: 'Small descriptive text for slide 2.',
    imageXs: 'https://cdn.shopify.com/s/files/1/0156/6146/files/StudioJoggers-BlackA1A3U-BBBB-0206_56101cb0-068a-46bb-9d4b-5fc9eaabeb08_1664x.jpg?v=1713881548',

  },
  // Add more slide objects as needed
];
export default ({swiperRef} : {swiperRef :  LegacyRef<SwiperRef> | undefined}) => {
  return (
    <Swiper ref={swiperRef} spaceBetween={50} slidesPerView={1}>
      {Slides.map((slide, index) => (
        <SwiperSlide key={index}>
         <Box sx={{height:{xs:'500px',sm:'100%'}}}>
            <img src={slide.imageXs} alt="" className="img contain" />
         </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};