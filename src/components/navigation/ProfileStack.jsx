import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileContainer from '../../screens/profile/ProfileContainer';
import ProfileEditScreen from '../../screens/profileEdit/ProfileEditScreen';
import SubscribeScreen from '../../screens/SubscribeScreen';
import NewUserModal from "../../screens/modal/NewUserModal";
import ExpiredUserModal from "../../screens/modal/ExpiredUserModal";
import ChangeUserMoodModal from "../../screens/modal/ChangeUserMoodModal";
const Stack = createNativeStackNavigator();


function ProfileStack() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileContainer}/>
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen}/>
      <Stack.Screen name="Subscribe" component={SubscribeScreen}/>
      <Stack.Screen name="NewUserModal" component={NewUserModal}/>
      <Stack.Screen name="ExpiredUserModal" component={ExpiredUserModal}/>
      <Stack.Screen name="ChangeUserMoodModal" component={ChangeUserMoodModal}/>
    </Stack.Navigator>
  );
}


export default ProfileStack;