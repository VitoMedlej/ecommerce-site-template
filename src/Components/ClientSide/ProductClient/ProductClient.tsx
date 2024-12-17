"use client"
import { ProductData } from '@/app/Utils/Types'
import BreadCrumb from '@/Components/BreadCrumb/BreadCrumb'
import Btn from '@/Components/Btn/Btn'
import ColorSelector from '@/Components/ColorSelect/ColorSelect'
import SizeFilter from '@/Components/FilterOptions/FilterForms/SizeFilter'
import ProductImageSwiper from '@/Components/ProductImageSwiper/ProductImageSwiper'
import SwiperButton from '@/Components/ProductSection/ProductSwiper/SwiperButton'
import {Accordion, AccordionSummary, Box, Divider, Typography} from '@mui/material'
import React, { useRef } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { SwiperRef } from 'swiper/react'



const ProductClient = ({product} : {product:ProductData}) => {
    console.log('product: ', product);
    const swiperRef :  React.LegacyRef<SwiperRef> | undefined  = useRef(null);


    const handlePrev = () => swiperRef?.current && swiperRef
        .current
        .swiper
        .slidePrev();
    const handleNext = () =>swiperRef?.current && swiperRef
        .current
        .swiper
        .slideNext();
    return (
        <Box
            className='flex wrap row'
            sx={{
            px: {
                xs: 1,
                sm: 2
            },
            maxWidth: 'xl',
            mt: {
                xs: 4,
                md:6,
                lg:8
            },
            mb: {
                xs: 8
            }
        }}>
            <Box
                className='flex row '
                sx={{
                maxHeight: {
                    xs: '500px'
                },
                width: {
                    xs: '100%',
                    md: '58%'
                }
            }}>
                <Box
                    sx={{
                    mx: 1,
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}
                    className=' row'>
                    <Box
                        sx={{
                        width: {
                            md: '80px',
                            lg: '100px'
                        }
                    }}>
                        <img
                            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,b_rgb:f5f5f5,w_829/cms/7gtwyhGk96ty1kRUnkyr4I/de1c48f6e59978365155b64e0fb62217/24Q4_Protect_Site_PDP_ProtectRunner_Men_1600x1600.png"
                            alt=""
                            className="img "/>
                    </Box>
                </Box>
                <ProductImageSwiper swiperRef={swiperRef}/>
                <Box
                    className='flex gap1'
                    sx={{
                    flex: {
                        xs: 1
                    },
                    justifyContent: 'flex-end'
                }}>
                    <SwiperButton direction="left" onClick={handlePrev}/>
                    <SwiperButton direction="right" onClick={handleNext}/>
                </Box>
            </Box>

            <Box
                sx={{
                pl: {
                    md: 6
                },
                width: {
                    xs: '100%',
                    md: '36%'
                }
            }}>
                <BreadCrumb/>
                <Typography className='fs3 dark fw700'>
                    {`Men's Runner Protect`}
                </Typography>
                <Typography
                    sx={{
                    pb: 1
                }}
                    className='fs1 dark fw400'>
                    $200
                </Typography>
                <Divider></Divider>
                <Box sx={{
                    mt: 2
                }}>
                    <Typography
                        className='fw600'
                        sx={{
                        py: 1
                    }}>
                        Select Size:

                    </Typography>
                    <SizeFilter/>
                </Box>
                <Box sx={{
                    mt: 2
                }}>
                    <Typography
                        className='fw600'
                        sx={{
                        py: 1
                    }}>
                        Select Color:
                    </Typography>
                    <ColorSelector colors={['red', 'blue', 'green', 'yellow', 'white']}/>
                </Box>
                <Box sx={{
                    mt: 4
                }}>

                    <Btn
                        className='w100 white fs075'
                        v2
                        sx={{
                        mt: 2,
                        background: 'black !Important',
                        py: 2
                    }}
                        border>
                        Add To Cart
                    </Btn>
                    <Btn
                        className='w100  fs075'
                        sx={{
                        mt: 1,
                        py: 1
                    }}
                        border>
                        Quick Buy
                    </Btn>
                    <Box
                        className='dark-bg2 '
                        sx={{
                        p: 2,
                        mt: 2
                    }}>
                        <Typography className='fs075 '>
                            <b>
                                Standard Delivery (4-7 Working Days)
                            </b>
                            <br/>

                            Free Standard Delivery for orders over $75
                        </Typography>
                    </Box>
                </Box>

                <Box className='w100 flex col' sx={{mt:2, borderTop:'1px solid #cccccc'}}>
      <Accordion 
      defaultExpanded={true}
      disableGutters sx={{  px:0, boxShadow: 'none', border: 'none' }}>
        <AccordionSummary
         sx={{ p: 0 }}
          expandIcon={<FaAngleDoubleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='fw600'>Description</Typography>
        </AccordionSummary>
                <Typography sx={{pb:1}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias impedit assumenda aliquid ut consectetur veritatis aspernatur repudiandae, voluptates voluptatibus, alias enim deleniti nesciunt optio recusandae!
                </Typography>

      </Accordion>


      <Accordion disableGutters sx={{   px:0, boxShadow: 'none', border: 'none' }}>
        <AccordionSummary
         sx={{ p: 0 }}
          expandIcon={<FaAngleDoubleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='fw600'>Specifications</Typography>
        </AccordionSummary>
        <Typography>
        To preserve the Protect’s fluorine-free water-repellent treatment, we recommend spot cleaning with warm water and gentle soap whenever possible. If they need a deep clean, follow the below steps to machine wash, but only on a limited basis.

                    
        </Typography>
        <ul>
            <li>Remove laces and insoles.

</li>
<li>

Place shoes in a delicates bag (pro tip: a pillowcase works too).
</li>
<li>

Choose a gentle cycle with cold water & mild detergent.
</li>

        </ul>
      </Accordion>
   
     
    </Box>
            </Box>
        </Box>
    )
}

export default ProductClient