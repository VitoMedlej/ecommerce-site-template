"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import {IoCloseOutline} from "react-icons/io5";
import Btn from "../Btn/Btn";
import {Typography} from "@mui/material";

import {useCartContext, useQuickCartContext} from "@/Utils/Context/Contexts";
import QuickCartItem from "./CartItem";
import useCart from "@/Hooks/useCart";

export default function QuickCart() {
    const isMobile = useMediaQuery("(max-width:600px)");
    const {isCartOpen, setIsCartOpen} = useQuickCartContext();
    const { cart, setCart } = useCartContext();
    const toggleDrawer = (newOpen : boolean) => () => {
        setIsCartOpen(newOpen);
    };
    const {addToCart, isLoading, removeFromCart } = useCart();
   
    const handleRemove = (id : string, options: Record<string, any> | null ) => {
            removeFromCart(id, options);
    }
    const DrawerList = (
        <Box
            sx={{
            width: isMobile
                ? "100%"
                : {xs:'270px',sm:'350px', md:"40vw",lg:'30vw'},
            height: isMobile
                ? "80vh"
                : "80vh"
        }}
            role="presentation"
            >
            <Box
                sx={{
                px: 1,
                my: 1
            }}
                className="flex items-center justify-between">
                <Box>
                    <Typography className='fw600'>
                        Your Bag
                    </Typography>
                </Box>

                <Btn
                    onClick={() => setIsCartOpen(false)}
                    sx={{
                    px: 0
                }}>
                    <IoCloseOutline  fontSize='2.5em'/>
                </Btn>
            </Box>

            <Divider/>

      {cart && cart?.length > 0 ?      <List>
                {cart.map((product) => {
                    if (!product || !product.id) return;
                    return <QuickCartItem handleRemove={handleRemove} product={product} key={product.id}/>
                })}
            </List>
        
        :
        <Box sx={{mx:1,mt:2, py:5}} className='centered text-center '>
        <img src="https://www.gymshark.com/images/empty-bag.svg" className='small-icon img' loading="lazy" alt="Empty Bag Icon"  />
        <Typography className=' fs2 fw600' sx={{pt:1}} component='h3'>Your bag is empty!</Typography>
        <Btn  sx={{mt:2,mb:1}} className='' border  maxWidth>
                Shop Collections
        </Btn>
        <Btn border maxWidth>
                Back Home
        </Btn>
        </Box>
        }

        </Box>
    );

    return (
        <div>
            <Drawer
                anchor={isMobile
                ? "bottom"
                : "right"}
                open={isCartOpen}
                onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
        </div>
    );
}
