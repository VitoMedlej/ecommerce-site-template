import { useState } from 'react';
import { fetchExternalData } from '@/Utils/functions/dataFetchers';
import { findCartItemIndex, updateCartItemQuantity } from '@/Utils/Cart/cartUtils';
import { getLocalStorageItem, setLocalStorageItem } from '@/Utils/Cart/localStorageUtils';

type CartItem = {
  id: string;
  quantity: number;
  options: Record<string, any> | null;
};



const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>(() => getLocalStorageItem('cart', []));
  const [isLoading, setIsLoading] = useState(false);

  const saveCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    setLocalStorageItem('cart', updatedCart);
  };

  const addToCart = async (id: string, options: Record<string, any> | null, quantity = 1) => {
    setIsLoading(true);
    try {
      const index = findCartItemIndex(cart, id, options);

      const stockAvailable = await fetchExternalData<boolean>(`/stock/${id}`, null, { method: 'GET' });

      if (stockAvailable) {
        const updatedCart =
          index > -1
            ? updateCartItemQuantity(cart, index, quantity)
            : [...cart, { id, quantity, options }];

        saveCart(updatedCart);
        await fetchExternalData('/api/cart/sync', { cart: updatedCart });
      } else {
        console.error('Stock unavailable');
      }
    } catch (e) {
      console.error('Error adding to cart:', e);
    } finally {
      setIsLoading(false);
    }
  };

  return { cart, addToCart, isLoading };
};

export default useCart;
