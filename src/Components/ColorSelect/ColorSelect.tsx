"use client";

import { Box } from "@mui/material";
import * as React from "react";

interface ColorSelectorProps {
  colors: string[];
}

export default function ColorSelector({ colors }: ColorSelectorProps) {
  const [selectedColor, setSelectedColor] = React.useState<string | null>(null);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <Box style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {colors && colors?.map((color) => (
        <Box
          key={color}
          onClick={() => handleColorSelect(color)}
          style={{
            width: "25px",
            height: "25px",
            backgroundColor: color,
            border: selectedColor === color ? "2px solid black" : "1px solid gray",
            cursor: "pointer",
            display: "flex",
            borderRadius:'50%',
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      ))}
    </Box>
  );
}
