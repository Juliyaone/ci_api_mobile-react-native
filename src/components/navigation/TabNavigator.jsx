import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../../screens/HomeScreen';
import AlarmScreen from '../../screens/AlarmScreen';
import СomplexScreen from '../../screens/СomplexScreen';
import NotificationsScreen from '../../screens/NotificationsScreen';
import ProfileStack from '../navigation/ProfileStack';


import HomeIcon from '../../img/icons/home.svg'
import ProfileIcon from "../../img/icons/profile.svg"
import NotificationsIcon from "../../img/icons/notifications.svg";
import AlarmIcon from '../../img/icons/alarm.svg'
import FlashIcon from '../../img/icons/flash-tab.svg'




const Tab = createBottomTabNavigator();


function TabNavigator(props) {
  return (
      <Tab.Navigator screenOptions={{
          headerShown: false,
          topBarShowLabel: false,
          tabBarStyle: {
            padding: 10,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: '#ffffff',
            height: 70,
          },
        }}
        // tabBarOptions={{
        //     showLabel: false,
        //     activeBackgroundColor: '#f7cdcb',
        //     inactiveBackgroundColor: 'transparent',
        //     tabStyle:{ 
        //         height: 50,
        //         width: 50,
        //         borderRadius: 50,
        //         // marginRight: '10%',
        //         // marginLeft: '10%',
        //     },
        //     style:{
        //         position:'absolute',
        //         bottom:0,
        //         right:0,
        //         left:0,
        //         elevation:0,
        //         height: 50,
        //         width: 50
        //     },
        // }}
        
        
    >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color }) => (
            <HomeIcon style={{width:'24', height: '24', color:{color}}}/>
          )
        }}
        />

        <Tab.Screen name="Будильник" component={AlarmScreen}  options={{
          tabBarIcon: ({ color }) => (
            <AlarmIcon style={{ width:'24', height: '24', color:{color}}}/>
          )
        }}/>
        <Tab.Screen name="Зарядка" component={СomplexScreen}  options={{
          tabBarIcon: ({ color }) => (
            <FlashIcon style={{width:'24', height: '24', color:{color}}}/>
          )
        }}/>
        <Tab.Screen
          name="Профиль"
          component={ProfileStack}
          options={({route}) => ({
            tabBarStyle: {display: getTabBarVisibility(route), padding: 10,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: '#ffffff',
            height: 70},
            tabBarIcon: ({ color }) => (
              <ProfileIcon style={{ width:'24', height: '24', color:{color}}} />
            )
          })}
        />
        <Tab.Screen name="Уведомления" component={NotificationsScreen}  options={{
          tabBarIcon: ({ color }) => (
            <NotificationsIcon style={{ width:'24', height: '24', color:{color}}}/>
          )
        }}/>
      </Tab.Navigator>
  );
}

const getTabBarVisibility = (route) => {
  console.log(route);
  const routName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  console.log(routName);
  if(routName === 'ProfileEdit') {
    return 'none';
  }
return 'flex';
}

export default TabNavigator;