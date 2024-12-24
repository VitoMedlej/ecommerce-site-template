"use client";

import React from "react";
import { Box, Typography, TextField, Divider, Button } from "@mui/material";
import Btn from "../Btn/Btn";

const CartSummary = () => {
  // Hardcoded values for demo purposes
  const subTotal = 120.0;
  const shipping = 15.0;
  const total = subTotal + shipping;

  return (
    <Box
      sx={{
        margin: "auto",
        padding: "16px",
        borderTop: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
      }}
    >
      <Typography className='fs2 fw700' sx={{pb:2}}>
        Cart Summary
      </Typography>
      <Box component='form' className='flex row' action="">

      <TextField
        label="Discount Code"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ marginBottom: "16px" }}
        />
        <Btn sx={{py:0,width:'55px', height:'40px',mx:1}} className='fw700' type='submit'>
            Apply 
        </Btn>
        </Box>

      <Divider sx={{ marginBottom: "16px" }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <Typography >Subtotal:</Typography>
        <Typography>${subTotal.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <Typography>Shipping:</Typography>
        <Typography>${shipping.toFixed(2)}</Typography>
      </Box>

      <Divider sx={{ marginBottom: "16px" }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <Typography className='fw700'>Total:</Typography>
        <Typography className='fw700'>${total.toFixed(2)}</Typography>
      </Box>

      <Btn
       v2
      
        maxWidth
        sx={{ padding: "10px", fontSize: "16px" }}
      >
       <Typography>
       Proceed to Checkout
       </Typography>
      </Btn>
    </Box>
  );
};

export default CartSummary;
