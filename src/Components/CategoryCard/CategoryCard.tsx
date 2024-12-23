"use client"
import { Box, Typography } from '@mui/material';
import React from 'react';
import Btn from '../Btn/Btn';
import { Card } from '@/Utils/Types';
import { urlFor } from '@/Utils/functions/sanityClient';
import { useRouter } from 'next/navigation';

const CategoryCard = ({card} : {card: Card}) => {
  const router = useRouter();
  return (
    <Box sx={{ position: 'relative', width: { xs: '100%' } }}>
      <Box sx={{ width: '100%', height:{xs:'400px',sm:'400px',md:'460px'},borderRadius:'6px' }}>
        <img
          className='img w100 cover radius6'
          loading="lazy"
          src={`${urlFor(card?.image).url()}?q=30`}
          alt=""
        
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

        {card?.title && <Typography 
        sx={{pb:1, color: 'white', fontSize: {xs:'1.2em',md:'1.5rem'}, fontWeight: 'bold' }}>
          {card.title}
        </Typography>}
        {card?.button && <Btn 
        onClick={()=>router.push(`${card.link}`)}
        v2 className='fs075 bg-white black'>
           {card.button}
        </Btn>}
      </Box>
    </Box>
  );
};

export default CategoryCard;
