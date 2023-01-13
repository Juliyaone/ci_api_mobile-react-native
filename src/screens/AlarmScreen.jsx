import React from 'react';
import { View, Text } from 'react-native';
import Header from '../components/header/Header';

function AlarmScreen(props) {
  return (
    <View>
      <Header/>
      <Text>Будильник</Text>
    </View>
  );
}

export default AlarmScreen;