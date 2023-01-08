import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
console.log(createDrawerNavigator);

import ProfileScreen from "../../screens/ProfileScreen";
import NotificationsScreen from "../../screens/NotificationsScreen";
import FeedbackScreen from "../../screens/FeedbackScreen";
import HelpScreen from "../../screens/HelpScreen";

const Drawer = createDrawerNavigator();


function AppStack() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} >
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Feedback" component={FeedbackScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
}

export default AppStack;