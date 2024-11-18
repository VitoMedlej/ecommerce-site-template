"use client"
import {Box, Grid2, Typography} from '@mui/material'
import React from 'react'

const PerksSection = () => {
    return (
        <Box 
        className='auto'
        sx={{
            maxWidth: 'xl',
            px: 2, py:2
        }}>
            <Typography className='fs3 fw700' sx={{
                pb: 2
            }}>Titlt</Typography>
            <Box className='flex wrap row justify-between'>
                <Box
                    sx={{
                    maxWidth: '450px', py:{xs:2,sm:2,md:0},
                    width: {
                        xs: '100%',
                        sm: '49%',
                        md: '33%'
                    }
                }}>
                    <Typography
                        className='fs2 fw600'
                        sx={{
                        pb: 1
                    }}>
                        My Titlte
                    </Typography>
                    <Typography className='fs1 gray'>
                        Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel
                        effortless. Slip in, lace up, or slide them on and enjoy the comfy support.
                    </Typography>
                </Box>
                <Box
                    sx={{
                    maxWidth: '450px', py:{xs:2,sm:2,md:0},
                    width: {
                        xs: '100%',
                        sm: '49%',
                        md: '33%'
                    }
                }}>
                    <Typography
                        className='fs2 fw600'
                        sx={{
                        pb: 1
                    }}>
                        My Titlte
                    </Typography>
                    <Typography className='fs1 gray'>
                        Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel
                        effortless. Slip in, lace up, or slide them on and enjoy the comfy support.
                    </Typography>
                </Box>
                <Box
                    sx={{
                    maxWidth: '450px', py:{xs:2,sm:2,md:0},
                    width: {
                        xs: '100%',
                        sm: '49%',
                        md: '33%'
                    }
                }}>
                    <Typography
                        className='fs2 fw600'
                        sx={{
                        pb: 1
                    }}>
                        Wear-All-Day Comfort
                    </Typography>
                    <Typography className='fs1 gray '>
                        Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel
                        effortless. Slip in, lace up, or slide them on and enjoy the comfy support.
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default PerksSection