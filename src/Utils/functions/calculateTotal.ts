"use client";

import { TCartItem } from "@/Hooks/useCart";

function calculateTotal(cartItems: TCartItem[] | null) {
    if (!cartItems) return { totalPrice: 0, deliveryCharge: 0 };

    let totalPrice = 0;

    for (const item of cartItems) {
        if (item?.id && Number(item?.price)) {
            totalPrice += item?.quantity * Number(item?.price);
        }
    }

    const deliveryCharge = 4; 

    return { totalPrice: Number(totalPrice), deliveryCharge };
}

export default calculateTotal;