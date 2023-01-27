import React, {useContext, useEffect} from 'react';
import { NavigationContainer } from "@react-navigation/native";

import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

// import {AuthContext} from "../../auth/AuthContext";
import {useGetMeQuery} from "../../redux/usersApi";


import Message, {ERROR_TYPE} from "../../message/Message";
import Loader from "../../components/loader/Loader";


const AppNav = (props) => {

  const {data: user, error, isLoading, isSuccess} = useGetMeQuery();

      if (isLoading) {
        <Loader/>
      }
      let message;
      if(error) {
        message = error.data?.detail;
        console.log(message);
      }

    return (
      <NavigationContainer>

          {
          (!user || error) 
          ?
            <AuthStack/>
          :
            <AppStack/>
          }

        </NavigationContainer>
    )

   
}

export default AppNav;

