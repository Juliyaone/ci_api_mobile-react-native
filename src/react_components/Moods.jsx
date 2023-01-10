import React from "react";
import {nanoid} from "@reduxjs/toolkit";
import {ApiHandler} from "./Containers/ApiHandler";
import {useGetMoodsQuery, useSetUserMoodMutation} from "../redux/api";
import {AuthContainer} from "./Containers/AuthContainer";
import Message, {ERROR_TYPE, SUCCESS_TYPE} from "./Message/Message";
import Loader from "./Loader";


function Moods({data}) {

    const [setUserMood, {isLoading, error}] = useSetUserMoodMutation()

    if (isLoading) {
        return <Loader/>
    }

    let messageText = error?.data?.detail
    let messageType = ERROR_TYPE

    const setMode = async (modeID = '1') => {
        const payload = {
            mood_id: 2
        }
        const answer = await setUserMood(payload)
        if (answer.status === 204) {
            messageType = SUCCESS_TYPE
            messageText = 'Настроение выбрано'
        }
    }

    const getAllMoods = () => {
        return data.map(
            (mood) => <p key={nanoid() + mood.id}>{mood.name} {mood.code}</p>
        )
    }

    return (
        <div>
            <Message type={messageType} text={messageText}/>
            {getAllMoods()}
            <button onClick={setMode}>
                Set mode
            </button>
        </div>
    )
}

const HandlerContainer = () => {
    return <ApiHandler func={useGetMoodsQuery} Component={Moods}/>
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={HandlerContainer}/>
}

export default WrappedAuthContainer;