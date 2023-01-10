import {useNavigate} from "react-router-dom";
import React from "react";
import {FormContainer} from "./Forms/FormContainer";
import {SmsEntryForm} from "./Forms/SmsEntryForm";
import {useSendSmsCodeMutation} from "../redux/api";
import {saveTokenToStorage} from "../auth/tokenStorage";
import Message, {ERROR_TYPE} from "./Message/Message";
import Loader from "./Loader";


function SmsEntry({phone}) {
    const [sendSmsCode, {error, isLoading}] = useSendSmsCodeMutation()
    const navigate = useNavigate()

    if (isLoading) {
        return <Loader/>
    }

    let messageText = error?.data?.detail
    let messageType = ERROR_TYPE

    const sendApproveSmsCode = async values => {
        const answer = await sendSmsCode(values)
        if (answer.data.token) {
            await saveTokenToStorage(answer.data.token)
            navigate('/profile')
        } else {
            messageText = 'Token not received'
            console.error(messageText)
        }
    }

    const initialValues = {phone: phone, code: ''}

    return (
        <div>
            <Message type={messageType} text={messageText}/>
            <FormContainer
                onSubmit={sendApproveSmsCode}
                initialValues={initialValues}
                Component={SmsEntryForm}
            /></div>
    )
}

export default SmsEntry;