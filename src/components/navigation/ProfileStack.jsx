import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from '../../screens/ProfileScreen';
import ProfileEditScreen from '../../screens/ProfileEditScreen';
import SubscribeScreen from '../../screens/SubscribeScreen';

const Stack = createNativeStackNavigator();


function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen}/>
      <Stack.Screen name="Subscribe" component={SubscribeScreen}/>
    </Stack.Navigator>
  );
}


export default ProfileStack;