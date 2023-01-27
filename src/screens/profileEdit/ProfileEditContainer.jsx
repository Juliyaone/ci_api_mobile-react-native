// import React from 'react';
// import {useGetMeQuery, useEditProfileMutation} from "../../redux/api";
// import {SafeAreaView} from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// import Loader from "../../components/loader/Loader";
// import Message, {ERROR_TYPE, SUCCESS_TYPE} from "../../message/Message";
// import ProfileEditScreen from "./ProfileEditScreen";


// const ProfileEditContainer = () => {
//     const navigation = useNavigation();

//     const {data: user, error: userError, isLoading: userLoading } = useGetMeQuery();

//     const [sendEditProfile, { data: profileData, error: profileError, isLoading: profileIsLoading}]= useEditProfileMutation()



//     if (userLoading || profileIsLoading) {
//         return <Loader/>
//     }
//     let messageText;

//     if (userError) {
//         messageText = userError.data?.detail
//     }

//     if (profileError) {
//         messageText = profileError.data?.detail
//     }



//     let messageType = ERROR_TYPE;

//     if (profileData) {
//         messageType = SUCCESS_TYPE
//         messageText = 'Профиль изменен'
//     }


//     const editUserData = async values => {
//         await sendEditProfile(values);
//         navigation.navigate('Profile');
//     }


//     return (
//         <>
//             <SafeAreaView>
//                 <Message type={messageType} text={messageText}/>
//             </SafeAreaView>

//                 <ProfileEditScreen
//                     user={user}
//                     editUserData={editUserData}
//                 />
//         </>
//     )
// }


// export default ProfileEditContainer;