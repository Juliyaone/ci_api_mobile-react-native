import React from 'react';
import cl from './Complex.module.css';
import {NavLink} from "react-router-dom";


function Complex({complex}) {

    return (
        complex
            ? <div className={cl.item}>
            <NavLink to={`/videos/${complex.id}`}>
                <p>ID: {complex.id}</p>
                <p>NAME: {complex.name}</p>
                <p>NUMBER: {complex.number}</p>
                <p>DESCRIPTION: {complex.description}</p>
                <p>DURATION: {complex.duration} minutes</p>
            </NavLink>
        </div>
            : null
    );
}

export default Complex;