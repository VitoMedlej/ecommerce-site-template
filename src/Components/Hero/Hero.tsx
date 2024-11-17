"use client"
import {Grid2} from '@mui/material';
import React, {useEffect, useState} from 'react';
import SwiperCarousel from './SwiperCarousel/SwiperCarousel';

export default function HomePage() {
    const [slides,
        setSlides] = useState < any[] > ([]);
    const [loading,
        setLoading] = useState(true);
    const [error,
        setError] = useState < string | null > (null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/test`, {
                    next: {
                        revalidate: 1200
                    }
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch data: ${response.statusText}`);
                }

                const result = await response.json();
                setSlides(result); // Set data once fetched
            } catch (error : any) {
                setError(error.message); // Handle any fetch errors
            } finally {
                setLoading(false); // Stop loading
            }
        };

        fetchData(); // Call the function on component mount
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        // return <p>Error: {error}</p>;
    }

    return (
        <Grid2>
            <SwiperCarousel/>
        </Grid2>
    );
}
