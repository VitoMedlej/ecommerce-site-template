"use client"
import {Box, Toolbar, Typography} from '@mui/material'
import Link from 'next/link'
import React from 'react'
import Btn from '../Btn/Btn'
import {FiShoppingBag} from "react-icons/fi";
import CountryPicker from '../CountryPicker/CountryPicker'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import {FaRegHeart} from "react-icons/fa6";
import SearchModal from '../SearchModal/SearchModal'
import {RiMenu3Fill} from "react-icons/ri";

const Navbar = () => {
    const isSmallScreen = window.innerWidth <= 900;
    return (
        <Box component='nav' sx={{}}>
            {!isSmallScreen && <Toolbar
                className='auto end  dark-bg '
                sx={{
                display: {
                    xs: 'none',
                    md: 'flex'
                },
                px: 1,
                py: 0,
                minHeight: '32px !Important',
                maxWidth: 'xl',
                gap: 1
            }}>
                <Btn
                    className='bg-transparent dark'
                    sx={{
                    borderRight: '1px solid #bbbbbb',
                    px: 1
                }}>
                    Account
                </Btn>
                <Btn
                    className='bg-transparent dark'
                    sx={{
                    borderRight: '1px solid #bbbbbb',
                    pl: 0,
                    pr: 1
                }}>
                    Email Sign Up
                </Btn>
                <Box
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}
                    className=' row'>
                    <LanguageSelector/>
                    <CountryPicker/>
                </Box>
            </Toolbar>}
            <Toolbar
                className='auto flex'
                sx={{
                px: 1,
                justifyContent: {
                    xs: 'space-between'
                },
                py: {
                    xs: 1.15,
                    md: 0
                },
                maxWidth: 'xl'
            }}>

                {!isSmallScreen && <Box
                    sx={{
                    width: '150px',
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }}>
                    <img
                        src="https://cdn.gymshark.com/images/branding/gs-icon-text.svg"
                        alt=""
                        className="img"/>
                </Box>}
                {isSmallScreen && <Box
                    sx={{
                    width: '150px',
                    display: {
                        xs: 'flex',
                        md: 'none'
                    }
                }}>
                    <img
                        src="https://cdn.gymshark.com/images/branding/gs-icon-text.svg"
                        alt=""
                        className="img"/>
                </Box>}
                {!isSmallScreen && <Box
                    className=' row gap3 center justify-center'
                    sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    },
                    flex: 1
                }}>
                    {[
                        {
                            title: 'Porudcts',
                            category: `fee`
                        }, {
                            title: 'Colls',
                            category: `fee`
                        }
                    ].map(e => {
                        return <Link key={e.title} href={`/${e.category}`} className='decor-none hover-link '>
                            <Typography className='dark fw600'>{e.title}</Typography>
                            <Box
                                sx={{
                                width: '0%',
                                height: '1.1px',
                                background: 'black'
                            }}></Box>
                        </Link>
                    })
}
                </Box>}
                <Box className='flex row'>
                    <SearchModal/>

                    <Btn
                        sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        minWidth: '40px !Important',
                        px: 0
                    }}>
                        <FaRegHeart fontSize='2.05em'/>
                    </Btn>

                    <Btn
                        sx={{
                        minWidth: '40px !Important',
                        px: 0
                    }}>
                        <FiShoppingBag fontSize='1.95em'/>
                    </Btn>

                    <Btn
                        sx={{
                        display: {
                            xs: 'flex',
                            md: 'none'
                        },
                        minWidth: '40px !Important',
                        px: 0
                    }}>
                        <RiMenu3Fill fontSize='1.95em'/>
                    </Btn>
                </Box>

            </Toolbar>
        </Box>
    )
}

export default Navbar