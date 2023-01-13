import React from 'react';
import {View, Text, SafeAreaView } from 'react-native';
import globalStyles from "./globalStyles";
import Header from '../components/header/Header';


function СomplexScreen(props) {
  return (
     <SafeAreaView style={globalStyles.container}>
      <View>
        <Header/>
      <Text>Страница комплекса</Text>
    </View>
    </SafeAreaView>
  );
}

export default СomplexScreen;