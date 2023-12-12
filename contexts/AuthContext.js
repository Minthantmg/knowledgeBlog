import {createContext, useReducer, useState} from "react";

const initialState = {
    isAuthenticated: false,
    user: null,
}
const AuthContext = createContext(initialState)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const signIn = (user) => {
        setUser(user)
        setIsAuthenticated(true)
        //cookies is better use
        localStorage.setItem('user',JSON.stringify(user))
        localStorage.setItem('setIsAuthenticated',JSON.stringify(true))
    }

    const signOut = () =>{
        setUser({})
        setIsAuthenticated(false)
        localStorage.setItem('user',JSON.stringify({}))
        localStorage.setItem('setIsAuthenticated',JSON.stringify(false))
    }

    const value = {
        user,
        isAuthenticated
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}