import React from 'react';
import cl from './Profile.module.css';
import {useGetUserAvatarQuery, useGetUserMoodQuery, useGetUserRateQuery} from "../../redux/api";
import {AuthContainer} from "../Containers/AuthContainer";

function Profile({user}) {
    const {data: rate, error: rateError} = useGetUserRateQuery()
    const {data: mood, error: moodError} = useGetUserMoodQuery()
    const {data: avatar, error: avatarError} = useGetUserAvatarQuery()
    if (rateError){
        console.log(rateError)
    }
    if (moodError){
        console.log(moodError)
    }
    if (avatarError){
        console.log(avatarError)
    }
    return (
        <div className={cl.content}>
            <h1>PROFILE</h1>
            <p>ФИО: {user.username} {user.third_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Level: {user.level} / {user.max_level}</p>
            {mood ? <p>Mood: {mood.name} {mood.code}</p> : null}
            {rate ? <p>Rate: {rate.name} {rate.price}</p> : null}
            {avatar ? <p>Avatar: {avatar.id} {avatar.file_name}</p> : null}
            <p>Expired at: {user.expired_at}</p>
            <p>Gender: {user.gender ? 'Male' : 'Female'}</p>
        </div>
    );
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={Profile}/>
}

export default WrappedAuthContainer;