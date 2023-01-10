import React from "react";
import {PasswordField} from "../Fields/PasswordField";


export const EditPasswordForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <PasswordField label="Old password" placeholder="Old password" name="old_password"/>
            <PasswordField label="New password" placeholder="New password" name="password"/>
            <PasswordField label="New password" placeholder="New password2" name="password2"/>
            <div>
                <button type="submit">
                    Изменить пароль
                </button>
            </div>
        </form>
    )
}
