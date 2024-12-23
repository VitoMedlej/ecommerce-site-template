// Import Swiper React components
"use client"
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import CategoryCard from '@/Components/CategoryCard/CategoryCard';
import { LegacyRef } from 'react';
import { Card } from '@/Utils/Types';

// const Slides = [
//     {
//         mainTitle: 'Main Title 0',
//         subtitle: 'Subtitle 1',
//         smallText: 'Small descriptive text for slide 1.',
//         imageXs: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHtqgBtaZCc4zMQC6gzxEzFVTfv2K-h23D8NB2rzo1CPSWNMDNc6BnZQxypE4OKpLajY&usqp=CAU' +
//                 '1642058989',
//         imageMd: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHtqgBtaZCc4zMQC6gzxEzFVTfv2K-h23D8NB2rzo1CPSWNMDNc6BnZQxypE4OKpLajY&usqp=CAU' +
//                 '1642058989'
//     }, {
//         mainTitle: 'Main Title 1',
//         subtitle: 'Subtitle 2',
//         smallText: 'Small descriptive text for slide 2.',
//         imageXs: 'https://example.com/image-xs-2.jpg',
//         imageMd: 'https://example.com/image-md-2.jpg'
//     }, {
//         mainTitle: 'Main Title 2',
//         subtitle: 'Subtitle 2',
//         smallText: 'Small descriptive text for slide 2.',
//         imageXs: 'https://example.com/image-xs-2.jpg',
//         imageMd: 'https://example.com/image-md-2.jpg'
//     }, {
//         mainTitle: 'Main Title 3',
//         subtitle: 'Subtitle 2',
//         smallText: 'Small descriptive text for slide 2.',
//         imageXs: 'https://example.com/image-xs-2.jpg',
//         imageMd: 'https://example.com/image-md-2.jpg'
//     }, {
//         mainTitle: 'Main Title 4',
//         subtitle: 'Subtitle 2',
//         smallText: 'Small descriptive text for slide 2.',
//         imageXs: 'https://example.com/image-xs-2.jpg',
//         imageMd: 'https://example.com/image-md-2.jpg'
//     }
// ];
export default function CategorySwiper({data, swiperRef}  : {data : Card[] | null, swiperRef:  LegacyRef<SwiperRef> | undefined}) {

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
                slidesPerView: 2.2
            },
            1200: {
                slidesPerView: 3.1
            },
            1536: {
                slidesPerView: 3.1
            }
        }}>
            {data && data?.map((card) => (
                <SwiperSlide key={card._key}>
                    <CategoryCard card={card}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
