export const findCartItemIndex = (cart: any[], id: string, options: Record<string, any> | null) => {
    return cart.findIndex(
      (item) => item.id === id && JSON.stringify(item.options) === JSON.stringify(options)
    );
  };
  
  export const updateCartItemQuantity = (cart: any[], index: number, quantity: number) => {
    return cart.map((item, i) =>
      i === index ? { ...item, quantity: item.quantity + quantity } : item
    );
  };
  