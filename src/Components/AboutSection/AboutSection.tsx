'use client'
import React from 'react';
import { Box, Typography } from '@mui/material';

const FullscreenOverlay = () => {
  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        height: '300px',
        backgroundImage: 'url("https://cdn.allbirds.com/image/upload/f_auto,q_auto,w_533/cms/2YE8ryyZjfWmCBIICFshut/0f2c8583d8a0b8a13c82bbaac0a5bc33/24Q3_AugustCore_Statement_Module_Site_Mobile_IMG_1600x2000.jpg")', // Replace with your image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Dark Overlay */}
    
      
    <Box className="flex col" sx={{px:1,maxWidth:'450px'}}>
    <Box sx={{width:'150px',pb:2}} className='flex auto invert'>
        <img src={process.env.NEXT_PUBLIC_LOGO_FULL} alt="" className="img" />
      </Box>
      <Typography
      className='fs3 fw600'
        sx={{
          color: '#fff',
          position: 'relative',
          zIndex: 2,
          pb:1,
          textAlign: 'center',
        }}
      >
        We are the future of the industry
      </Typography>
      <Typography
      className='fs1 text-center auto centered flex'
        sx={{
          color: '#fff',
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, quidem vel nesciunt dolorem nihil fugit!
      </Typography>
 

    </Box>
    </Box>
  );
};

export default FullscreenOverlay;
