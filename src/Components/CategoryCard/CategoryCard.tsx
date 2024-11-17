"use client"
import {Box, Typography} from '@mui/material'
import React from 'react'
import {IoStar} from "react-icons/io5";

const ProductCard = () => {
    return (
        <Box
            sx={{
            width: {
                xs: '100%'
            }
        }}>
            <Box
                sx={{
                width: {
                    xs: '100%'
                }
            }}>
                <img
                    className='img'
                    loading="lazy"
                    src="https://cdn.shopify.com/s/files/1/0156/6146/files/GFXLIFTINGESSENTIALSGOTHICBRUSHEDOVERSIZEDJOGGERGSBlackB2B3I-BB2J9878_384x.jpg?v=1730373854"
                    alt=""/>
            </Box>
            <Box
                className='flex absolute center items-center gap1'
                sx={{
                py: .5
            }}>
                <Typography className="fs075">4.2</Typography>
            </Box>
         
        </Box>
    )
}

export default ProductCard