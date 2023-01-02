import React, {useEffect} from 'react';
import cl from './Profile.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentUserRate} from "../../redux/thunks/ratesThunks";
import {getCurrentUserAvatar} from "../../redux/thunks/userThunks";



function Profile() {
    const user = useSelector(store => store.userReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!user.rateData.id) {
            dispatch(getCurrentUserRate())
        }
        if (!user.avatarData.id) {
            dispatch(getCurrentUserAvatar())
        }
    })

    return (
        <div className={cl.content}>
            <h1>PROFILE</h1>
            <p>ФИО: {user.username} {user.third_name} {user.last_name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Level: {user.level} / {user.max_level}</p>
            <p>Mood: {user.mood}</p>
            <p>Rate: {user.rateData.name} {user.rateData.price}</p>
            <p>Avatar: {user.avatarData.id} {user.avatarData.file_name}</p>
            <p>Expired at: {user.expired_at}</p>
            <p>Gender: {user.gender ? 'Male' : 'Female'}</p>
        </div>
    );
}

export default Profile;