import React from 'react';
import cl from './Complex.module.css';
import {NavLink} from "react-router-dom";


function Complex(props) {

    return (
        props.complex
            ? <div className={cl.item}>
            <NavLink to={`/videos/${props.complex.id}`}>
                <p>ID: {props.complex.id}</p>
                <p>NAME: {props.complex.name}</p>
                <p>NUMBER: {props.complex.number}</p>
                <p>DESCRIPTION: {props.complex.description}</p>
                <p>DURATION: {props.complex.duration} minutes</p>
            </NavLink>
        </div>
            : null
    );
}

export default Complex;