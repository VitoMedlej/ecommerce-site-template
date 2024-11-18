"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';

const countries = [
  { icon: "https://cdn-icons-png.flaticon.com/128/323/323310.png", name: "USA" },
  { icon: "https://cdn-icons-png.flaticon.com/128/197/197571.png", name: "Canada" },
  { icon: "https://cdn-icons-png.flaticon.com/128/197/197374.png", name: "UK" },
  // Add more countries as needed
];

export default function CountryPicker() {
  const [selectedCountry, setSelectedCountry] = React.useState('USA');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCountry(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <Select
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none'
            }
          }}
          labelId="country-select-label"
          id="country-select"
          value={selectedCountry}
          size='small'
          displayEmpty
          onChange={handleChange}
        >
          {countries.map((country) => (
            <MenuItem key={country.name} value={country.name}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box sx={{ width: '20px', height: '20px' }}>
                  <img src={country.icon} alt={`${country.name} flag`} width="100%" height="100%" />
                </Box>
                <Typography>{country.name}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
