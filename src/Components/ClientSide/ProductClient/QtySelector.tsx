"use client";

import React, { useState } from "react";
import { Box, IconButton, TextField } from "@mui/material";
import { FaPlus, FaMinus } from "react-icons/fa";

interface QtySelectorProps {
  initialValue?: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

const QtySelector: React.FC<QtySelectorProps> = ({ initialValue = 1, min = 1, max = 15, onChange }) => {
  const [quantity, setQuantity] = useState<number>(initialValue);

  const handleIncrease = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      setQuantity(value);
      onChange?.(value);
    }
  };

  return (
    <Box
      display="flex"
    
      justifyContent="center"
      sx={{
        border: "1px solid #ccc",
        padding: "8px",
        borderRadius: "0",
        // maxWidth: "160px",
        width:'fit-content',
        backgroundColor: "#f9f9f9",
      }}
    >
      <IconButton
      className='fs08'

        onClick={handleDecrease}
        disabled={quantity <= min}
        sx={{
          backgroundColor: quantity <= min ? "#e0e0e0" : "white",
          color: quantity <= min ? "#aaa" : "#333",
          borderRadius: "0",
          "&:hover": {
            backgroundColor: quantity <= min ? "#e0e0e0" : "#f5f5f5",
          },
          padding: "6px",
        }}
      >
        <FaMinus />
      </IconButton>
      <TextField
        type="string"
        value={quantity}
        onChange={handleInputChange}
        size="small"
    
        sx={{
            border:'none',

          "& .MuiOutlinedInput-root": {
            border:'none',
            
            borderRadius: "8px",
            textAlign: "center",
            marginX: "8px",
            width: "60px",
          },
          "& input": {
            padding: "6px",
            textAlign: "center",
            fontWeight: "bold",
          },
        }}
      />
      <IconButton
      className='fs08'
        onClick={handleIncrease}
        disabled={quantity >= max}
        sx={{
          backgroundColor: quantity >= max ? "#e0e0e0" : "white",
          color: quantity >= max ? "#aaa" : "#333",
          borderRadius: "0",
          "&:hover": {
            backgroundColor: quantity >= max ? "#e0e0e0" : "#f5f5f5",
          },
          padding: "6px",
        }}
      >
        <FaPlus />
      </IconButton>
    </Box>
  );
};

export default QtySelector;
