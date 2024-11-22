"use client"
import {Button} from '@mui/material'
import React from 'react'

const Btn = ({
    children,
    className,
    disabled,
    v2,
    sx,
    small,
    onClick,
    border
} : any) => {
    return (
        <Button
            disabled={disabled
            ? disabled
            : undefined}
            onClick={onClick}
            className={`${className || ''} ${v2
            ? 'white bg-clr'
            : 'black bg-white'}`}
            sx={{
            borderRadius: '0px',
            fontSize: {
                xs: small
                    ? '.85em'
                    : '.65em'
            },
            fontWeight: small
                ? 800
                : 600,
            px: 5,
            border: border
                ? '1px solid'
                : 'initial',
            py: small
                ? 5
                : 1,
            ...sx
        }}>{children}</Button>
    )
}

export default Btn