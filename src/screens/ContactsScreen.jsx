import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Header from '../components/header/Header';

const globalStyles = require("./globalStyles");

function ContactsScreen(props) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
      <Header/>
      <Text>
        Контакты
      </Text>
    </View>
    </SafeAreaView>
  );
}

export default ContactsScreen;