import React from 'react';
import * as styles from "./stylesSubscibe";
import {nanoid} from "@reduxjs/toolkit";
import {ApiHandler} from "../Containers/ApiHandler";
import {useGetRatesQuery, useGetUserRateQuery, useUnsubscribeUserMutation} from "../../redux/api";
import {AuthContainer} from "../Containers/AuthContainer";
import {NavLink} from "react-router-dom";
import Loader from "../Loader";
import Message, {ERROR_TYPE, SUCCESS_TYPE} from "../Message/Message";


const Rate = ({rate}) => {
    return (
        <div>
            <NavLink to={`/rates/${rate.id}`}>
                <div>Rate name: {rate.name}</div>
            </NavLink>
            <div>Price: {rate.price}</div>
        </div>
    )
}


function Subscribe({data: rates}) {
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
        <styles.Content>
            <h1>Rates</h1>
            <Message type={messageType} text={messageText}/>
            <div>Current user rate: {userRateData.name}</div>
            <div>
                {getRatesMap()}
            </div>
            <button onClick={unsubscribe}>
                Отписаться
            </button>
        </styles.Content>
    );
}

const HandlerContainer = ({user}) => {
    return <ApiHandler func={useGetRatesQuery} user={user} Component={Subscribe}/>
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={HandlerContainer}/>
}

export default WrappedAuthContainer;
