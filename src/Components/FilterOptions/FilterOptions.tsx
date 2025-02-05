"use client";

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { FaAngleDoubleDown } from "react-icons/fa";
import { Box } from '@mui/material';
import Sort from './FilterForms/Sort';
import SizeFilter from './FilterForms/SizeFilter';
import { useState } from 'react';
import { ProductOption } from '../ClientSide/ProductClient/ProductClient';
import Btn from '../Btn/Btn';
import { useRouter } from 'next/navigation';
import { useFilterModalContext } from '@/Utils/Context/Contexts';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export default function FilterOptions() {

  const [selectedOptions, setSelectedOptions] = useState<ProductOption>({});
  console.log('selectedOptions: ', selectedOptions);
  const router = useRouter();
  const { setFilterModalOpen } = useFilterModalContext();
    
  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [optionName]: value,
    }));
  };

  const handleFilter = (filters: { [key: string]: string | null }, router: AppRouterInstance) => {
    try {
      const queryParams: URLSearchParams = new URLSearchParams();
  
      Object.keys(filters).forEach((key) => {
        const value = filters[key];
        if (value) {
          queryParams.append(key, value);
        }
      });
  
      if (queryParams.toString()) {
        setFilterModalOpen(false);
        router.push(`?${queryParams.toString()}`);
      } else {
        router.push('/'); // Reset filters
      }
    } catch (error) {
      setFilterModalOpen(false);
      console.error("Error updating filters:", error);
    }
  };
  

  const handleReset = () => {
    setSelectedOptions({});
    router.push('/'); // Reset the filters and return to the default page
  };

  const isConfirmDisabled = Object.keys(selectedOptions).length === 0;

  return (
    <Box
      className='w100 flex col'
      sx={{
        borderTop: '1px solid #cccccc'
      }}
    >
      <Accordion
        disableGutters
        sx={{
          px: 0,
          boxShadow: 'none',
          border: 'none'
        }}
      >
        <AccordionSummary
          sx={{
            p: 0
          }}
          expandIcon={<FaAngleDoubleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='fw600'>Sort By</Typography>
        </AccordionSummary>
        <Sort
          onOptionChange={handleOptionChange}
          selectedOptions={selectedOptions}
        />
      </Accordion>

      <Accordion
        disableGutters
        sx={{
          px: 0,
          boxShadow: 'none',
          border: 'none'
        }}
      >
        <AccordionSummary
          sx={{
            p: 0
          }}
          expandIcon={<FaAngleDoubleDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography className='fw600'>Size</Typography>
        </AccordionSummary>
        <SizeFilter
          onOptionChange={handleOptionChange}
          selectedOptions={selectedOptions}
          sizes={['S', 'M']}
        />
      </Accordion>

      <Box className='flex col' sx={{ mt: 4, gap: 1 }}>
        <Btn
          v2
          sx={{}}
          disabled={isConfirmDisabled}
          onClick={() => handleFilter(selectedOptions, router)}
        >
          Confirm
        </Btn>
        <Btn
          sx={{
            display: { xs: 'flex', md: 'none' },
            border: '1px solid',
            color: 'red !Important',
          }}
          onClick={handleReset}
        >
          Reset all
        </Btn>
      </Box>
    </Box>
  );
}
