import {Form} from "react-final-form";
import React from "react";

export const FormContainer = ({onSubmit, initialValues, Component}) => {
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={
                ({handleSubmit}) => <Component handleSubmit={handleSubmit}/>
            }
        />
    )
}