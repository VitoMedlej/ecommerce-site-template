"use client"
import {ProductData} from '@/Utils/Types'
import BreadCrumb from '@/Components/BreadCrumb/BreadCrumb'
import Btn from '@/Components/Btn/Btn'
import ColorSelector from '@/Components/ColorSelect/ColorSelect'
import SizeFilter from '@/Components/FilterOptions/FilterForms/SizeFilter'
import ProductImageSwiper from '@/Components/ProductImageSwiper/ProductImageSwiper'
import SwiperButton from '@/Components/ProductSection/ProductSwiper/SwiperButton'
import {Accordion, AccordionSummary, Box, Divider, Typography} from '@mui/material'
import React, {useRef} from 'react'
import {FaAngleDoubleDown} from 'react-icons/fa'
import {SwiperRef} from 'swiper/react'
import QtySelector from './QtySelector'
import {CiHeart} from "react-icons/ci";
import {BsBag} from "react-icons/bs";
import useCart from '@/Hooks/useCart'
// import {useQuickCartContext} from '@/Utils/Context/Contexts'
import RecommendedProducts from '@/Components/RecommendedProducts/RecommendedProducts'
import useProductActions from '@/Hooks/useProductActions'
import { validateImageUrl } from '@/Utils/ImageValidator'

export type ProductOption = {
    [key : string]: string | null;
};

const ProductClient = ({ product }: { product: ProductData }) => {
    const {
      quantity,
      setQuantity,
      selectedOptions,

      variants,
      isEmptyOptions,
      handleOptionChange,
      handleAddToCart,
    } = useProductActions(product);
  
    const swiperRef = useRef<SwiperRef | null>(null);
    // const { setIsCartOpen } = useQuickCartContext();
  
    const handlePrev = () => swiperRef.current?.swiper.slidePrev();
    const handleNext = () => swiperRef.current?.swiper.slideNext();
    const {isLoading} = useCart();
    return (
        <Box
        className='flex wrap row auto'
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

            <Box sx={{height:{xs:'100%',md:'600px'},width:'100%'}}>

            <ProductImageSwiper Slides={product.images} swiperRef={swiperRef}/>
            </Box>
            <Box
                className=' gap1 absolute'
                sx={{
                    display:{xs:'none',md:'flex'},
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
           {product.images && product.images?.length > 1 && <Box
                sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                }
            }}
                className=' row'>
                    
             {product.images.map(img=>{
                  return <Box 
                  key={img}
                    sx={{
                    mt:1,
                        width: {
                        xs: '80px',
                        lg: '100px'
                    }
                }}>
                    <img
                        src={validateImageUrl(`${img}`)}
                        alt=""
                        className="img cover"/>
                </Box>
            
        })    
            }
            </Box>}
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
                {`${product.title}`}
            </Typography>
            <Typography sx={{pb:{xs:0.25,md:2}}} className='fs1  fw400'>
                {`${product.category}`}
            </Typography>
            <Typography
                sx={{
                pb: 1
            }}
                className='fs1 dark fw600'>
                ${product.price}
            </Typography>
            <Divider></Divider>


            { variants && variants?.length > 0 && (
  <Box sx={{ border: isEmptyOptions ? '1px solid red' : '1px solid transparent', p: isEmptyOptions ? 1 : 0 }}>
    {isEmptyOptions && (
      <Typography sx={{ color: 'red', fontSize: '.8em' }}>Please select an option.</Typography>
    )}
    {variants.map(variant => {
      const options = variant.value?.split(",").map(s => s.trim()) || [];
      if (!options.length) return null;
      return (
        <Box key={variant.key} sx={{ mt: 2 }}>
          <Typography className='fw500 gray2 fs075' sx={{ py: .25 }}>
            {variant.key}
          </Typography>
          {variant.key.toLowerCase().includes("color") ? (
            <ColorSelector selectedOptions={selectedOptions} onOptionChange={handleOptionChange} colors={options} />
          ) : (
            <SizeFilter selectedOptions={selectedOptions} onOptionChange={handleOptionChange} sizes={options} name={variant.key} />
          )}
        </Box>
      );
    })}
  </Box>
)}


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
                    onClick={()=>handleAddToCart()}
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
                     disabled={isLoading}
                     onClick={()=>handleAddToCart(true)}
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
               {`${product.description}`}
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

                {
                    `${product.tags}`
                }
                
    </Typography>
    {/* <ul>
        <li>Remove laces and insoles.

</li>
<li>

Place shoes in a delicates bag (pro tip: a pillowcase works too).
</li>
<li>

Choose a gentle cycle with cold water & mild detergent.
</li>

    </ul> */}
  </Accordion>

 
</Box>
        </Box>



        <RecommendedProducts/>
    </Box>

    )
}

export default ProductClient