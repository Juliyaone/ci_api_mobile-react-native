import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getTokenFromStorage } from '../../auth/tokenStorage';
import AuthStack from "./AuthStack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import AppStack from "./AppStack";
function AppNav(props) {

  const token = AsyncStorage.getItem("userToken", token)
  console.log(token);

  return (
    <NavigationContainer>
      { (token === null) ?
      <AppStack />
      :
      <AuthStack />
      }
    </NavigationContainer>
  );
}

export default AppNav;