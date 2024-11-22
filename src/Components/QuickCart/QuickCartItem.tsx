"use client"
import { ListItem, Box, Typography } from '@mui/material'
import React from 'react'
import {FaRegHeart} from "react-icons/fa6";
import {GoTrash} from "react-icons/go";
import Btn from '../Btn/Btn'

const QuickCartItem = () => {
  return (
    <ListItem
    sx={{
    px: {
        md: 2
    },
    alignItems: 'flex-start',
    borderBottom: '1px solid #ebebeb',
    pb: 2,
    pt: 2,
    mb: {
        xs: 3,
        md: 4
    }
}}
    className='flex gap1 start'
    disablePadding>
    <Box
        sx={{
        width: '120px'
    }}>
        <img
            src="https://cdn.shopify.com/s/files/1/0156/6146/files/RestDayEssentialsCargoJoggerGSPennyBrownA6A2G-NBZM-1253_256x.jpg?v=1702281440"
            alt=""
            className="img"/>
    </Box>
    <Box
        className=''
        sx={{
        px: 1
    }}>
        <Box>
            <Typography
                className='fs075 fw500 dark-bg wmax'
                sx={{
                mb: .5,
                px: 1
            }}>
                20% off
            </Typography>
        </Box>
        <Typography
            className='fw500  '
            sx={{
            fontSize: {
                xs: '0.85rem'
            }
        }}>
            Rest Day Essentials Cargo Joggers
        </Typography>
        <Typography
            sx={{
            pt: .25,
            fontSize: {
                xs: '.8rem'
            }
        }}
            className='fw500 gray'>
            Shoes
        </Typography>
        <Typography
            sx={{
            py: .25,
            fontSize: {
                xs: '.80rem'
            }
        }}
            className='fw500 gray'>
            Penny Brown | XS
        </Typography>
        <Typography
            sx={{
            fontSize: {
                xs: '.90rem'
            }
        }}
            className='fw600 black'>
            $50.00
        </Typography>
        <Box className="flex row gap">

            <Btn
                sx={{
              
                minWidth: '40px !Important',
                px: 0
            }}>
                <FaRegHeart fontSize='1.5em'/>
            </Btn>
            <Btn
                sx={{
              
                minWidth: '40px !Important',
                px: 0
            }}>
                <GoTrash color="red" fontSize='1.5em'/>
            </Btn>
        </Box>
    </Box>
</ListItem>
  )
}

export default QuickCartItem