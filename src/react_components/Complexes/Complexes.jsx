import React, {useEffect} from 'react';
import * as styles from "./stylesComplexes";
import {useDispatch, useSelector} from "react-redux";
import {getComplexes} from "../../redux/thunks/complexThunks";
import Complex from "./Complex/Complex";

// TODO добавить в навигацию
function Complexes(props) {
    const messages = useSelector(store => store.messagesReducer)
    const {
        viewed_complexes,
        not_viewed_complexes,
        today_complex
    } = useSelector(store => store.complexesReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComplexes())
    }, [dispatch])

    const getViewedComplexes = viewed_complexes?.map((complex) => {
        return (
            <styles.ComplexItem>
                <Complex complex={complex} key={complex.id}/>
            </styles.ComplexItem>)
    })

    const getNotViewedComplexes = not_viewed_complexes.map((complex) => {
        return (
            <styles.ComplexItem>
                <Complex complex={complex} key={complex.id}/>
            </styles.ComplexItem>)
    })

    return (
        <styles.Content>
            <styles.Header>
                {props.header}
            </styles.Header>
            <View>MESSAGE: type: [{messages.messageType}] text: [{messages.message}]</View>

            <View>Просмотренные: {viewed_complexes.length}</View>
            <styles.Complexes>
                {getViewedComplexes}
            </styles.Complexes>

            <View>Посмотреть сегодня:</View>
            <styles.Complexes>
                <styles.ComplexItem>
                    <Complex complex={today_complex}/>
                </styles.ComplexItem>
            </styles.Complexes>

            <View>Не просмотренные: {not_viewed_complexes.length}</View>
            <styles.Complexes>
                {getNotViewedComplexes}
            </styles.Complexes>

        </styles.Content>);
}

export default Complexes;
