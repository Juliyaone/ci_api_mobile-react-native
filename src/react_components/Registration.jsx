import React from "react";
import {useNavigate} from "react-router-dom";
import {FormContainer} from "./Forms/FormContainer";
import {RegisterForm} from "./Forms/RegisterForm";
import {useRegisterUserMutation} from "../redux/api";
import Message, {ERROR_TYPE} from "./Message/Message";


function Registration() {
    const navigate = useNavigate()

    const [registerUser, {error}] = useRegisterUserMutation()

    const sendRegisterData = async values => {
        const answer = await registerUser(values)
        console.log(answer)
        if (answer.status === 200) {
            navigate('/sms-entry')
        } else {
            console.error(`Registration error: ${JSON.stringify(answer)}`)
        }
    }

    return (
        <div>
            <Message type={ERROR_TYPE} text={error?.data?.detail}/>
            <FormContainer
                onSubmit={sendRegisterData}
                initialValues={{}}
                Component={RegisterForm}
            />
        </div>
    )


}

export default Registration;