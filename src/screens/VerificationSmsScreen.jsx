import React, { createContext, useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { AuchContext } from '../context/AuchContext';


function VerificationScreen({navigation}) {

  const [ number1, setNumber1 ] = useState(null);
  const [ number2, setNumber2 ] = useState(null);
  const [ number3, setNumber3 ] = useState(null);
  const [ number4, setNumber4 ] = useState(null);


  const { verification } = useContext( AuchContext );

  return (
    <View style={styles.box}>
      <Text>Верификация</Text>
      <Text>{verification}</Text>


          <TextInput
          style={styles.input}
          value={number1}
          placeholder="1"
          onChangeText={(text)=>{setNumber1(text)}}
          />

          <TextInput
          style={styles.input}
          value={number2}
          placeholder="2"
          onChangeText={(text)=>{setNumber2(text)}}
          />

          <TextInput
          style={styles.input}
          value={number3}
          placeholder="3"
          onChangeText={(text)=>{setNumber3(text)}}
          />

          <TextInput
          style={styles.input}
          value={number4}
          placeholder="4"
          onChangeText={(text)=>{setNumber4(text)}}
          />

          <Button
          onPress={() => {
            verification(
              number1,
              number2,
              number3,
              number4
              );
            navigation.navigate('Profile');
          }}
          style={styles.button}
          title="Войти"
          accessibilityLabel="Войти"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#bbb',
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 10
  },
  button: {
    borderWidth: '1px',
    borderRadius: 40,
    color: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10
  }
})

export default VerificationScreen;