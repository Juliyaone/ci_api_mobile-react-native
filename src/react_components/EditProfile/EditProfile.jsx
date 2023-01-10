import React from 'react';
import {FormContainer} from "../Forms/FormContainer";
import {EditProfileForm} from "../Forms/EditProfileForm";

import {EditPasswordForm} from "../Forms/EditPasswordForm";


export const EditProfile = ({user, editUserData, editPassword}) => {

    return (
        <div>
            <div>
                Username: {user.username}
            </div>
            <div>
                Phone: {user.phone}
            </div>
            <div>
                Email: {user.email}
            </div>
            <FormContainer
                onSubmit={editUserData}
                initialValues={user}
                Component={EditProfileForm}/>

            <FormContainer
                onSubmit={editPassword}
                initialValues={{}}
                Component={EditPasswordForm}/>
        </div>
    );
}
