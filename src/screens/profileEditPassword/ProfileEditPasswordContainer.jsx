import React from 'react';
import {useGetMeQuery, useEditPasswordMutation} from "../../redux/usersApi";
import Loader from "../../components/loader/Loader";
import Message, {ERROR_TYPE, SUCCESS_TYPE} from "../../message/Message";
import ProfileEditPassword from "./ProfileEditPassword";

const ProfileEditPasswordContainer = () => {
      const {data: user, error: userError, isLoading: userLoading } = useGetMeQuery();

      const [sendEditPassword, { data: passwordData, error: passwordError, isLoading: passwordIsLoading }] = useEditPasswordMutation()


      if (userLoading || passwordIsLoading) {
        return <Loader/>
      }

      let messageText;
      let messageType = ERROR_TYPE;


      if (userError) {
        messageText = userError.data?.detail;
      }

      if (passwordData === null) {
        messageType = SUCCESS_TYPE;
        messageText = 'Пароль изменен';
      }

      if (passwordError) {
        messageText = passwordError.data?.detail;
      }

      const editPassword = async values => {
        await sendEditPassword(values);
      }

   return (
        <>
            <Message type={messageType} text={messageText}/>
            <ProfileEditPassword
                user={user}
                editPassword={editPassword}
            />
        </>
    )
}

export default ProfileEditPasswordContainer;
