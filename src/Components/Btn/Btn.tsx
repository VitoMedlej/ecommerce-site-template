"use client"
import {Button} from '@mui/material'
import React from 'react'

const Btn = ({children, className, v2, sx} : any) => {
    return (
        <Button
            className={`${className || ''} ${v2
            ? 'white bg-clr'
            : 'black bg-white'}`}
            sx={{
            border: 'none',
            borderRadius: '0px',
            fontSize: {
                xs: '.85em'
            },
            fontWeight: 800,
            px: 5,
            py: 2,
            ...sx
        }}>{children}</Button>
    )
}

export default Btn