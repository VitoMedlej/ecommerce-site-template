"use client";

import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

type SortOption = {
    value: string;
    label: string;
};

const sortOptions: SortOption[] = [
    { value: "highToLow", label: "Price: High to Low" },
    { value: "lowToHigh", label: "Price: Low to High" },
    { value: "onSale", label: "On Sale" },
    { value: "newest", label: "Newest" },
];

interface ProductSortFilterProps {
    selectedOptions: { [key: string]: string | null }; // Based on ProductOption type
    onOptionChange: (optionName: string, value: string) => void;
}

export default function ProductSortFilter({
    selectedOptions,
    onOptionChange,
}: ProductSortFilterProps) {
    const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onOptionChange("sort", event.target.value);
    };

    return (
        <FormControl>
            <RadioGroup
                aria-labelledby="product-sort-filter-label"
                value={selectedOptions.sort || ""}
                onChange={handleSortChange}
                name="product-sort-filter"
                sx={{
                    '& .MuiFormControlLabel-label': {
                        fontSize: '0.875rem',
                        color: 'gray',
                    },
                    '& .MuiRadio-root': {
                        color: 'gray',
                    },
                    '& .Mui-checked': {
                        color: 'black',
                    },
                }}
            >
                {sortOptions.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
}
