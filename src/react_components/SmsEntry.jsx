import {useNavigate} from "react-router-dom";
import React from "react";
import {FormContainer} from "./Forms/FormContainer";
import {SmsEntryForm} from "./Forms/SmsEntryForm";
import {useSendSmsCodeMutation} from "../redux/api";
import {saveTokenToStorage} from "../auth/tokenStorage";
import Message, {ERROR_TYPE} from "./Message/Message";


function SmsEntry({phone}) {
    const [sendSmsCode, {error}] = useSendSmsCodeMutation()
    const navigate = useNavigate()

    const sendApproveSmsCode = async values => {
        const answer = await sendSmsCode(values)
        if (answer.data.token) {
            await saveTokenToStorage(answer.data.token)
            navigate('/profile')
        } else {
            console.error('Token not received')
        }
    }
    const initialValues = {phone: phone, code: ''}
    return (
        <div>
            <Message type={ERROR_TYPE} text={error?.data?.detail}/>
            <FormContainer
                onSubmit={sendApproveSmsCode}
                initialValues={initialValues}
                Component={SmsEntryForm}
            /></div>
    )
}

export default SmsEntry;