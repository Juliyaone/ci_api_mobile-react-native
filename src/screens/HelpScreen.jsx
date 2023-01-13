import React from 'react';
import { Text, View, SafeAreaView} from 'react-native';
import Header from '../components/header/Header';
const globalStyles = require("./globalStyles");

function HelpScreen(props) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
      <Header/>
      <Text>
        Помощь
      </Text>
    </View>
    </SafeAreaView>
  );
}

export default HelpScreen;