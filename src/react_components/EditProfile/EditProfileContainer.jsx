import {useEditPasswordMutation, useEditProfileMutation} from "../../redux/api";
import Loader from "../Loader";
import Message, {ERROR_TYPE, SUCCESS_TYPE} from "../Message/Message";
import {AuthContainer} from "../Containers/AuthContainer";
import {EditProfile} from "./EditProfile";
import React from "react";


const EditProfileContainer = ({user}) => {

    const [
        sendEditProfile,
        {
            data: profileData,
            error: profileError,
            isLoading: profileIsLoading
        }
    ] = useEditProfileMutation()

    const [
        sendEditPassword,
        {
            data: passwordData,
            error: passwordError,
            isLoading: passwordIsLoading
        }
    ] = useEditPasswordMutation()

    if (profileIsLoading || passwordIsLoading) {
        return <Loader/>
    }

    let messageText = profileError
        ? profileError?.data.detail
        : passwordError?.data.detail

    let messageType = ERROR_TYPE

    if (profileData) {
        messageType = SUCCESS_TYPE
        messageText = 'Профиль изменен'
    }
    if (passwordData === null) {
        messageType = SUCCESS_TYPE
        messageText = 'Пароль изменен'
    }
    const editUserData = async values => {
        await sendEditProfile(values)
    }
    const editPassword = async values => {
        await sendEditPassword(values)
    }
    return (
        <>
            <Message type={messageType} text={messageText}/>
            <EditProfile
                user={user}
                editUserData={editUserData}
                editPassword={editPassword}
            />
        </>
    )
}


const WrappedAuthContainer = () => {
    return <AuthContainer Component={EditProfileContainer}/>
}

export default WrappedAuthContainer;