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
import { useCartContext, useDialogContext, useSidebarContext } from '@/app/Utils/Context/Contexts'
import { FaRegUser } from "react-icons/fa";
import { useRouter } from 'next/navigation'
import { useAuth0 } from '@auth0/auth0-react'
import Announcements from './Announcements/Announcements'



const Navbar = ({ SanityAnnouncements }: { SanityAnnouncements: { message: string }[] }) => {
    console.log('SanityAnnouncements: ', SanityAnnouncements);
    const isSmallScreen = window && window.innerWidth <= 900;
    const { sidebarOpen, setSidebarOpen } = useSidebarContext();
    const {isCartOpen, setIsCartOpen} = useCartContext();
    const router = useRouter();
    const { loginWithRedirect, logout  } = useAuth0();
    const { isAuthenticated, isLoading } = useAuth0();
    const {  setIsDialogOpen } = useDialogContext();


    const handleAccountRedirection = () => {
    
        if (isAuthenticated) {
            router.push('/dashboard');
        } else {
            loginWithRedirect();
        }
    };
    return (
        <Box component='nav' >
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
                    disabled={isLoading} 
                    aria-label={isAuthenticated ? "Go to Dashboard" : "Login"}
                    onClick={() => handleAccountRedirection()}
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
                boxShadow: '1px 1px 3px #8080801f',
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
                onClick={()=>router.push('/')}
                    className='cursor'
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
                onClick={()=>router.push('/')}
                className='cursor'

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
                        onClick={()=> setIsDialogOpen(true)}
                        sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        ml:1,
                        minWidth: '40px !Important',
                        px: 0
                    }}>
                        <FaRegHeart fontSize='2.05em'/>
                    </Btn>
                    <Btn
                    disabled={isLoading} 
                    aria-label={isAuthenticated ? "Go to Dashboard" : "Login"}
                    onClick={() => handleAccountRedirection()}
                        sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        mx:1,
                        minWidth: '40px !Important',
                        px: 0
                    }}>
                        <FaRegUser fontSize='2.05em'/>
                    </Btn>

                    <Btn
                    
                    onClick={()=>setIsCartOpen(true)}

                        sx={{
                        minWidth: '40px !Important',
                        px: 0,
                        
                    }}>
                        <FiShoppingBag fontSize='1.95em'/>
                    </Btn>

                    <Btn
                    onClick={()=>setSidebarOpen(true)}
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

            <Announcements SanityAnnouncements={SanityAnnouncements}/>
        </Box>
    )
}

export default Navbar
