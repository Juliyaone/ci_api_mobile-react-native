import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import Header from '../components/header/Header';
const globalStyles = require("../screens/globalStyles");


function SubscribeScreen(props) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header/>
      <Text>Страница подписки</Text>
      </View>
    </SafeAreaView>
  );
}

export default SubscribeScreen;