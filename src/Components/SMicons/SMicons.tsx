"use client"
import {Box, SxProps, Theme} from '@mui/material';
import React from 'react'

const sm = [
    {
        Icon: 'https://www.svgrepo.com/show/452229/instagram-1.svg',
        href: `${process.env.NEXT_PUBLIC_INSTA}`
    }, {
        Icon: 'https://www.svgrepo.com/show/349563/whatsapp.svg',
        href: `https://wa.me/+${process.env.NEXT_PUBLIC_WA}`
    }, {
        Icon: 'https://www.svgrepo.com/show/475647/facebook-color.svg',
        href: `${process.env.NEXT_PUBLIC_FB}`
    }
]
const SMicons = ({sx} : {
    sx?: SxProps<Theme> | undefined
}) => {
    return (
        <Box
            className='row flex'
            sx={{
            zIndex: 1,
            ...sx
        }}>

            {sm.map((item, idx) => {
                return <Box
                    key={idx}
                    className='relative   flex center items-center justify-center space-between'
                    sx={{
                    borderRadius: '50%',
                    width: '40px',
                    mx: .35,
                    mt: 1,
                    height: '40px'
                }}>
                    <a
                        style={{
                        width: '30px',
                        height: '30px'
                    }}
                        className='img absolute'
                        href={`${item.href}`}
                        target='_blank'
                        rel={'noneferrer'}>

                        <img src={item.Icon} alt="" className="img contain "/>
                    </a>
                </Box>
            })}
        </Box>
    )
}

export default SMicons