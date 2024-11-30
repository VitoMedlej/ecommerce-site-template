"use client";

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Slide,
  Box,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import Btn from "../Btn/Btn";
import { IoCloseOutline } from "react-icons/io5";
import { useDialogContext } from "@/app/Utils/Context/Contexts";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EcommerceDialog = () => {


  const { isDialogOpen, setIsDialogOpen } = useDialogContext();
  // const handleOpen = () => setIsDialogOpen(true);
  const handleClose = () => setIsDialogOpen(false);

  return (
    <>
     
      <Dialog
        open={isDialogOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="ecommerce-offer-dialog"
      >
        <Box sx={{right:0}} className="absolute wmax">
          <Btn 
        onClick={handleClose}
          
          sx={{px:0}}>
          <IoCloseOutline color='red' fontSize='2em'/>

          </Btn>
        </Box>
        <Box sx={{height:{md:'300px'}}}>
          <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_1000/cms/MMseqjTzUEmXtlLiHGOCT/3c6d38988c647391e6a8f5e1aa166e9c/24Q4_Gifting_Site_DualPanel_GiftsUnder100_2000x2000.png" alt="" 
          className="img cover" />
        </Box>
        <DialogTitle>
          <Typography variant="h6" className='fs600 fw600' component="div">
          Save to wishlist
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography  color="textSecondary" className='fs600'>
          Ever wish you could save all your fave fits & accessories in one place to come back to later? Almost like a ✨ wishlist ✨.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Dismiss
          </Button>
          <Button
            onClick={() => {
              handleClose();
              // Navigate or handle action
            }}
            variant="contained"
            color="primary"
          >
            Shop Now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EcommerceDialog;