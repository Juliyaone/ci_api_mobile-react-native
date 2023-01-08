import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, ScrollView, ImageBackground } from 'react-native';

const globalStyles = require("../screens/globalStyles");

function PrifileEditScreen(props) {
  return (
    <SafeAreaView style={globalStyles.container}>
			<ScrollView>
        <View>
          <Text>Форма редактирования профиля</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default PrifileEditScreen;