'use client'
import React, {useContext, useEffect} from 'react';
import {AuthContext} from "../../contexts/AuthContext";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter()
    const {isAuthenticated} = useContext(AuthContext)

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/dashboard')
        }
    }, []);

    return (
        <div>
            Home Page
        </div>
    );
};

export default Page;