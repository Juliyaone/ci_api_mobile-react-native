import React, {useEffect, useId} from 'react';
import Complex from "./Complex/Complex";
import * as styles from "./stylesComplexes";
import {useDispatch, useSelector} from "react-redux";
import {getComplexes} from "../../redux/thunks/complexThunks";


function Complexes(props) {
    const {
        viewed_complexes,
        not_viewed_complexes,
        today_complex
    } = useSelector(store => store.complexesReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getComplexes())
    }, [dispatch])

    let key_id = useId()
    const getViewedComplexes = viewed_complexes?.map((complex) => {
        return (
            <styles.ComplexItem>
                <Complex complex={complex} key={key_id + complex.id}/>
            </styles.ComplexItem>)
    })

    const getNotViewedComplexes = not_viewed_complexes.map((complex) => {
        return (
            <styles.ComplexItem>
                <Complex complex={complex} key={key_id + complex.id}/>
            </styles.ComplexItem>)
    })

    return (
        <styles.Content>
            <styles.Header>
                {props.header}
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

export default Complexes;