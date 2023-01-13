import React from 'react';

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/LoginScreen";
import RegistrationScreen from '../../screens/RegistrationScreen';
import VerificationScreen from "../../screens/VerificationSmsScreen";
import AuchScreen from "../../screens/AuchScreen";
import ForgotScreen from '../../screens/ForgotScreen';
import HomeScreen from '../../screens/HomeScreen';


const Stack = createNativeStackNavigator();


function AuchStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auch" component={AuchScreen} />
      <Stack.Screen name="Login" component={LoginScreen}  />
      <Stack.Screen name="Registration" component={RegistrationScreen}/>
      <Stack.Screen name="Verification" component={VerificationScreen}/>
      <Stack.Screen name="Forgot" component={ForgotScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>

    </Stack.Navigator>
  );
}

export default AuchStack;