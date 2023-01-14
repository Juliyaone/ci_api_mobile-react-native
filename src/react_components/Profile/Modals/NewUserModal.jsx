import React from 'react';

function NewUserModal({user, hello_video}) {
    return (
        <div>
            <p>Поздравляю, {user.username} , мы дарим вам пробные 7 дней</p>
            <p>И тут приветственное видео {hello_video.id} {hello_video.name}</p>
        </div>
    );
}

export default NewUserModal;