import React from 'react';
import {useGetUserRateQuery, useGetUserAvatarQuery, useGetUserMoodQuery} from "../../redux/usersApi";
import Loader from "../../components/loader/Loader";
import Message, {ERROR_TYPE} from "../../message/Message";
import ProfileScreen from "./ProfileScreen";


const ProfileContainer = () => {

    const {data: rate, error: rateError, isLoading: rateLoading} = useGetUserRateQuery();
    const {data: mood, error: moodError, isLoading: moodLoading} = useGetUserMoodQuery()
    const {data: avatar, error: avatarError, isLoading: avatarLoading} = useGetUserAvatarQuery()


    if ( rateLoading || moodLoading || avatarLoading ) {
        return <Loader/>
    }


    let messageText;

    if (moodError) {
        messageText = moodError.data?.detail
    }

    if (avatarError) {
        messageText = avatarError.data?.detail
    }

    if (rateError) {
        messageText = rateError.data?.detail
    }

    

    return (
        <>
            <Message type={ERROR_TYPE} text={messageText}/>
            <ProfileScreen 
                rate={rate}
                mood={mood}
                avatar={avatar}
            />
        </>
    )
}


export default ProfileContainer;