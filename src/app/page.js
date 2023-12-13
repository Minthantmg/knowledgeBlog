'use client'
import React, {useContext} from 'react';
import {AuthContext} from "../../contexts/AuthContext";

const Page = () => {
    const {isAuthenticated} = useContext(AuthContext)
    console.log(isAuthenticated)
    return (
        <div>
            Home Page
        </div>
    );
};

export default Page;