"use client";

import { Box, Typography } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const Announcements = ({ SanityAnnouncements }: { SanityAnnouncements: { message: string }[] }) => {
    const messages = SanityAnnouncements && SanityAnnouncements?.length > 0 && SanityAnnouncements.map(announcement => announcement.message);


    return (
        <Box className='dark-bg4' sx={{height:'40px'}}>
            <Swiper
            className='h100 centered flex'
                autoplay={{ delay: 3000 }}
                loop
                height={40}
                slidesPerView={1}
                spaceBetween={0}
                modules={[Autoplay]}

            >
                {messages && messages?.map((message, index) => (
                    <SwiperSlide key={index}>
                        <Typography sx={{px:.25}} className="text-center h100 fw700 fs075 flex centered">{message}</Typography>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};

export default Announcements;
