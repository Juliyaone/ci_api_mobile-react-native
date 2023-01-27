import React, { createContext, useState, useEffect }from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [userToken, setUserToken] = useState(null);

    const getUserToken = async () => {
        try {
            const userToken = await AsyncStorage.getItem("userToken");
            setUserToken(userToken);
        } catch (err) {
            // console.log(`Токен не получен ${err}`);
        }
    }

    useEffect(() => {
        getUserToken();
    },[]);


    
    return (
        <AuthContext.Provider value={{userToken}}>
            {children}
        </AuthContext.Provider>
    )
}