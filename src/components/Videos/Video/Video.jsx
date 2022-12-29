import React from 'react';
import cl from './Video.module.css';


function Video(props) {
    return (
        <div className={cl.item}>
            {props.name}
        </div>
    );
}

export default Video;