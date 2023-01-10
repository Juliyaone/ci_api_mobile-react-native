import {createContext, useState} from "react";
// import getTokenFromStorage from "../auth/tokenStorage"
const AuthContext = createContext();
import getTokenFromStorage from "./tokenStorage"

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
        const [userToken, setUserToken] = useState(false);

   setUserToken(getTokenFromStorage());
     console.log(token);


    return (
        <AuthContext.Provider value={{ userToken}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;