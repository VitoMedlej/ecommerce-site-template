import { TCartItem } from "@/Hooks/useCart";
import {ProductData} from "../Types";

export const getPrice = (product : ProductData | TCartItem) => {
    if (!product) 
        return 0;
    const finalPrice = String(product.newPrice) && Number(product.newPrice) >= 0
        ? Number(product.newPrice)
        : product.price
            ? Number(product.price)
            : 0;

    return finalPrice
}