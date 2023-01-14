import React from 'react';
import {useCheckFirstEntryQuery} from "../../../redux/api";
import NewUserModal from "./NewUserModal";
import ExpiredUserModal from "./ExpiredUserModal";
import ChangeUserMoodModal from "./ChangeUserMoodModal";
import Loader from "../../Loader";


export const ModalsContainer = ({Component}) => {
    const {
        data,
        isLoading
    } = useCheckFirstEntryQuery()

    if (isLoading) {
        return <Loader/>
    }

    const {user, emojies, hello_video, new_user, is_expired, today_first_entry} = data

    if (user && new_user && hello_video) {
        return <NewUserModal user={user} hello_video={hello_video}/>
    } else if (user && is_expired) {
        return <ExpiredUserModal user={user}/>
    } else if (user && today_first_entry && emojies) {
        return <ChangeUserMoodModal user={user} emojies={emojies}/>
    } else {
        return <Component user={user}/>
    }
}
