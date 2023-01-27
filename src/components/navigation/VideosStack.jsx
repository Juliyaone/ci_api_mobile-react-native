import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VideosScreenContainer from '../../screens/videos/VideosScreensContainer';
import СomplexScreen from '../../screens/complex/СomplexScreen';


const Stack = createNativeStackNavigator();


function VideosStack() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="СomplexScreen" component={СomplexScreen}/>
      <Stack.Screen name="VideosScreen" component={VideosScreenContainer}/>
    </Stack.Navigator>
  );
}


export default VideosStack;