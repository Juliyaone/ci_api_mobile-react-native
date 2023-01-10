import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from "../../screens/ProfileScreen";
// import PrifileEditScreen from "../../screens/PrifileEditScreen";


import NotificationsScreen from "../../screens/NotificationsScreen";
import FeedbackScreen from "../../screens/FeedbackScreen";
import HelpScreen from "../../screens/HelpScreen";
import CustomDrawer from "../CustomDrawer";


import ProfileIcon from "../../img/icons/profile.svg"
import NotificationsIcon from "../../img/icons/notifications.svg";
import CallbackIcon from "../../img/icons/callback.svg"
import InfoIcon from "../../img/icons/info.svg"
import TabNavigator from './TabNavigator';

const globalStyles = require("../../screens/globalStyles");


const Drawer = createDrawerNavigator();


function AppStack() {
  return (
    <Drawer.Navigator 
    drawerContent={props => <CustomDrawer {...props} />} 
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#F8E9E9',
      drawerLabelStyle: {
        marginLeft: -25,
        color: "#111111",
        fontFamily: "Evolventa",
        fontWeight: "600",
        fontSize: 16,
      },
    }}
    >
      {/* <Drawer.Screen name="Главная" component={TabNavigator} /> */}

      <Drawer.Screen name="Профиль" component={TabNavigator} options={{
        drawerIcon: ({color}) => (
          <ProfileIcon style={{marginRight: 10, width:'24', height: '24', color:{color}}}/>
        )
      }}/>

      <Drawer.Screen name="Уведомления" component={NotificationsScreen} options={{
        drawerIcon: ({color}) => (
          <NotificationsIcon style={{marginRight: 10, width:'24', height: '24', color:{color}}}/>
        )
      }}/>
      <Drawer.Screen name="Обратная связь" component={FeedbackScreen} options={{
        drawerIcon: ({color}) => (
          <CallbackIcon style={{marginRight: 10, width:'24', height: '24', color:{color}}}/>
        )
      }}/>
      <Drawer.Screen name="Помощь" component={HelpScreen} options={{
        drawerIcon: ({color}) => (
          <InfoIcon style={{marginRight: 10, width:'24', height: '24', color:{color}}}/>
        )
      }}/>
    </Drawer.Navigator>
  );
}

export default AppStack;