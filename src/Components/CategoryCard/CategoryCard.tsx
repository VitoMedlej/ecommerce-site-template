"use client"
import { Box, Typography } from '@mui/material';
import React from 'react';
import Btn from '../Btn/Btn';

const CategoryCard = () => {
  return (
    <Box sx={{ position: 'relative', width: { xs: '100%' } }}>
      <Box sx={{ width: '100%',maxHeight:{xs:'350px',md:'450px'},borderRadius:'6px' }}>
        <img
          className='img'
          loading="lazy"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnHtqgBtaZCc4zMQC6gzxEzFVTfv2K-h23D8NB2rzo1CPSWNMDNc6BnZQxypE4OKpLajY&usqp=CAU"
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          borderRadius:'6px', 
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.25)', // Dark overlay
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        
       
      </Box>
      <Box
        sx={{
          position: 'absolute',
         bottom: '5%',
          left: '5%',
        }}
      >

        <Typography sx={{pb:1, color: 'white', fontSize: '1.5rem', fontWeight: 'bold' }}>
          fasf
        </Typography>
        <Btn v2 className='fs075 bg-white black'>
            View All
        </Btn>
      </Box>
    </Box>
  );
};

export default CategoryCard;
