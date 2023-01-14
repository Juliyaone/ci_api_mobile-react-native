import React from 'react';
import {nanoid} from "@reduxjs/toolkit";
import Emoji from "./Emoji";

function ChangeUserMoodModal({user, emojies}) {
    const emojiesArray = emojies.map(
        (emoji) => (
            <Emoji emoji={emoji} key={nanoid() + emoji.id}/>
        )
    )

    return (
        <div>
            <p>{user.username}, выберите настроение:</p>
            {emojiesArray}
        </div>
    );
}

export default ChangeUserMoodModal;