import React from 'react';
import {NavLink} from "react-router-dom";

function ExpiredUserModal({user}) {
    return (
        <div>
            <p>
                {user.username}, ваша подписка истекла.
                <NavLink to='/subscribe'>
                    Возобновить
                </NavLink>
            </p>
        </div>
    );
}

export default ExpiredUserModal;