"use client"
import {Button} from '@mui/material'
import React from 'react'

const Btn = ({children, className, v2, sx, small,onClick} : any) => {
    return (
        <Button
        onClick={onClick}
            className={`${className || ''} ${v2
            ? 'white bg-clr'
            : 'black bg-white'}`}
            sx={{
            border: 'none',
            borderRadius: '0px',
            fontSize: {
                xs: small ? '.85em' : '.65em'
            },
            fontWeight: small ? 800 : 600,
            px: 5,
            py: small ? 5 : 1,
            ...sx
        }}>{children}</Button>
    )
}

export default Btn