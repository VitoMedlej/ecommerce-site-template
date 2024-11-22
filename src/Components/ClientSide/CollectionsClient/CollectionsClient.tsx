"use client"
import {Box, Divider, Typography} from '@mui/material';
import React from 'react'
import Btn from '../../Btn/Btn';
import {CiFilter} from "react-icons/ci";
import ProductCard from '../../ProductCard/ProductCard';
import {IoGridOutline} from "react-icons/io5";
import FilterOptions from '../../FilterOptions/FilterOptions';

const CollectionsClient = () => {
    const isSmallScreen = window && window.innerWidth <= 900;

    return (
        <main>

            <Box
                className='auto flex items-center gap3'
                sx={{
                pt: 6,
                px: {
                    xs: 2,
                    md: 6
                },
                display: {
                    xs: 'flex'
                },
                maxWidth: 'xl'
            }}>
                <Typography className='fs3 fw600'>
                    Joggers & Pullovers
                </Typography>
                <Typography className='fs075 fw400'>
                    7 items found
                </Typography>
            </Box>
            <Box
                sx={{
                mt: 6,
                px: {
                    xs: 1,
                    md: 2
                }
            }}
                className="flex row wrap">

                <Box
                    sx={{
                    width: {
                        xs: '100%',
                        md: '30%',
                        lg: '25%'
                    }
                }}>

                    {isSmallScreen && <Box sx={{
                        mb: 2
                    }}>
                        <Btn border>
                            <CiFilter/>
                            Filter & Sort
                        </Btn>
                        <Btn
                            border
                            sx={{
                            px: 0,
                            mx: 1
                        }}>
                            <IoGridOutline fontSize={'1.7em'}/>
                        </Btn>
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
                        md: '70%',
                        lg: '75%'
                    }
                }}>

                    {[1, 2, 3, 4].map(item => {
                        return <ProductCard
                            sx={{
                            width: {
                                xs: '49%',
                                md: '32%'
                            },
                            my: 2
                        }}
                            key={item}></ProductCard>
                    })}

                </Box>
            </Box>
        </main>
    )
}

export default CollectionsClient