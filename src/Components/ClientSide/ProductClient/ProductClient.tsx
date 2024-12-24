"use client"
import { ProductData } from '@/Utils/Types'
import BreadCrumb from '@/Components/BreadCrumb/BreadCrumb'
import Btn from '@/Components/Btn/Btn'
import ColorSelector from '@/Components/ColorSelect/ColorSelect'
import SizeFilter from '@/Components/FilterOptions/FilterForms/SizeFilter'
import ProductImageSwiper from '@/Components/ProductImageSwiper/ProductImageSwiper'
import SwiperButton from '@/Components/ProductSection/ProductSwiper/SwiperButton'
import {Accordion, AccordionSummary, Box, Divider, Typography} from '@mui/material'
import React, { useRef, useState } from 'react'
import { FaAngleDoubleDown } from 'react-icons/fa'
import { SwiperRef } from 'swiper/react'
import QtySelector from './QtySelector'
import {CiHeart} from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import useCart from '@/Hooks/useCart'
import { useCartContext, useQuickCartContext } from '@/Utils/Context/Contexts'


export type ProductOption = {
    [key: string]: string | null; // e.g., { color: "red", size: "M" }
  };


const ProductClient = ({product} : {product:ProductData}) => {
    
    const swiperRef :  React.LegacyRef<SwiperRef> | undefined  = useRef(null);
    const {addToCart, isLoading } = useCart();
    const { cart } = useCartContext();
    console.log('cart: ', cart);
    
    const [quantity, setQuantity] = useState<number>(1);
    
    const [selectedOptions, setSelectedOptions] = useState<ProductOption>({});


    const handleOptionChange = (optionName: string, value: string) => {
      setSelectedOptions((prevOptions) => ({
        ...prevOptions,
        [optionName]: value,
      }));
    };

    const { setIsCartOpen} = useQuickCartContext();
    
    const handlePrev = () => swiperRef?.current && swiperRef
        .current
        .swiper
        .slidePrev();
    const handleNext = () =>swiperRef?.current && swiperRef
        .current
        .swiper
        .slideNext();


    const cartProduct = {
        id : product.id,
        title : product.title,
        quantity,
        options: selectedOptions,
        image: product.images[0],
        price: product.price,
    }
        const handleAddToCart = () => {
            addToCart(cartProduct, selectedOptions)
            setIsCartOpen(true)
        }
   
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
                xs: 0,
                md:2,
                lg:1
            },
            mb: {
                xs: 8
            }
        }}>
         

            <Box
                className='flex row wrap relative'
                sx={{
              
                width: {
                    xs: '100%',
                    md: '58%'
                }
            }}>

                
                <ProductImageSwiper Slides={product.images} swiperRef={swiperRef}/>
                <Box
                    className='flex gap1 absolute'
                    sx={{
                        right:'50%',
                        top:'100%',
                        transform:'translateX(50%)',
                    flex: {
                        xs: 1
                    },
                    justifyContent: 'flex-end'
                }}>
                    <SwiperButton direction="left" onClick={handlePrev}/>
                    <SwiperButton direction="right" onClick={handleNext}/>
                </Box>
                <Box
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}
                    className=' row'>
                        
                    <Box
                        sx={{
                        mt:1,
                            width: {
                            xs: '80px',
                            lg: '100px'
                        }
                    }}>
                        <img
                            src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,b_rgb:f5f5f5,w_829/cms/7gtwyhGk96ty1kRUnkyr4I/de1c48f6e59978365155b64e0fb62217/24Q4_Protect_Site_PDP_ProtectRunner_Men_1600x1600.png"
                            alt=""
                            className="img cover"/>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                pt:{xs:0,md:1},
                    pl: {
                    md: 6
                },
                width: {
                    xs: '100%',
                    md: '36%'
                }
            }}>
   <Box sx={{ 
                width:'100%',
                display:{xs:'none',md:'flex'},
                pt:{xs:2,md:2}}}>
                <BreadCrumb/>
            </Box>
                <Typography sx={{pt:{xs:0,md:2}}} className='fs3 dark fw700'>
                    {`Men's Runner Protect`}
                </Typography>
                <Typography sx={{pb:{xs:0.25,md:2}}} className='fs1  fw400'>
                    {`${product.category}`}
                </Typography>
                <Typography
                    sx={{
                    pb: 1
                }}
                    className='fs1 dark fw600'>
                    $200
                </Typography>
                <Divider></Divider>

                <Box sx={{
                    mt: 2
                }}>
                    <Typography
                                              className='fw500 gray2 fs075'
                        sx={{
                        py: .25
                    }}>
                        Select Size:

                    </Typography>
                    <SizeFilter
                    sizes={['small','medium','large']}
                    selectedOptions={selectedOptions}
                    onOptionChange={handleOptionChange}
                    />
                </Box>
                <Box sx={{
                    mt: 2
                }}>
                    <Typography
                        className='fw500 gray2 fs075'
                        sx={{
                        py: .25
                    }}>
                        Select Color:
                    </Typography>
                    <ColorSelector
                    selectedOptions={selectedOptions}
                    onOptionChange={handleOptionChange}
                    colors={['red', 'blue', 'green', 'yellow', 'white']}/>
                </Box>
                <Box >
                    
                </Box>
                <Box sx={{
                    mt: {xs:4,lg:6}
                }}>
                <QtySelector quantity={quantity} setQuantity={setQuantity} />
                <Box sx={{
                    mt: 2,
                }} className="flex items-center">

                    <Btn
                    maxWidth
                    disabled={isLoading}
                        onClick={handleAddToCart}
                        className='w100 white fs075'
                        v2
                        sx={{
                        background: 'black !Important',
                        py: 2,
                        gap:.75
                    }}
                        border>
{ isLoading ? 'Adding Item...' :
<>
<BsBag fontSize={'1.25em'} />
                      Add To Cart
</>
                      }
                    </Btn>
                        <Btn 
                        
                                        className="flex centered pointer"
                                        sx={{
                                            mx:1,
                                            border:'1px solid #00000026',
                                        background: "#ffffff6e",
                                        borderRadius: "50%",
                                        minWidth : '52px',
                                        minHeight:'52px',
                                        width:'52px',
                                        height: "52px",
                                        p: 0
                                    }}>
                                        <CiHeart fontSize="2.05em"/>
                                        </Btn>

                                    </Box>

                    <Btn
                    maxWidth
                        className='  fs075'
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

                <Box className='w100 flex col' sx={{mt:{xs:4,md:2}, borderTop:'1px solid #cccccc'}}>
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
                <Typography className='fs1' sx={{pb:1}}>
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