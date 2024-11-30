"use client"
import {Grid2, Typography} from '@mui/material'
import React, {useRef} from 'react'
import CategorySwiper from './CategorySwiper/CategorySwiper'
import SwiperButton from '../ProductSection/ProductSwiper/SwiperButton'
import { SwiperRef } from 'swiper/react'

const ProductSection = () => {
    const swiperRef :  React.LegacyRef<SwiperRef> | undefined  = useRef(null);


    const handlePrev = () =>swiperRef?.current && swiperRef
        .current
        .swiper
        .slidePrev();
    const handleNext = () => swiperRef?.current && swiperRef
        .current
        .swiper
        .slideNext();
    return (
        <main>
            <Grid2
                maxWidth={'xl'}
                container
                className='center auto '
                sx={{
                py: 8,
                px: {xs:2,md:4}
            }}>
                <Grid2>
                    <Typography className='fw600 fs2'>{`JOGGERS & PULLOVERS`}</Typography>
                </Grid2>
               
                <Grid2
                    className='flex gap1'
                    sx={{
                    flex: {xs:1},
                    justifyContent: 'flex-end'
                }}>
                    <SwiperButton direction="left" onClick={handlePrev}/>
                    <SwiperButton direction="right" onClick={handleNext}/>
                </Grid2>
                <Grid2 sx={{
                    width: '100%',pt:2
                }}>
                    <CategorySwiper swiperRef={swiperRef}/>
                </Grid2>
            </Grid2>
        </main>
    )
}

export default ProductSection