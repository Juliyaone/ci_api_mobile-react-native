import React from "react";
import {PhoneField} from "../Fields/PhoneField";
import {Form} from "formik";
import {PasswordField} from "../Fields/PasswordField";
import {SubmitButton} from "../Fields/SubmitButton";


export const LoginForm = () => {
    return (
        <Form>
            <PhoneField name="phone" component="input" placeholder="phone"/>
            <PasswordField name="password" component="password" placeholder="password"/>
            <SubmitButton text="Войти"/>
        </Form>
    )
}