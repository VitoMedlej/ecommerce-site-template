import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuickCartContext } from '@/Utils/Context/Contexts';
import useCart from './useCart';
import { ProductData } from '@/Utils/Types';

type ProductOption = { [key: string]: string };

const useProductActions = (product: ProductData) => {

  const { addToCart } = useCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedOptions, setSelectedOptions] = useState<ProductOption>({});
  const [isEmptyOptions, setIsEmptyOption] = useState(false);
  const { setIsCartOpen } = useQuickCartContext();


  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prevOptions) => ({ ...prevOptions, [optionName]: value }));
    setIsEmptyOption(false);
  };

  const cartProduct = {
    id: product.id,
    title: product.title,
    quantity,
    options: selectedOptions,
    image: product.images[0],
    price: product.price,
  };

  const variants = product.variants?.length > 0 ? product.variants : null;
  const emptyOptions = variants && Object.keys(selectedOptions).length === 0;

  const handleAddToCart = (quickBuy?: boolean) => {
    if (emptyOptions) {
      setIsEmptyOption(true);
      return;
    }
    addToCart(cartProduct, selectedOptions);
    if (quickBuy) {
      return router.push('/checkout');
    }
    setIsCartOpen(true);
  };

  return {
    quantity,
    variants,
    setQuantity,
    selectedOptions,
    setSelectedOptions,
    isEmptyOptions,
    handleOptionChange,
    handleAddToCart,
  };
};

export default useProductActions;
