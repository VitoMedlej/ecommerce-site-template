"use client"

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function ProductSortFilter() {
    const [sortValue,
        setSortValue] = React.useState('newest');

    const handleSortChange = (event : React.ChangeEvent < HTMLInputElement >) => {
        setSortValue(event.target.value);
        console.log(event.target.value); // Use this value for sorting logic
    };

    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="product-sort-filter-label"
                value={sortValue}
                onChange={handleSortChange}
                name="product-sort-filter"
                sx={{
                '& .MuiFormControlLabel-label': {
                    fontSize: '0.875rem',
                    color: 'gray'
                },
                '& .MuiRadio-root': {
                    color: 'gray'
                },
                '& .Mui-checked': {
                    color: 'black'
                }
            }}>
                <FormControlLabel
                    value="highToLow"
                    control={< Radio />}
                    label="Price: High to Low"/>
                <FormControlLabel
                    value="lowToHigh"
                    control={< Radio />}
                    label="Price: Low to High"/>
                <FormControlLabel value="onSale" control={< Radio />} label="On Sale"/>
                <FormControlLabel value="newest" control={< Radio />} label="Newest"/>
            </RadioGroup>
        </FormControl>
    );
}
