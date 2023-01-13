import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Header from '../components/header/Header';

const globalStyles = require("./globalStyles");

function ForgotScreen(props) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header/>
      <Text>Страница восстановления пароля</Text>
    </View>
    </SafeAreaView>
  );
}

export default ForgotScreen;