"use client";

import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { InfoState } from '@/Utils/Types';
import { useCartContext } from '@/Utils/Context/Contexts';
import CartSummary from '../QuickCart/CartSummary';

const ReviewForm: React.FC<{ setActiveStep: React.Dispatch<React.SetStateAction<number>>, info: InfoState }> = ({ setActiveStep, info }) => {
  const { cart } = useCartContext();

  React.useEffect(() => {
    if (!info) {
      setActiveStep(0);
    }
  }, [info, setActiveStep]);

  if (!cart?.length) return null;

  const totalPrice = cart.reduce((sum, product) => {
    if (product?.id && product?.price) {
      return sum + (product.price * (product.quantity || 1));
    }
    return sum;
  }, 0);

  

  return (
    <React.Fragment>
      <Typography variant="h6" fontWeight={'700'} gutterBottom>
        Order summary
      </Typography>
      <List sx={{pb:2}} disablePadding>
        {cart.map((product) => {
          if (!product?.id) return null;
          const options = product.options || {};
          const uid = `${options.size || ""}-${options.color || ""}-${product.id}`;
          const title = `${product.quantity || '1'} x ${product.title || 'Product Name'}`
          return (
            <ListItem key={`${uid}`} sx={{ py: 1, px: 0 }}>
              <ListItemText
                primary={title}
              />
              <Typography variant="body2">
                ${product.newPrice ? (product.newPrice * (product.quantity || 1)).toFixed(2) : (product.price * (product.quantity || 1)).toFixed(2)}
              </Typography>
            </ListItem>
          );
        })}
        {/* <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Delivery" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${deliveryCharge}
          </Typography>
        </ListItem>
        <ListItem sx={{ px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${(totalPrice + deliveryCharge).toFixed(2)}
          </Typography>
        </ListItem> */}
      </List>
      <CartSummary 
     
      isCheckoutPage/>
      {/* <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Order Summary
          </Typography>
          {Object.entries(info).map(([key, value]) => (
            value && (
              <Typography gutterBottom key={key}>
                {value}
              </Typography>
            )
          ))}
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
};

export default ReviewForm;
