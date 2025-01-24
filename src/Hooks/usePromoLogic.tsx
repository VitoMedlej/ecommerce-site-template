import { useCartContext } from "@/Utils/Context/Contexts";
import calculateTotal from "@/Utils/functions/calculateTotal";
import { useState } from "react";

const usePromoLogic = () => {
    const { cart } = useCartContext();
    const total = calculateTotal(cart)
    const [promocode, setPromocode] = useState('');
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);
    const [discountedPrice, setDiscountedPrice] = useState(0);
  
    const handlePromoChange = async () => {
      setErr('');
      setLoading(true);
  
      if (!promocode || promocode.length < 3) {
        setErr('Please Enter a valid Code!');
        setLoading(false);
        setDiscountedPrice(0);
        return;
      }
  
      const rawResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/use-promo`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ order: { code: promocode, total, cart } })
      });
  
      const content = await rawResponse.json();
  
      if (!content?.success) {
        setErr(content?.message);
        setDiscountedPrice(0);
        setLoading(false);
        return;
      }
  
      setErr('');
      setDiscountedPrice(Number(content?.discountedPrice));
      setLoading(false);
    };
  
    return {
      promocode,
      setPromocode,
      err,
      discountedPrice,
      loading,
      handlePromoChange
    };
  };

  export default usePromoLogic