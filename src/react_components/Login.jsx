import React from "react";
import {useNavigate} from "react-router-dom";
import {FormContainer} from "./Forms/FormContainer";
import {LoginForm} from "./Forms/LoginForm";
import {useGetMetaInfoQuery, useLoginUserMutation} from "../redux/api";
import {saveTokenToStorage} from "../auth/tokenStorage";
import Message, {ERROR_TYPE} from "./Message/Message";
import Loader from "./Loader";


function Login() {

    const [sendLoginUserDataMutation, {error, isLoading}] = useLoginUserMutation()
    const navigate = useNavigate()
    if (isLoading) {
        return <Loader/>
    }

    const sendLoginData = async values => {
        const answer = await sendLoginUserDataMutation(values)
        if (answer.data.token) {
            const token = answer.data.token.toString()
            await saveTokenToStorage(token)
            navigate('/profile')
        } else {
            console.error('Token not received')
        }
    }

    // TODO тестовые данные, удалить в релизе:
    const initialValues = {phone: '1234567890', password: 'asd'}

    return (
        <div>
            <Message type={ERROR_TYPE} text={error?.data?.detail}/>
            <FormContainer
                onSubmit={sendLoginData}
                initialValues={initialValues}
                Component={LoginForm}
            />
        </div>
    )
}

export default Login;