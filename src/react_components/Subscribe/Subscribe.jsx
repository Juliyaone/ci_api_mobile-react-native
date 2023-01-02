import React, {useEffect, useId} from 'react';
import * as styles from "./stylesSubscibe";
import {useDispatch, useSelector} from "react-redux";
import {getRates} from "../../redux/thunks/ratesThunks";


function Subscribe() {

    const {items} = useSelector(store => store.ratesReducer)
    const dispatch = useDispatch()
    const key_id = useId()

    useEffect(() => {
        if (items.length === 0) {
            dispatch(getRates())
        }
    }, [dispatch, items])
    const getRatesMap = () => {
        return (
            items?.map(
                (rate) => <p key={rate.id + key_id}>{rate.name} {rate.price}</p>
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

export default Subscribe;