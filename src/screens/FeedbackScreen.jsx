import React from 'react';
import { Text, View } from 'react-native';
import Header from '../components/header/Header';


function FeedbackScreen(props) {
  return (
    <View>
      <Header/>
      <Text>
        Обратная связь
      </Text>
    </View>
  );
}

export default FeedbackScreen;