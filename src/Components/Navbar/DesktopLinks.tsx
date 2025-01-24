"use client";
import { useCategoriesContext } from '@/Utils/Context/Contexts';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

type Category = {
    title: string;
    subcategories?: string[];
};

const DesktopLinks = () => {
    const isSmallScreen = useMediaQuery("(max-width:900px)");
    const { categories }: { categories: Category[] } = useCategoriesContext();
    const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

    const handleMouseEnter = (title: string | null) => {
        setHoveredCategory(title);
    };

    const handleMouseLeave = () => {
        setHoveredCategory(null);
    };

    return (
        <>
            {!isSmallScreen && (
                <Box
                    className="row gap3 center justify-center"
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'flex'
                        },
                        flex: 1,
                        position: 'relative'
                    }}
                >
                    {categories.map((category) => (
                        <Box
                            key={category.title}
                            onMouseEnter={() => handleMouseEnter(category.title)}
                            onMouseLeave={handleMouseLeave}
                            sx={{ position: 'relative', marginRight: 2 }}
                        >
                            <Link
                                href={`/shop/${encodeURIComponent(category.title)}`}
                                className="decor-none hover-link"
                            >
                                <Typography
                                    className="dark fw600"
                                    sx={{
                                        padding: '0.5rem 0rem',
                                        cursor: 'pointer',
                                        '&:hover': { color: 'primary.main' }
                                    }}
                                >
                                    {category.title}
                                </Typography>
                            </Link>
                            {hoveredCategory === category.title && category.subcategories && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '100%',
                                        left: 0,
                                        backgroundColor: 'white',
                                        border: '1px solid #ddd',
                                        borderRadius: 2,
                                        padding: '0.5rem 1rem',
                                        width: '200px',
                                        zIndex: 10
                                    }}
                                >
                                    {category.subcategories.map((sub) => (
                                        <Link
                                            key={sub}
                                            href={`/shop/${category.title}?subcategory=${encodeURIComponent(sub)}`}
                                            className="decor-none hover-link"
                                        >
                                            <Typography
                                                sx={{
                                                    padding: '0.5rem 0',
                                                    fontSize: '0.9rem',
                                                    color: 'text.secondary',
                                                    '&:hover': { color: 'primary.main' }
                                                }}
                                            >
                                                {sub}
                                            </Typography>
                                        </Link>
                                    ))}
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            )}
        </>
    );
};

export default DesktopLinks;
