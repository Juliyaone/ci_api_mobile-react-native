import {createContext, useState} from "react";
// import getTokenFromStorage from "../auth/tokenStorage"
const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
     
    // const getToken = () => {
    //     getTokenFromStorage()
    // }

    // getToken()
    //     .then((token) => {
    //         let token = token
    // })

    return (
        <AuthContext.Provider value={{isLoading, setIsLoading, }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;