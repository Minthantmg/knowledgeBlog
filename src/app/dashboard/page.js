import React, {useContext, useEffect} from 'react';
import {useRouter} from "next/navigation";
import {AuthContext} from "../../../contexts/AuthContext";

const Page = () => {
    const router = useRouter()
    const {isAuthenticated} = useContext(AuthContext)

    useEffect(() => {
        if (!isAuthenticated){
            router.push('/auth/sign-in')
        }
    }, []);
    return (
        <div>
            Dashboard Home
        </div>
    );
};

export default Page;