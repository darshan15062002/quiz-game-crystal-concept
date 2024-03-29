
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {


    const storedAuthentication = JSON.parse(localStorage.getItem("authentication"));
    const [currentUser, setCurrentUser] = useState(storedAuthentication ? storedAuthentication : { isAuthenticated: false, loading: false })
    // const [currentUser, setCurrentUser] = useState({ isAuthenticated: false, loading: true })


    useEffect(() => {
        localStorage.setItem("authentication", JSON.stringify(currentUser));
    }, [currentUser]);
    return (
        < AuthContext.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider >
    )
}