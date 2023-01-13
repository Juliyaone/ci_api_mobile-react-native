import React, {useContext, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

import {AuthContext} from "../../auth/AuthContext";
import { useGetMeQuery } from '../../redux/api';


function AppNav(props) {
  useGetMeQuery(); 

  const {userToken} = useContext(AuthContext);


  return (
    <NavigationContainer>
      
      {userToken !== null ? 
        <AppStack/>
        :
        <AuthStack />
      }




    </NavigationContainer>
  );
}

export default AppNav;