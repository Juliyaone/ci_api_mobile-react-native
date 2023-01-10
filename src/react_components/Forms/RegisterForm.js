import {Form} from "formik";
import React from "react";
import {PhoneField} from "../Fields/PhoneField";
import {PasswordField} from "../Fields/PasswordField";
import {SubmitButton} from "../Fields/SubmitButton";
import {InputField} from "../Fields/InputField";
import {EmailField} from "../Fields/EmailField";


export const RegisterForm = () => {
    return (
        <Form>
            <InputField name="username" component="input" placeholder="username"/>
            <InputField name="last_name" component="input" placeholder="last_name"/>
            <InputField name="third_name" component="input" placeholder="third_name"/>
            <PhoneField name="phone" component="input" placeholder="phone"/>
            <EmailField name="email" component="input" placeholder="email"/>
            <PasswordField name="password" component="password" placeholder="password"/>
            <PasswordField name="password2" component="password" placeholder="password2"/>
            <InputField name="gender" component="input" placeholder="gender"/>
            <SubmitButton text="Зарегистрироваться"/>
        </Form>
    )
}