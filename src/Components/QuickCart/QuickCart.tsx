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

import {useCartContext} from "@/app/Utils/Context/Contexts";
import QuickCartItem from "./QuickCartItem";

export default function QuickCart() {
    const isMobile = useMediaQuery("(max-width:600px)");
    const {isCartOpen, setIsCartOpen} = useCartContext();

    const toggleDrawer = (newOpen : boolean) => () => {
        setIsCartOpen(newOpen);
    };

    const DrawerList = (
        <Box
            sx={{
            width: isMobile
                ? "100%"
                : {md:"40vw",lg:'30vw'},
            height: isMobile
                ? "80vh"
                : "80vh"
        }}
            role="presentation"
            onClick={toggleDrawer(false)}>
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

            <List>
                {["Inbox", "Starred", "Send email", "Drafts"].map((text) => (
                    <QuickCartItem key={text}/>
                ))}
            </List>

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
