import React from 'react';
import * as styles from "./stylesSubscibe";
import {nanoid} from "@reduxjs/toolkit";
import {ApiHandler} from "../Containers/ApiHandler";
import {useGetRatesQuery} from "../../redux/api";
import {AuthContainer} from "../Containers/AuthContainer";


function Subscribe({data}) {

    const getRatesMap = () => {
        return (
            data.map(
                (rate) => <p key={nanoid() + rate.id}>{rate.name} {rate.price}</p>
            )
        )
    }

    return (
        <styles.Content>
            <h1>Rates</h1>
            <div>
                {getRatesMap()}
            </div>
        </styles.Content>
    );
}

const HandlerContainer = () => {
    return <ApiHandler func={useGetRatesQuery} Component={Subscribe}/>
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={HandlerContainer}/>
}

export default WrappedAuthContainer;
