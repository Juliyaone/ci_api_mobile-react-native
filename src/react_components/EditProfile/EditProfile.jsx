import React from 'react';
import {FormContainer} from "../Forms/FormContainer";
import {EditProfileForm} from "../Forms/EditProfileForm";

import {EditPasswordForm} from "../Forms/EditPasswordForm";


export const EditProfile = ({user, editUserData, editPassword}) => {
    return (
        <div>
            <FormContainer
                onSubmit={editUserData}
                initialValues={user}
                Component={EditProfileForm}
                enableReinitialize={true}
            />
            <FormContainer
                onSubmit={editPassword}
                initialValues={{}}
                Component={EditPasswordForm}
            />
        </div>
    );
}
