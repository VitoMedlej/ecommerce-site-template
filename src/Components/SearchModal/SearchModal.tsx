'use client'
import React, { useState } from 'react';
import { Modal, Box, TextField, Typography, Divider } from '@mui/material';
import Btn from '../Btn/Btn';
import { IoIosSearch } from "react-icons/io";

const SimpleModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    
    setOpen(true);
};
  const handleClose = () => setOpen(false);


  return (
    <main>
      <Btn
        onClick={handleOpen}
        sx={{
          minWidth: '40px !Important',
          px: 0
        }}>
        <IoIosSearch fontSize='2.5em' />
      </Btn>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description">
        <Box
          sx={{
            width: '95%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            py: 2,mb:2
          }}>

          <Box sx={{maxWidth:'sm',px:2,pt:2,pb:2}} className='auto flex row gap2'>
            <TextField
              placeholder='What are you looking for?'
              fullWidth
              size='small'
              variant="outlined"
              label="Search for items "
            />
            <Btn
              onClick={handleClose}
              sx={{
                mt: 0,
                px: 0,
                border: '1px solid red',
                color: 'red !important'
              }}>
              Close
            </Btn>
          </Box>
          <Divider>

          </Divider>
          <Box sx={{ mx:2, mt:2}}>
        <Typography sx={{pb:1}} className='fs500 fw600'>
        People usually search for: 
        </Typography>
        <Box >
            <Btn sx={{px:1,mr:1}} className='dark-bg2'>
                Cloth
            </Btn>
            <Btn sx={{px:0}} className='dark-bg2'>
                Cloth
            </Btn>
        </Box>
      </Box>
        </Box>
      </Modal>

      
    </main>
  );
};

export default SimpleModal;
