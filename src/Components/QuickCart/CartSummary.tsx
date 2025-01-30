"use client";

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import Btn from "../Btn/Btn";
import { useRouter } from "next/navigation";
import calculateTotal from "@/Utils/functions/calculateTotal";
import { useCartContext } from "@/Utils/Context/Contexts";
import DiscountCodeForm from "../checkoutComponents/DiscountCodeForm/DiscountCodeForm";

interface CartSummaryProps {
  isCheckoutPage?: boolean;
}

const CartSummary: React.FC<CartSummaryProps> = ({ isCheckoutPage = false }) => {
  const router = useRouter();
  const { cart } = useCartContext();
  const {totalPrice, deliveryCharge} = calculateTotal(cart || []);

  return (
    <Box
      sx={{
        margin: isCheckoutPage ? 0 : "auto",
        padding: isCheckoutPage ? "0" : "16px",
        borderTop:  isCheckoutPage ? '' : "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: isCheckoutPage ? "none" : "0 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white",
        width: isCheckoutPage ? "100%" : "auto",
      }}
    >
      <Typography className="fs2 fw700" sx={{ pb: 2 }}>
        Cart Summary
      </Typography>
      {!isCheckoutPage && 
      <DiscountCodeForm 
      total={0} 
      cartItems={[]}/>
      }

      <Divider sx={{ marginBottom: "16px" }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <Typography>Subtotal:</Typography>
        <Typography>${totalPrice.toFixed(2)}</Typography>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
        <Typography>Shipping:</Typography>
        <Typography>${deliveryCharge.toFixed(2)}</Typography>
      </Box>

      <Divider sx={{ marginBottom: "16px" }} />

      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
        <Typography className="fw700">Total:</Typography>
        <Typography className="fw700">${(totalPrice + deliveryCharge).toFixed(2)}</Typography>
      </Box>

      {!isCheckoutPage && (
        <Btn
          v2
          onClick={() => {
            
            router.push("/checkout")}}
          maxWidth
          sx={{ padding: "10px", fontSize: "16px" }}
        >
          Proceed to Checkout
        </Btn>
      )}
    </Box>
  );
};

export default CartSummary;
