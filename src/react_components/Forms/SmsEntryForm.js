import React from "react";
import {Form} from "formik";
import {PhoneField} from "../Fields/PhoneField";
import {SubmitButton} from "../Fields/SubmitButton";
import {InputField} from "../Fields/InputField";


export const SmsEntryForm = () => {
    return (
        <Form>
            <PhoneField name="phone" component="input" placeholder="phone"/>
            <InputField name="code" component="input" placeholder="code"/>
            <SubmitButton text="Подтвердить"/>
        </Form>
    )
}