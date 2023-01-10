import React from "react";
import {Formik} from "formik";


export const FormContainer = ({onSubmit, initialValues, Component, enableReinitialize=false}) => {

    return (
        <Formik
            enableReinitialize={enableReinitialize}
            initialValues={initialValues}
            onSubmit={onSubmit}>
            <Component/>
        </Formik>
    )
}