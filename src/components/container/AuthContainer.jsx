import React from "react";
import {useGetMeQuery} from "../../redux/api";

import Loader from "../../components/loader/Loader";


export const AuthContainer = ({Component, navigation}) => {
    const {data: user, error, isLoading, isSuccess} = useGetMeQuery()

    if (isLoading) {
        return <Loader/>
    } else if (!user || error) {
        navigation.navigate('Login')
        // return <Login/>
    } else if (user && !user.is_verified) {
         navigation.navigate('VerificationSmsScreen')
        // return <SmsEntry/>
    } else if (isSuccess && user && user.is_verified) {
        // return <Component user={user}/>
        navigation.navigate('Profile')
    }
}