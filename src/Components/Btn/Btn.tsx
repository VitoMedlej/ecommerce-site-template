"use client"
import {Button, SxProps, Theme} from '@mui/material'
import React, { MouseEventHandler, ReactNode } from 'react'

type BtnProps = {
    children: ReactNode; // For JSX content or plain text
    className?: string; // Optional CSS class
    disabled?: boolean; // Button disabled state
    v2?: boolean; // Custom boolean flag
    sx?: SxProps<Theme> | undefined; // Style object
    small?: boolean; // Custom size flag
    onClick?: MouseEventHandler<HTMLButtonElement>; // Event handler for clicks
    border?: boolean; // Border toggle flag
  };
  
  const Btn = ({
    children,
    className,
    disabled,
    v2,
    sx,
    small,
    onClick,
    border,
  }: BtnProps) => {
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