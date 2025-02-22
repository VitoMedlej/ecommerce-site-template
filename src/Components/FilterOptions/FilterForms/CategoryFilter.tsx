"use client";

import { Category, useCategoriesContext } from "@/Utils/Context/Contexts";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface CategoryFilterProps {
  selectedOptions: { [key: string]: string | null };
  onOptionChange: (optionName: string, value: string) => void;
}

export default function CategoryFilter({ selectedOptions, onOptionChange }: CategoryFilterProps) {
  const { categories } = useCategoriesContext();
  console.log('categories: ', categories);

  const handleCategorySelect = (event: any) => {
    onOptionChange("category", event.target.value);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel>Category</InputLabel>
      <Select 
       MenuProps={{ disablePortal: true }}
      value={selectedOptions.category || ""} onChange={handleCategorySelect} label="Category">
        {categories && categories?.map((category: Category) => (
          <MenuItem key={category.title} value={category.title}>
            {category.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}