import {useGetMeQuery} from "../../redux/api";
import React from "react";
import {useNavigate} from "react-router-dom";
import Loader from "../Loader";
import Login from "../Login";
import SmsEntry from "../SmsEntry";


export const AuthContainer = ({Component}) => {
    const navigate = useNavigate();
    const {data: user, error, isLoading, isSuccess} = useGetMeQuery()

    if (isLoading) {
        return <Loader/>
    } else if (!user || error) {
        navigate('/login')
        return <Login/>
    } else if (user && !user.is_verified) {
        navigate('/sms-entry')
        return <SmsEntry/>
    } else if (isSuccess && user && user.is_verified) {
        return <Component user={user}/>
    }
}