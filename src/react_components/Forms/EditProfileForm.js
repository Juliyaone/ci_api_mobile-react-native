import {Form} from "formik";

import React from "react";
import {InputField} from "../Fields/InputField";
import {PhoneField} from "../Fields/PhoneField";
import {EmailField} from "../Fields/EmailField";
import {SubmitButton} from "../Fields/SubmitButton";

export const EditProfileForm = () => {
    return (
        <Form>
            <InputField name="username" component="input" placeholder="username"/>
            <InputField name="last_name" component="input" placeholder="last_name"/>
            <InputField name="third_name" component="input" placeholder="third_name"/>
            <PhoneField name="phone" component="input" placeholder="phone"/>
            <EmailField name="email" component="input" placeholder="email"/>
            <SubmitButton text="Изменить данные"/>
        </Form>
    )
}
