"use client"
import {Box, Tooltip, Typography, useMediaQuery} from '@mui/material';
import React, { useState } from 'react'
import Btn from '../../Btn/Btn';
import {CiFilter} from "react-icons/ci";
import {IoGridOutline, IoListOutline} from "react-icons/io5";
import FilterOptions from '../../FilterOptions/FilterOptions';
import { useFilterModalContext, useQuickViewContext } from '@/Utils/Context/Contexts';
import FilterModal from '@/Components/Modals/FilterModal';
import { Section } from '@/Utils/Types';
import ProductCard from '@/Components/ProductCard/ProductCard';
import ProductQuickView from '@/Components/ProductCard/QuickView/ProductQuickView';

const CollectionsClient = ({data} : {data: Section  | null}) => {
    console.log('data: ', data);
    const [isSingleRow, setIsSingleRow] = useState<boolean>(true)
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const { setFilterModalOpen } = useFilterModalContext();
    const handleOpenFilter = () => {
        setFilterModalOpen(true);
      };

          const {product } = useQuickViewContext();
      
    return (
        <main>
         {!data || data?.products?.length == 0 ? <h1>no products</h1> : <>
            <Box
                className='auto col flex gap3'
                sx={{
                pt: {xs:3,md:3,lg:6},
                px: {
                    xs: 2,
                    md: 2,
                    lg:4
                },
                display: {
                    xs: 'flex'
                },
                maxWidth: 'xl'
            }}>
                <Typography className='fs3 fw600'>
                   {data?.title}
                </Typography>
                <Typography className='fs075 fw400'>
                    {data?.count ? `${data?.count} items found` : `Showing ${data?.products?.length} items`  } 
                </Typography>
            </Box>
            <Box
                sx={{
                mt: {xs:3,md:6},
                px: {
                    xs: 1,
                    md: 0,
                    lg:0,
                }
            }}
                className="flex row wrap">

                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        md: '27%',
                        lg: '25%'
                    }
                }}>

                    {isSmallScreen && <Box sx={{
                        mb: 2
                    }}>
                        <Btn onClick={handleOpenFilter} border>
                            <CiFilter/>
                            Filter & Sort
                        </Btn>
                        <Tooltip title={isSingleRow ? "Toggle Grid View" : "Toggle List View"} arrow>
  <span> 
    <Btn
      onClick={() => setIsSingleRow(!isSingleRow)}
      border
      sx={{
        fontSize: '.67em',
        px: 0,
        mx: .25
      }}
    >
      {!isSingleRow ? <IoListOutline fontSize={'1.7em'} /> : <IoGridOutline fontSize={'1.7em'} />}
    </Btn>
  </span>
</Tooltip>
                    </Box>
}

                    {!isSmallScreen && <Box
                        sx={{
                        px: 4,
                        display: {
                            xs: 'none',
                            md: 'flex'
                        }
                    }}
                        className='flex row wrap justify-between items-center '>
                        <Typography className='fs1 fw700'>
                            Filter & Sort
                        </Typography>
                        <Btn sx={{
                            px: 0
                        }}>
                            Clear All
                        </Btn>

                        <FilterOptions/>

                    </Box>
}
                </Box>
                <Box
                    className='flex row wrap justify-between'
                    sx={{
                    width: {
                        xs: '100%',
                        md: '73%',
                        lg: '75%'
                    }
                }}>

                    {data?.products?.map(product => {
                        return <ProductCard
                        imgHeight={{height:{xs:'auto'}}}
                        product={product}
                            sx={{
                            width: {
                                xs: isSingleRow ? '99%': '48%',
                                sm: isSingleRow ? '48%': '48%',
                                
                                md: '32%'
                            },
                            
                            my: 2
                        }}
                            key={product.id}></ProductCard>
                    })}

                </Box>
            </Box>

            <FilterModal/>
          {product && <ProductQuickView/>}
          </> } 

        </main>
    )
}

export default CollectionsClient
