import React from "react";
import {useNavigate} from "react-router-dom";
import {FormContainer} from "./Forms/FormContainer";
import {RegisterForm} from "./Forms/RegisterForm";
import {useRegisterUserMutation} from "../redux/api";
import Message, {ERROR_TYPE} from "./Message/Message";
import Loader from "./Loader";


function Registration() {
    const navigate = useNavigate()

    const [registerUser, {error, isLoading}] = useRegisterUserMutation()

        if (isLoading) {
        return <Loader/>
    }

    let messageText = error?.data?.detail
    let messageType = ERROR_TYPE

    const sendRegisterData = async values => {
        const answer = await registerUser(values)
        if (answer.status === 200) {
            navigate('/sms-entry')
        }
    }

    return (
        <div>
            <Message type={messageType} text={messageText}/>
            <FormContainer
                onSubmit={sendRegisterData}
                initialValues={{}}
                Component={RegisterForm}
            />
        </div>
    )


}

export default Registration;