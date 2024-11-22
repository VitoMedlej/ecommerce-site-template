"use client"
import Btn from '@/Components/Btn/Btn'
import { Box, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box className='auto text-center items-center col flex' sx={{px:2,maxWidth:'600px',py:16}}>
        <Typography className='fs4 fw700' sx={{py:1}}>Save to wishlist</Typography>
        <Typography className='fs1 fw400' >
        Ever wish you could save all your fave fits & accessories in one place to come back to later? Almost like a ✨ wishlist ✨.
        </Typography>
        <Box>
            <Btn border sx={{mt:2}}>
                Create an account
            </Btn>
            
        </Box>
    </Box>
  )
}

export default page