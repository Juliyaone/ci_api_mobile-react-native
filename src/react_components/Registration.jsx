import React from "react";
import {useNavigate} from "react-router-dom";
import {FormContainer} from "./Forms/FormContainer";
import {RegisterForm} from "./Forms/RegisterForm";
import {useRegisterUserMutation} from "../redux/api";
import Message, {ERROR_TYPE} from "./Message/Message";
import Loader from "./Loader";


function Registration() {
    const navigate = useNavigate()

    const [registerUser, {error, isLoading, isSuccess}] = useRegisterUserMutation()

    if (isLoading) {
        return <Loader/>
    }
    if (isSuccess) {
        navigate('/sms-entry')
    }
    let messageText = error?.data?.detail
    let messageType = ERROR_TYPE

    const sendRegisterData = async values => {
        const answer = await registerUser(values)
        if (answer.status === 200) {
            navigate('/sms-entry')
        }
    }
    const initialValues = {
        username: '',
        last_name: '',
        third_name: '',
        phone: '',
        email: '',
        password: '',
        password2: '',
        gender: '',

    }
    return (
        <div>
            <Message type={messageType} text={messageText}/>
            <FormContainer
                onSubmit={sendRegisterData}
                initialValues={initialValues}
                Component={RegisterForm}
            />
        </div>
    )


}

export default Registration;