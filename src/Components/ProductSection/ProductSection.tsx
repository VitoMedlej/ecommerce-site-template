"use client"
import {Box, Grid2, Typography} from '@mui/material'
import React, {useRef} from 'react'
import Btn from '../Btn/Btn'
import ProductSwiper from './ProductSwiper/ProductSwiper'
import SwiperButton from './ProductSwiper/SwiperButton'
import { SwiperRef } from 'swiper/react'

const ProductSection = () => {
    const swiperRef :  React.LegacyRef<SwiperRef> | undefined  = useRef(null);

    const handlePrev = () => swiperRef?.current !== null && swiperRef?.current
        .swiper
        .slidePrev();
    const handleNext = () => swiperRef?.current !== null && swiperRef
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
                py: 4,
                px: {xs:2,md:4}
            }}>
                <Grid2>
                    <Typography className='fw600 fs2'>{`Categories`}</Typography>
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
                    <ProductSwiper swiperRef={swiperRef}/>
                </Grid2>
            </Grid2>
                <Box  className='w100 auto flex centered'>
                    <Btn sx={{py:1}} small className='fs075 bg-dark fw400'>
                        View All
                    </Btn>
                </Box>
        </main>
    )
}

export default ProductSection