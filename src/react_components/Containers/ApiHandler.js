import Loader from "../Loader";
import {ErrorMessage} from "../Message/Message";
import React from "react";

export const ApiHandler = ({func, Component, user}) => {
    const {
        data,
        isLoading,
        error
    } = func()

    if (isLoading) {
        return <Loader/>
    }

    if (error) {
        return <ErrorMessage text={error.data.detail}/>
    }

    if (!data) {
        return <ErrorMessage text='No data received'/>
    }

    return <Component data={data} user={user}/>
}
