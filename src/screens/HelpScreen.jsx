import React from 'react';
import { Text, View} from 'react-native';
import Header from '../components/header/Header';

function HelpScreen(props) {
  return (
    <View>
      <Header/>
      <Text>
        Помощь
      </Text>
    </View>
  );
}

export default HelpScreen;