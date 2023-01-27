import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import Header from '../components/header/Header';

const globalStyles = require("../screens/globalStyles");

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View>
        <Header/>
        <Text>
          Главный экран с будильниками и рейтингом
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;