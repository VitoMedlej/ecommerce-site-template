"use client";

import * as React from 'react';

interface SizeFilterProps {
  sizes: string[];
}

export default function SizeFilter() {
  const [selectedSize, setSelectedSize] = React.useState<string | null>(null);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const sizes = ['sm', 'xs', 'md', 'lg', 'xl']; // Example sizes
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {sizes.map((size) => (
        <div
          key={size}
          onClick={() => handleSizeSelect(size)}
          style={{
            width: '30px',
            height: '30px',
            backgroundColor: selectedSize === size ? '#000000e6' : 'white',
            border: '1px solid gray',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '12px',
            color: selectedSize === size ? 'white' : 'black',
          }}
        >
          {size.toUpperCase()}
        </div>
      ))}
    </div>
  );
};
