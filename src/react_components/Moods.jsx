import React from "react";
import {nanoid} from "@reduxjs/toolkit";
import {ApiHandler} from "./Containers/ApiHandler";
import {useGetMoodsQuery} from "../redux/api";
import {AuthContainer} from "./Containers/AuthContainer";


function Moods({data}) {

    const getAllMoods = () => {
        return data.map(
            (mood) => <p key={nanoid() + mood.id}>{mood.name} {mood.code}</p>
        )
    }

    return (
        <div>
            {getAllMoods()}
        </div>
    )
}

const HandlerContainer = () => {
    return <ApiHandler func={useGetMoodsQuery} Component={Moods}/>
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={HandlerContainer}/>
}

export default WrappedAuthContainer;