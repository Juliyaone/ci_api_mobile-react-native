import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../../screens/LoginScreen";
import VerificationSms from "../../screens/VerificationSmsScreen"
import RegistrationScreen from '../../screens/RegistrationScreen';
import AuchScreen from "../../screens/AuchScreen";
import ForgotScreen from '../../screens/ForgotScreen';
import HomeScreen from '../../screens/HomeScreen';
import AppStack from "../navigation/AppStack"


const Stack = createNativeStackNavigator();

function AuchStack({user}) {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Auch" component={AuchScreen} />
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Registration" component={RegistrationScreen}/>
      <Stack.Screen name="Forgot" component={ForgotScreen}/>
      <Stack.Screen name="Verification" component={VerificationSms}/>
      <Stack.Screen name="Home" component={AppStack}/>
    </Stack.Navigator>
  );
}

export default AuchStack;