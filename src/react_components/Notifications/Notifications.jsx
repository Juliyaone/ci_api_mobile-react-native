import React from 'react';
import cl from './Notifications.module.css';



function Notifications(props) {

    let notifications = props.store.getState().notifications

    return (
        <div className={cl.content}>
            <h1>{notifications.header}</h1>
        </div>
    );
}

export default Notifications;