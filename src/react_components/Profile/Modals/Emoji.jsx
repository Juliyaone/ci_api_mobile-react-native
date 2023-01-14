import React from 'react';

function Emoji({id, code, name}) {
    return (
        <div>
            <p>ID: {id}</p>
            <p>CODE: {code}</p>
            <p>NAME: {name}</p>
        </div>
    );
}

export default Emoji;