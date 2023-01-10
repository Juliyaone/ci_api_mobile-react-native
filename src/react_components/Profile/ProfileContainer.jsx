import React from 'react';
import {useGetUserAvatarQuery, useGetUserMoodQuery, useGetUserRateQuery} from "../../redux/api";
import {AuthContainer} from "../Containers/AuthContainer";
import Loader from "../Loader";
import Message, {ERROR_TYPE} from "../Message/Message";
import {Profile} from "./Profile";


const ProfileContainer = ({user}) => {
        const {data: rate, error: rateError, isLoading: rateLoading} = useGetUserRateQuery()
    const {data: mood, error: moodError, isLoading: moodLoading} = useGetUserMoodQuery()
    const {data: avatar, error: avatarError, isLoading: avatarLoading} = useGetUserAvatarQuery()

    if (rateLoading || moodLoading || avatarLoading) {
        return <Loader/>
    }

    let messageText

    if (rateError) {
        messageText = rateError.data.detail
    }
    if (moodError) {
        messageText = moodError.data.detail
    }
    if (avatarError) {
        messageText = avatarError.data.detail
    }

    return (
        <>
            <Message type={ERROR_TYPE} text={messageText}/>
            <Profile
                user={user}
                rate={rate}
                mood={mood}
                avatar={avatar}
            />
        </>
    )
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={ProfileContainer}/>
}

export default WrappedAuthContainer;