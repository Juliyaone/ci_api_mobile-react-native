import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import Header from '../components/header/Header';
import globalStyles from "./globalStyles";

function AlarmScreen(props) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header/>
        <Text>Будильник</Text>
      </View>
    </SafeAreaView>
  );
}

export default AlarmScreen;