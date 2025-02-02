"use client"

import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Box } from '@mui/material';
import { LegacyRef } from 'react';
import { Pagination } from 'swiper/modules';



export default function ProductImageSwiper({Slides} : {Slides : string[], swiperRef ?:  LegacyRef<SwiperRef> | undefined}) {
  return (
    <Swiper
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    // ref={swiperRef}
    spaceBetween={10}
    speed={400}
    slidesPerView={1}
  >
      {Slides && Slides?.map((slide, index) => (
        <SwiperSlide key={index}>
         <Box sx={{
          height:{xs:'100%',sm:'500px'}
          }}>
            <img src={slide} alt="" className="img cover" />
         </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};