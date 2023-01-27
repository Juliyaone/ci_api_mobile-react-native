import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Header from '../components/header/Header';

const globalStyles = require("./globalStyles");

function NotificationsScreen(props) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header/>
      <Text>
        Уведомления
      </Text>
    </View>
    </SafeAreaView>
  );
}

export default NotificationsScreen;