import {Field} from "react-final-form";
import React from "react";

export const EditProfileForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>UserName</label>
                <Field name="username" component="input" placeholder="UserName"/>
            </div>

            <div>
                <label>phone</label>
                <Field name="phone" component="input" placeholder="phone"/>
            </div>

            <div>
                <label>email</label>
                <Field name="email" component="input" placeholder="email"/>
            </div>

            <div>
                <button type="submit">
                    Изменить данные
                </button>
            </div>

        </form>
    )
}
