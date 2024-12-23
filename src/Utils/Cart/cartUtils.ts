import { CartItem } from "@/Hooks/useCart";

export const findCartItemIndex = (cart: CartItem[], id: string, options: Record<string, any> | null) => {
    return cart.findIndex(
      (item) => item.id === id && JSON.stringify(item.options) === JSON.stringify(options)
    );
  };
  
  export const updateCartItemQuantity = (cart: CartItem[], index: number, quantity: number) => {
    return cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + quantity } : item
    );
  };
  