import React from 'react';
import cl from './Video.module.css';


function Video(props) {

    return (
        <div className={cl.item}>
            <p>ID: {props.id}</p>
            <p>FILENAME: {props.file_name}</p>
            <p>NAME: {props.name}</p>
            <p>DESCRIPTION: {props.description}</p>
            <p>DURATION: {props.duration}</p>
            <p>NUMBER: {props.number}</p>
        </div>
    );
}

export default Video;