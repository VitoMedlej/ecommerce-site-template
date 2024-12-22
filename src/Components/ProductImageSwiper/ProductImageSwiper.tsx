"use client"

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Box } from '@mui/material';
import { LegacyRef } from 'react';



export default function ProductImageSwiper({Slides,swiperRef} : {Slides : string[], swiperRef :  LegacyRef<SwiperRef> | undefined}) {
  return (
    <Swiper ref={swiperRef} spaceBetween={10} speed={400} slidesPerView={1}>
      {Slides && Slides?.map((slide, index) => (
        <SwiperSlide key={index}>
         <Box sx={{
          // height:{xs:'500px',sm:'100%'}
          }}>
            <img src={slide} alt="" className="img cover" />
         </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};