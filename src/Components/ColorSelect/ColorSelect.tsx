"use client";

import { Box } from "@mui/material";
import * as React from "react";

interface ColorSelectorProps {
  colors: string[];
  selectedOptions: { [key: string]: string | null };
  onOptionChange: (optionName: string, value: string) => void;
}

export default function ColorSelector({ colors, selectedOptions, onOptionChange }: ColorSelectorProps) {
  const handleColorSelect = (color: string) => {
    onOptionChange("color", color);
  };

  return (
    <Box style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {colors && colors.map((color) => (
        <Box
          key={color}
          onClick={() => handleColorSelect(color)}
          style={{
            width: "25px",
            height: "25px",
            backgroundColor: color,
            border: selectedOptions.color === color ? "2px solid black" : "1px solid gray",
            cursor: "pointer",
            display: "flex",
            borderRadius: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ))}
    </Box>
  );
}
