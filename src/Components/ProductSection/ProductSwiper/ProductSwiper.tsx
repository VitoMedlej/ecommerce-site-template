"use client"

// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import {Box, Button, Typography} from '@mui/material';
import Btn from '@/Components/Btn/Btn';
import ProductCard from '@/Components/ProductCard/ProductCard';

const Slides = [
    {
        mainTitle: 'Main Title 1',
        subtitle: 'Subtitle 1',
        smallText: 'Small descriptive text for slide 1.',
        imageXs: 'https://new-ella-demo.myshopify.com/cdn/shop/files/h14f2-spotlight-3_570x.jpg?v=' +
                '1642058989',
        imageMd: 'https://new-ella-demo.myshopify.com/cdn/shop/files/h14f2-spotlight-4_570x.jpg?v=' +
                '1642058989'
    }, {
        mainTitle: 'Main Title 2',
        subtitle: 'Subtitle 2',
        smallText: 'Small descriptive text for slide 2.',
        imageXs: 'https://example.com/image-xs-2.jpg',
        imageMd: 'https://example.com/image-md-2.jpg'
    }, {
        mainTitle: 'Main Title 2',
        subtitle: 'Subtitle 2',
        smallText: 'Small descriptive text for slide 2.',
        imageXs: 'https://example.com/image-xs-2.jpg',
        imageMd: 'https://example.com/image-md-2.jpg'
    }, {
        mainTitle: 'Main Title 2',
        subtitle: 'Subtitle 2',
        smallText: 'Small descriptive text for slide 2.',
        imageXs: 'https://example.com/image-xs-2.jpg',
        imageMd: 'https://example.com/image-md-2.jpg'
    }, {
        mainTitle: 'Main Title 2',
        subtitle: 'Subtitle 2',
        smallText: 'Small descriptive text for slide 2.',
        imageXs: 'https://example.com/image-xs-2.jpg',
        imageMd: 'https://example.com/image-md-2.jpg'
    }
];
export default({swiperRef} : any) => {

    return (
        <Swiper
            spaceBetween={10}
            ref={swiperRef}
            breakpoints={{
            320: {
                slidesPerView: 1.2
            },
            640: {
                slidesPerView: 2.1
            },
            900: {
                slidesPerView: 2.5
            },
            1200: {
                slidesPerView: 3.4
            },
            1536: {
                slidesPerView: 4.5
            }
        }}>
            {Slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <ProductCard/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

function useRef(arg0 : null) {
    throw new Error('Function not implemented.');
}
