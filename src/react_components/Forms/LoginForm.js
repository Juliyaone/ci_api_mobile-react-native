import {Field} from "react-final-form";
import React from "react";

export const LoginForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>phone</label>
                <Field name="phone" component="input" placeholder="phone"/>
            </div>

            <div>
                <label>password</label>
                <Field name="password" component="input" placeholder="password"/>
            </div>

            <div>
                <button type="submit">
                    Войти
                </button>
            </div>

        </form>
    )
}