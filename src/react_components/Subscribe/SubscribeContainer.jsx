import React from 'react';
import {nanoid} from "@reduxjs/toolkit";
import {ApiHandler} from "../Containers/ApiHandler";
import {useGetRatesQuery, useGetUserRateQuery, useUnsubscribeUserMutation} from "../../redux/api";
import {AuthContainer} from "../Containers/AuthContainer";
import Loader from "../Loader";
import Message, {ERROR_TYPE, SUCCESS_TYPE} from "../Message/Message";
import {Subscribe} from "./Subscribe";
import {Rate} from "./Rate";


const SubscribeContainer = ({user, data: rates}) => {

    const {data: userRateData, isLoading} = useGetUserRateQuery()
    const [unsubscribeUser, {error, isLoading: unsubscribeIsLoading}] = useUnsubscribeUserMutation()
    let messageText = error?.data?.detail
    let messageType = ERROR_TYPE

    if (isLoading || unsubscribeIsLoading) {
        return <Loader/>
    }

    const getRatesMap = () => {
        return (
            rates
                .filter(rate => rate.price !== 0)
                .map(
                    (rate) => <Rate key={nanoid() + rate.id} rate={rate}/>
                )
        )
    }

    const unsubscribe = async () => {
        const answer = await unsubscribeUser()
        if (answer.data) {
            messageType = SUCCESS_TYPE
            messageText = 'Профиль изменен'
        }
    }

    return (
        <>
            <Message type={messageType} text={messageText}/>
            <Subscribe
                user={user}
                userRate={userRateData}
                rates={getRatesMap}
                unsubscribe={unsubscribe}
            />
        </>
    )
}


const HandlerContainer = ({user}) => {
    return <ApiHandler func={useGetRatesQuery} user={user} Component={SubscribeContainer}/>
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={HandlerContainer}/>
}

export default WrappedAuthContainer;
