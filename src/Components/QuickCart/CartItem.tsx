"use client"
import {ListItem, Box, Typography} from '@mui/material'
import React from 'react'
import {FaRegHeart} from "react-icons/fa6";
import {GoTrash} from "react-icons/go";
import Btn from '../Btn/Btn'
import useCart, {TCartItem} from '@/Hooks/useCart';
import QtySelector from '../ClientSide/ProductClient/QtySelector';

const CartItem = ({product, handleRemove} : {
    product: TCartItem,
    handleRemove: (id : string, options : Record < string, unknown > | null) => void
}) => {
    const {addToCart, isLoading } = useCart();
   
    const size = product?.options?.size 
    const color = product?.options?.color
    return (
        <ListItem
        sx={{
            px: { md: 2 },
            alignItems: 'flex-start',
            borderBottom: '1px solid #ebebeb',
            pb: 2,
            pt: 2,
            mb: { xs: 3, md: 4 },
            opacity: isLoading ? 0.5 : 1,
            pointerEvents: isLoading ? 'none' : 'auto'
        }}
        className='flex gap1 start'
        disablePadding
    >
            <Box sx={{
                width: '120px'
            }}>
                <img src={product.image} alt="" className="img"/>
            </Box>
            <Box className='' sx={{
                px: 1
            }}>
                <Box>
                    <Typography
                        className='fs075 fw500 dark-bg wmax'
                        sx={{
                        mb: .5,
                        px: 1
                    }}>
                        20% off
                    </Typography>
                </Box>
                <Typography
                    className='fw500  '
                    sx={{
                    fontSize: {
                        xs: '0.85rem'
                    }
                }}>
                    {product.title}
                </Typography>
                <Typography
                    sx={{
                    pt: .25,
                    fontSize: {
                        xs: '.8rem'
                    }
                }}
                    className='fw500 gray'>
                    {product.title}
                </Typography>
                <Typography
                    sx={{
                    py: .25,
                    fontSize: {
                        xs: '.80rem'
                    }
                }}
                    className='fw500 gray capital'>
                {color || '' } | {size || ''}                        
                </Typography>
                <Typography
                    sx={{
                    fontSize: {
                        xs: '.90rem'
                    }
                }}
                    className='fw600 black'>
                    $50.00
                </Typography>
                <Box className="flex row gap">

                    <Btn
                        sx={{
                        minWidth: '40px !Important',
                        px: 0
                    }}>
                        <FaRegHeart fontSize='1.5em'/>
                    </Btn>
                    <Btn
                        onClick={() => handleRemove(product.id, product.options)}
                        sx={{
                        minWidth: '40px !Important',
                        px: 0
                    }}>
                        <GoTrash color="red" fontSize='1.5em'/>
                    </Btn>
                    <QtySelector mini quantity={product.quantity} setQuantity={(newQty) => addToCart(product, product.options, Number(newQty || 1) )} />
                </Box>
            </Box>
        </ListItem>
    )
}

export default CartItem