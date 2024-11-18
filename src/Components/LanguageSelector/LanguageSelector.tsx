"use client";

import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material';

const languages = [
  { name: "English", code: "en" },
  { name: "Arabic", code: "ar" },
  // Add more languages as needed
];

export default function LanguagePicker() {
  const [selectedLanguage, setSelectedLanguage] = React.useState('en');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedLanguage(event.target.value as string);
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
          labelId="language-select-label"
          id="language-select"
          value={selectedLanguage}
          size='small'
          displayEmpty
          onChange={handleChange}
        >
          {languages.map((language) => (
            <MenuItem key={language.code} value={language.code}>
              <Typography>{language.name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
