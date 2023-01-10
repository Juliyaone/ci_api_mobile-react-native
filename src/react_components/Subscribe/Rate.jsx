import {NavLink} from "react-router-dom";
import React from "react";


export const Rate = ({rate}) => {
    return (
        <div>
            <NavLink to={`/rates/${rate.id}`}>
                <div>Rate name: {rate.name}</div>
            </NavLink>
            <div>Price: {rate.price}</div>
        </div>
    )
}