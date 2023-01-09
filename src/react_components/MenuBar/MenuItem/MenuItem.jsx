import React from 'react';
import cl from './MenuItem.module.css';
import {NavLink} from "react-router-dom";


function MenuItem(props) {
    return (
        <div className={cl.item}>
            <NavLink to={props.menu.url} className={
                ({isActive}) => (isActive ? cl.active : cl.inactive)
            }>
                {props.menu.name}
            </NavLink>
        </div>
    );
}

export default MenuItem;