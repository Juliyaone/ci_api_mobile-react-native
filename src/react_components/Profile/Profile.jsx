import React from 'react';
import cl from './Profile.module.css';

export const Profile = ({user, rate, mood, avatar}) => {


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
