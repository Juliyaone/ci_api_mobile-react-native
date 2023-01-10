import React from 'react';
import {FormContainer} from "../Forms/FormContainer";
import {EditProfileForm} from "../Forms/EditProfileForm";
import {useEditProfileMutation} from "../../redux/api";
import Loader from "../Loader";
import Message, {ERROR_TYPE, SUCCESS_TYPE} from "../Message/Message";
import {AuthContainer} from "../Containers/AuthContainer";


function EditProfile({user}) {
    const [sendEditProfile, {error, isLoading}] = useEditProfileMutation()

    if (isLoading) {
        return <Loader/>
    }

    let messageText = error?.data?.detail
    let messageType = ERROR_TYPE

    const onSubmit = async values => {
        const answer = await sendEditProfile(values)
        if (answer.data) {
            messageType = SUCCESS_TYPE
            messageText = 'Профиль изменен'
        }
    }

    return (
        <div>
            <Message type={messageType} text={messageText}/>
            <div>
                Username: {user.username}
            </div>
            <div>
                Phone: {user.phone}
            </div>
            <div>
                Email: {user.email}
            </div>
            <FormContainer
                onSubmit={onSubmit}
                initialValues={user}
                Component={EditProfileForm}/>
        </div>
    );
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={EditProfile}/>
}

export default WrappedAuthContainer;