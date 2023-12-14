import {createContext, useEffect, useReducer, useState} from "react";

const initialState = {
    isAuthenticated: false,
    user: null,
    signIn: (user) => {
    },
    signOut: () => {
    }
}
export const AuthContext = createContext(initialState)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const user = localStorage.getItem('user')
        const isAuthenticated = localStorage.getItem('isAuthenticated')
        if (user && isAuthenticated){
            setUser(JSON.parse(user))
            setIsAuthenticated(JSON.parse(isAuthenticated))
        }
    },[])


    const signIn = (user) => {
        setUser(user)
        setIsAuthenticated(true)
        //cookies is better use
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('isAuthenticated', JSON.stringify(true))
    }

    const signOut = () => {
        setUser({})
        setIsAuthenticated(false)
        localStorage.setItem('user', JSON.stringify({}))
        localStorage.setItem('setIsAuthenticated', JSON.stringify(false))
    }

    const value = {
        user,
        isAuthenticated,
        signIn,
        signOut,
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}