import {Field} from "react-final-form";
import React from "react";

export const SmsEntryForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label>phone</label>
                <Field name="phone" component="input" placeholder="phone"/>
            </div>

            <div>
                <label>code</label>
                <Field name="code" component="input" placeholder="code"/>
            </div>

            <div>
                <button type="submit">
                    Подтвердить
                </button>
            </div>

        </form>
    )
}