import React from 'react';
import cl from './Videos.module.css';


export const Videos = ({user, videos}) => {

    return (
        <div className={cl.content}>
            <div className={cl.header}>Videos content</div>
            <div className={cl.complexes}>
                {videos}
            </div>
        </div>
    );
}
