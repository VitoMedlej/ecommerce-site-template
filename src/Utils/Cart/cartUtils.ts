import { TCartItem } from "@/Hooks/useCart";

export const findCartItemIndex = (cart: TCartItem[], id: string, options: Record<string, unknown> | null) => {
    return cart.findIndex(
      (item) => item.id === id && JSON.stringify(item.options) === JSON.stringify(options)
    );
  };
  
  export const updateCartItemQuantity = (cart: TCartItem[], index: number, quantity: number) => {
    return cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + quantity } : item
    );
  };
  