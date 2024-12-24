"use client";

import { Box } from '@mui/material';
import * as React from 'react';

interface SizeFilterProps {
  sizes: string[];
  selectedOptions: { [key: string]: string | null };
  onOptionChange: (optionName: string, value: string) => void;
}

export default function SizeFilter({ sizes, selectedOptions, onOptionChange }: SizeFilterProps) {
  const handleSizeSelect = (size: string) => {
    onOptionChange("size", size);
  };

  return (
    <Box sx={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {sizes && sizes.map((size) => (
        <Box
          key={size}
          onClick={() => handleSizeSelect(size)}
          sx={{
            minWidth: '30px',
            height: '30px',
            px:.5,
            backgroundColor: selectedOptions.size === size ? '#000000e6' : 'white',
            border: '1px solid gray',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            color: selectedOptions.size === size ? 'white' : 'black',
          }}
        >
          {size.toUpperCase()}
        </Box>
      ))}
    </Box>
  );
}
