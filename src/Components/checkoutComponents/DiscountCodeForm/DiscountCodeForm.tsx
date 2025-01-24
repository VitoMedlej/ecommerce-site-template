import { useState } from 'react';
import Btn from '@/Components/Btn/Btn';
import { Box, TextField } from '@mui/material';
import calculateTotal from '@/Utils/functions/calculateTotal';
import { useCartContext } from '@/Utils/Context/Contexts';
import usePromoLogic from '@/Hooks/usePromoLogic';



const DiscountCodeForm = ({ total, cartItems }: { total: number, cartItems: any[] }) => {
  const { promocode, setPromocode, err, discountedPrice, loading, handlePromoChange } = usePromoLogic();
  console.log('loading: ', loading);
  console.log('discountedPrice: ', discountedPrice);
  console.log('err: ', err);
  console.log('promocode: ', promocode);

  return (
    <Box component="form" className="flex row" action="">
      <TextField
        label="Discount Code"
        variant="outlined"
        size="small"
        fullWidth
        value={promocode}
        onChange={(e) => setPromocode(e.target.value)}
        sx={{
          marginBottom: '16px'
        }}
      />
      <Btn
        sx={{
          py: 0,
          width: '55px',
          height: '40px',
          mx: 1
        }}
        className="fw700"
        type="button"
        disabled={loading || !promocode || promocode.length < 3}
        onClick={handlePromoChange}
      >
        Apply
      </Btn>
      {err && <Box sx={{ color: 'red', fontSize: '.75em' }}>{err}</Box>}
      {discountedPrice > 0 && <Box sx={{ fontWeight: 'bold' }}>Discount: ${discountedPrice.toFixed(2)}</Box>}
    </Box>
  );
};

export default DiscountCodeForm;


