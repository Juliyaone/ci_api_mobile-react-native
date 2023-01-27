import React from 'react';
import {useCheckFirstEntryQuery} from "../../redux/api";

import Loader from "../../components/loader/Loader";
import { useNavigation } from '@react-navigation/native';

// import ModalsContainer from '../../components/container/ModalContainer';


export const ModalsContainer = ({Component}) => {
    const navigation = useNavigation();

    const {
        data,
        isLoading
    } = useCheckFirstEntryQuery()

    if (isLoading) {
        return <Loader/>
    }

    const {user, emojies, hello_video, new_user, is_expired, today_first_entry} = data;

    if (user && new_user && hello_video) {
        navigation.navigate('NewUserModal', {user, hello_video});
    } else if (user && is_expired) {
       navigation.navigate('ExpiredUserModal', user={user});
    } else if (user && today_first_entry && emojies) {
       navigation.navigate('ChangeUserMoodModal', { user, emojies});
    } else {
        return <Component user={user}/>
    }
}
