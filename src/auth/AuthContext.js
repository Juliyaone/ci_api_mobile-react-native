import React, { createContext, useState }from 'react';

// import getTokenFromStorage from "../auth/tokenStorage"
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [userToken, setUserToken] = useState(null);

    // const login = () => {
    //     setUserToken('jdhjhfhjkfd');
    //     setIsLoading(false);
    // }


    // const logout = () => {
    //     setUserToken(null);
    //     setIsLoading(false);
    // }
    
    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    )
}