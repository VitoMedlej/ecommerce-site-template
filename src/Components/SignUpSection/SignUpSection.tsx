"use client"
import {Box, Typography} from '@mui/material'
import React from 'react'
import NewsletterInput from './NewsletterInput'

const SignUpSection = () => {
    return (
        <Box
            sx={{
            my: 4,
            px: 1,
            background: '#f5f5f5'
        }}>
            <Box
                className='flex center col text-center auto'
                sx={{
                maxWidth: "518px"
            }}>

                <Typography
                    className='fs3 fw700'
                    sx={{
                    py: 4
                }}>
                    Want First Dibs?
                </Typography>
                <Typography
                    sx={{
                    py: .5
                }}
                    className='fs075'>
                    Join our email list and be the first to know about new limited edition products,
                    material innovations, and lots of other fun updates.
                </Typography>
                <Box>

                    <NewsletterInput/>
                </Box>
            </Box>

        </Box>
    )
}

export default SignUpSection