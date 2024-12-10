"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth0 } from '@auth0/auth0-react';
import Btn from '@/Components/Btn/Btn';

const Page = () => {
    const { isAuthenticated, isLoading, logout } = useAuth0();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>

            page
            <Btn onClick={()=>logout()}>
                logout
            </Btn>
        </div>
    );
}

export default Page;
