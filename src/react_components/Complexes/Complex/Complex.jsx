import React from 'react';
import cl from './Complex.module.css';
import {NavLink} from "react-router-dom";


function Complex(props) {

    return (
        props.complex
            ? <div className={cl.item}>
            <NavLink to={`/videos/${props.complex.id}`}>
                {props.complex.id}
                {props.complex.name}
                {props.complex.number}
                {props.complex.description}
                {props.complex.duration}
            </NavLink>
        </div>
            : null
    );
}

export default Complex;