"use client";
import {Box, Typography} from '@mui/material';
import Link from 'next/link';
import React from 'react'
import SMicons from '../SMicons/SMicons';
import CountryPicker from '../CountryPicker/CountryPicker';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Footer = () => {
    return (
        <footer
            style={{
            marginTop: '4em',
            borderTop: '1px solid #d6d6d6'
        }}>
            <Box
            className='flex row auto wrap justify-between'
            sx={{
                maxWidth:'lg',
                px: 2,
                py: 4
            }}>
                <Box
                    sx={{
                        minWidth:{xs:'100%',sm:'220px',md:'300px'},
                    py: {
                        xs: 4,
                        sm: 0
                    }
                }}
                    className="flex col">
                    <Typography
                        sx={{
                        pb: 2
                    }}
                        className='fw500 fs2'>
                        Shop
                    </Typography>
                    <Box className='flex col gap3'>
                        <Link href='/' className='w100 fs08 decor-none dark'>Home</Link>
                    </Box>
                </Box>

                <Box
                    sx={{
                        minWidth:{xs:'100%',sm:'220px',md:'300px'},
                    py: {
                        xs: 4,
                        sm: 0
                    }
                }}
                    className="flex col">
                    <Typography
                        sx={{
                        pb: 2
                    }}
                        className='fw500 fs2'>
                        Links
                    </Typography>
                    <Box className='flex col gap3'>
                        <Link href='/' className='w100 fs08 decor-none dark'>Home</Link>
                        <Link href='/' className='w100 fs08 decor-none dark'>About</Link>
                        <Link href='/' className='w100 fs08  decor-none dark'>Terms & Conditions</Link>
                        <Link href='/' className='w100 fs08 decor-none dark'>Privacy Policy</Link>
                    </Box>
                </Box>

                <Box
                    sx={{
                        minWidth:{xs:'100%',sm:'220px',md:'300px'},
                    py: {
                        xs: 4,
                        sm: 0
                    }
                }}
                    className="flex col">
                    <Typography
                        sx={{
                        pb: 2
                    }}
                        className='fw500 fs2'>
                        Contacts
                    </Typography>
                    <Box className='flex col gap3'>
                        <Link href='/' className='w100 fs08 decor-none dark'>+961 123 456 789</Link>
                        <Link href='/' className='w100 fs08 decor-none dark'>About</Link>
                        <Link href='/' className='w100 fs08 decor-none dark'>Terms & Conditions</Link>
                        <Link href='/' className='w100 fs08 decor-none dark'>Privacy Policy</Link>
                        <SMicons/>
                    </Box>
                </Box>

                <Box sx={{display:{xs:'flex',md:'none'},mt:2}}  className=' row'>
                <LanguageSelector/>
                <CountryPicker/>
                </Box>
            </Box>

            <Box sx={{pb:2,mt:2,pt:2,borderTop:'1px solid #00000012',maxWidth:'lg',px:2}} className='auto flex wrap gap1 row space-between'>
                <Typography sx={{textAlign:'center'}} className='dark centered flex' >
                © 2024 | Vito-Medlej | All Rights Reserved. | We Do Gym.
                </Typography>
                <Box sx={{display:{xs:'none',md:'flex'}}}  className=' row'>
                <LanguageSelector/>
                <CountryPicker/>
                </Box>
            </Box>
        </footer>
    )
}

export default Footer