import React from 'react';
import * as styles from "./stylesSubscibe";


export const Subscribe = ({userRate, rates, unsubscribe}) => {


    return (
        <styles.Content>
            <h1>Rates</h1>
            <div>Current user rate: {userRate.name}</div>
            <div>
                {rates}
            </div>
            <button onClick={unsubscribe}>
                Отписаться
            </button>
        </styles.Content>
    );
}
