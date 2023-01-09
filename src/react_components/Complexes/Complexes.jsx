import React from 'react';
import Complex from "./Complex/Complex";
import * as styles from "./stylesComplexes";
import {nanoid} from "@reduxjs/toolkit";
import {ApiHandler} from "../Containers/ApiHandler";
import {useGetComplexesQuery} from "../../redux/api";
import {AuthContainer} from "../Containers/AuthContainer";


function Complexes({data}) {
    const header = 'Комплексы'
    const {
        viewed_complexes,
        not_viewed_complexes,
        today_complex
    } = data

    const getViewedComplexes = viewed_complexes.map((complex) => {
        return (
            <styles.ComplexItem>
                <Complex complex={complex} key={nanoid() + complex.id}/>
            </styles.ComplexItem>)
    })

    const getNotViewedComplexes = not_viewed_complexes.map((complex) => {
        return (
            <styles.ComplexItem>
                <Complex complex={complex} key={nanoid() + complex.id}/>
            </styles.ComplexItem>)
    })

    return (
        <styles.Content>
            <styles.Header>
                {header}
            </styles.Header>

            <div>Просмотренные: {viewed_complexes.length}</div>
            <styles.Complexes>
                {getViewedComplexes}
            </styles.Complexes>

            <div>Посмотреть сегодня:</div>
            <styles.Complexes>
                <styles.ComplexItem>
                    <Complex complex={today_complex}/>
                </styles.ComplexItem>
            </styles.Complexes>

            <div>Не просмотренные: {not_viewed_complexes.length}</div>
            <styles.Complexes>
                {getNotViewedComplexes}
            </styles.Complexes>

        </styles.Content>);
}
const HandlerContainer = () => {
    return <ApiHandler func={useGetComplexesQuery} Component={Complexes}/>
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={HandlerContainer}/>
}

export default WrappedAuthContainer;