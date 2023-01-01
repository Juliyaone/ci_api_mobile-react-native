import React from 'react';
import cl from './Complex.module.css';
import {NavLink} from "react-router-dom";


function Complex(props) {

    return (
        <div className={cl.item}>
            <NavLink to={`/videos/${props.complex.id}`}>
                {props.complex.id}
                {props.complex.name}
                {props.complex.number}
                {props.complex.description}
                {props.complex.duration}
            </NavLink>
        </div>
    );
}

export default Complex;
