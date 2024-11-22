"use client"
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaAngleDoubleDown } from "react-icons/fa";
import { Box } from '@mui/material';
import Sort from './FilterForms/Sort';
import SizeFilter from './FilterForms/SizeFilter';


export default function AccordionExpandIcon() {
  return (
    <Box className='w100 flex col' sx={{borderTop:'1px solid #cccccc'}}>
      <Accordion disableGutters sx={{  px:0, boxShadow: 'none', border: 'none' }}>
        <AccordionSummary
         sx={{ p: 0 }}
          expandIcon={<FaAngleDoubleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='fw600'>Sort By</Typography>
        </AccordionSummary>
        <Sort/>
      </Accordion>

      <Accordion disableGutters sx={{  px:0, boxShadow: 'none', border: 'none' }}>
        <AccordionSummary
         sx={{ p: 0 }}
          expandIcon={<FaAngleDoubleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='fw600'>Size</Typography>
        </AccordionSummary>
        <SizeFilter/>
      </Accordion>
     
    </Box>
  );
}
