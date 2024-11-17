"use client"
import {Grid2, Typography} from '@mui/material'
import React, {useRef} from 'react'
import Btn from '../Btn/Btn'
import ProductSwiper from './ProductSwiper/ProductSwiper'
import SwiperButton from './ProductSwiper/SwiperButton'

const ProductSection = () => {
    const swiperRef : any = useRef(null);

    const handlePrev = () => swiperRef
        .current
        .swiper
        .slidePrev();
    const handleNext = () => swiperRef
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
                px: 2
            }}>
                <Grid2>
                    <Typography className='fw600 fs3'>{`JOGGERS & PULLOVERS`}</Typography>
                </Grid2>
                <Grid2>
                    <Btn className='fs075 fw400'>
                        View All
                    </Btn>
                </Grid2>
                <Grid2
                    className='flex gap1'
                    sx={{
                    flex: {sm:1},
                    mb:{xs:2,sm:0},
                    justifyContent: 'flex-end'
                }}>
                    <SwiperButton direction="left" onClick={handlePrev}/>
                    <SwiperButton direction="right" onClick={handleNext}/>
                </Grid2>
                <Grid2 sx={{
                    width: '100%'
                }}>
                    <ProductSwiper swiperRef={swiperRef}/>
                </Grid2>
            </Grid2>
        </main>
    )
}

export default ProductSection