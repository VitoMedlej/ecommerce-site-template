'use client'

import { Box, Grid2, Typography } from '@mui/material'
import React, { useRef } from 'react'
import Btn from '../Btn/Btn'
import ProductSwiper from './ProductSwiper/ProductSwiper'
import SwiperButton from './ProductSwiper/SwiperButton'
import { SwiperRef } from 'swiper/react'
import { urlFor } from '@/app/Utils/functions/sanityClient'
import { HomeSectionData, ProductData } from '@/app/Utils/Types'

const ProductSection = ({ sectionDetails, isHomePage }: { sectionDetails: HomeSectionData, isHomePage: boolean }) => {
  
  const swiperRef = useRef<SwiperRef | null>(null)
  const handlePrev = () => swiperRef.current?.swiper.slidePrev()
  const handleNext = () => swiperRef.current?.swiper.slideNext()

  const renderSwiper = (
    <Grid2 sx={{ width: '100%', pt: 2 }}>
      <ProductSwiper  products={sectionDetails.data as ProductData[]} swiperRef={swiperRef} />
    </Grid2>
  )

  const renderTitle = (
    <Grid2>
      <Typography className='fw600 fs2'>{sectionDetails.title}</Typography>
    </Grid2>
  )

  const renderImage = sectionDetails.layout === 'with-image' && sectionDetails.bannerImage && (
    <Grid2 sx={{ mb: 2 }}>
      <img
        src={urlFor(sectionDetails.bannerImage?.asset).url()}
        alt={sectionDetails.title}
        style={{ width: '100%' }}
      />
    </Grid2>
  )

  const renderButtons = (
    <Box className='w100 auto flex centered'>
      <Btn sx={{ py: 1 }} border small className='fs075 border bg-dark fw400'>
        View All
      </Btn>
    </Box>
  )

  return (
    <main>
      <Grid2
        maxWidth="xl"
        container
        className="center auto"
        sx={{ py: 4, px: { xs: 2, md: 4 } }}
      >
        {renderTitle}

        {isHomePage && renderImage}

        <Grid2 className="flex gap1" sx={{ flex: { xs: 1 }, justifyContent: 'flex-end' }}>
          <SwiperButton direction="left" onClick={handlePrev} />
          <SwiperButton direction="right" onClick={handleNext} />
        </Grid2>

        {renderSwiper}
      </Grid2>

      {renderButtons}
    </main>
  )
}

export default ProductSection
