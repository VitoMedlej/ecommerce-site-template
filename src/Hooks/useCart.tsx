"use client";
import { useState } from "react";
import { findCartItemIndex } from "@/Utils/Cart/cartUtils";
import { setLocalStorageItem } from "@/Utils/Cart/localStorageUtils";
import { useCartContext } from "@/Utils/Context/Contexts";

export type TCartItem = {
    id: string;
    quantity: number;
    options: Record<string, unknown> | null;
    title: string;
    image: string;
    price: number;
};

const useCart = () => {
    const { cart, setCart } = useCartContext();
    const [isLoading, setIsLoading] = useState(false);

    const saveCart = (updatedCart: TCartItem[]) => {
        setCart(updatedCart);
        setLocalStorageItem("cart", updatedCart);
    };

    const addToCart = async (product: TCartItem, options: Record<string, unknown> | null, quantity = 1) => {
        setIsLoading(true);
        try {
            const index = findCartItemIndex(cart || [], product.id, options);
    
            const stockAvailable = quantity <= product.quantity; // Assuming stock check is needed
    
            if (stockAvailable) {
                if (index > -1) {
                    // Increment the existing cart item's quantity by the selectedQuantity
                    const updatedCart = cart?.map(item =>
                        item.id === product.id && JSON.stringify(item.options) === JSON.stringify(options)
                            ? { ...item, quantity: item.quantity + product.quantity } // Increment quantity
                            : item
                    );
                    if (updatedCart) saveCart(updatedCart);
                    return;
                } else {
                    // If the product doesn't exist in the cart, add it with the selected quantity
                    const updatedCart = [...(cart || []), { ...product, quantity: product.quantity, options }];
                    saveCart(updatedCart);
                }
            } else {
                console.error("Stock unavailable");
            }
        } catch (e) {
            console.error("Error adding to cart:", e);
        } finally {
            setIsLoading(false);
        }
    };
    const removeFromCart = async (
        productId: string,
        options: Record<string, unknown> | null
    ) => {
        setIsLoading(true);
        try {
            const index = findCartItemIndex(cart || [], productId, options);

            if (index === -1) {
                console.error("Item not found in cart");
                return;
            }

            const updatedCart = (cart || []).filter(
                (item, i) =>
                    i !== index || JSON.stringify(item.options) !== JSON.stringify(options)
            );

            saveCart(updatedCart);

            // await fetchExternalData("/api/cart/sync", { cart: updatedCart });
        } catch (e) {
            console.error("Error removing from cart:", e);
        } finally {
            setIsLoading(false);
        }
    };

    return {  addToCart, isLoading, removeFromCart };
};

export default useCart;
