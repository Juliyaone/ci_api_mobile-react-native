import React from 'react';
import cl from './Header.module.css';


function Header({text}) {

    return (
        <header className={cl.header}>
            <img src="/logo192.png" alt=""/>
            {text}
        </header>
    );
}

export default Header;