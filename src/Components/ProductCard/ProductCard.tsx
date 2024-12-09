"use client"
import {Box, SxProps, Theme, Typography} from '@mui/material'
import React from 'react'
import {IoStar} from "react-icons/io5";
import {CiHeart} from "react-icons/ci";
import {IoEyeOutline} from "react-icons/io5";

const ProductCard = ({sx} : {
    sx ?: SxProps < Theme > | undefined
}) => {
    return (
        <Box
            className='relative'
            sx={{
            width: {
                xs: '100%'
            },
            ...sx
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHtqgBtaZCc4zMQC6gzxEzFVTfv2K-h23D8NB2rzo1CPSWNMDNc6BnZQxypE4OKpLajY&usqp=CAU"
                    alt=""/>
            </Box>
            <Box
                sx={{
                top: '3%',
                left: '5%',
                zIndex: 12,
                width: '90%'
            }}
                className='absolute flex justify-between'>
                <Box
                    className='flex centered pointer '
                    sx={{
                    background: '#ffffff6e',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    p: 0
                }}>
                    <CiHeart fontSize='1.05em'/>
                </Box>
                <Box
                    className='flex centered pointer  '
                    sx={{
                    background: '#ffffff6e',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    p: 0
                }}>
                    <IoEyeOutline fontSize='1.05em'/>
                </Box>
            </Box>
            <Box
                className='flex center items-center gap1'
                sx={{
                py: .5
            }}>
                <IoStar/>
                <Typography className="fs075">4.2</Typography>
            </Box>
            <Box>
                <Typography className="fs1">Men Hoodie</Typography>
                <Typography className="fs075 gray">Category</Typography>
                <Typography
                    className="fs1 fw600"
                    sx={{
                    pt: .25
                }}>$40</Typography>

            </Box>
        </Box>
    )
}

export default ProductCard