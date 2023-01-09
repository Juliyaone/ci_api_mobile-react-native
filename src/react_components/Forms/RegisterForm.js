import {Field} from "react-final-form";
import React from "react";

export const RegisterForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>UserName</label>
                <Field name="username" component="input" placeholder="UserName"/>
            </div>

            <div>
                <label>last_name</label>
                <Field name="last_name" component="input" placeholder="last_name"/>
            </div>

            <div>
                <label>third_name</label>
                <Field name="third_name" component="input" placeholder="third_name"/>
            </div>

            <div>
                <label>email</label>
                <Field name="email" component="input" placeholder="email"/>
            </div>

            <div>
                <label>phone</label>
                <Field name="phone" component="input" placeholder="phone"/>

            </div>

            <div>
                <label>password</label>
                <Field name="password" component="input" placeholder="password"/>
            </div>

            <div>
                <label>password2</label>
                <Field name="password2" component="input" placeholder="password2"/>
            </div>

            <div>
                <label>gender</label>
                <Field name="gender" component="input" placeholder="gender"/>
            </div>

            <div>
                <button type="submit">
                    Зарегистрироваться
                </button>
            </div>

        </form>
    )
}