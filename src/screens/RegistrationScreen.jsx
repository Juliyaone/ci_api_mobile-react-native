import React, { useContext, useState } from 'react';
import { StyleSheet, Button, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { AuchContext } from '../context/AuchContext';
import {useSelector, useDispatch} from "react-redux";
import {createUser} from "../redux/actions"


function RegistrationScreen({navigation}) {

  const [username, setUsername] = useState(null);
  const [last_name, setLast_name] = useState(null);
  const [third_name, setThird_name] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [password2, setPassword2] = useState(null);
  const [gender, setGender] = useState(false);

  const { registration } = useContext(AuchContext)


  return (
    <View style={styles.container}>

      <View style={styles.wrapper}>
        <Text>{registration}</Text>
        <TextInput
          style={styles.input}
          value={username}
          autoFocus
          placeholder='Имя'
          onChangeText={(text)=>{setUsername(text)}}
          />
          <TextInput
          style={styles.input}
          value={last_name}
          placeholder='Отчество'
          onChangeText={(text)=>{setLast_name(text)}}
          />
          <TextInput
          style={styles.input}
          value={third_name}
          placeholder='Фамилия'
          onChangeText={(text)=>{setThird_name(text)}}
          />
          <TextInput
          style={styles.input}
          value={email}
          email
          placeholder='Email'
          onChangeText={(text)=>{setEmail(text)}}
          />
          <TextInput
          style={styles.input}
          value={phone}
          placeholder='+7(___)-__-__'
          onChangeText={(text)=>{setPhone(text)}}
          />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Пароль"
          secureTextEntry
          options={headerShow=false}
          onChangeText={(text)=>{setPassword(text)}}
          />
        <TextInput
          style={styles.input}
          value={password2}
          placeholder="Повторите пароль"
          secureTextEntry
          options={headerShow=false}
          onChangeText={(text)=>{setPassword2(text)}}
          />

          <TextInput
          style={styles.input}
          value={gender}
          placeholder="Выберите пол"
          options={headerShow=false}
          onChangeText={(text)=>{setGender(text)}}
          />
          
        <Button
          onPress={() => {
            registration(
              username,
              last_name,
              third_name,
              email,
              phone,
              password,
              password2,
              gender
              );
              navigation.navigate('Verification');

          }}
          style={styles.button}
          title="Зарегистрироваться"
          accessibilityLabel="Зарегистрироваться"
        />
      </View>

      <View>
         <Text>Вы уже зарегистрированы?</Text>
         <TouchableOpacity onPress={()=>{navigation.navigate('Login')}}>
          <Text style={styles.link}>Войти</Text>
         </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '50%'
  },
  input: {
    borderWidth: 1,
    borderRadius: 40,
    borderColor: '#bbb',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10
  },
  button: {
    borderWidth: '1px',
    borderRadius: 40,
    color: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10
  },
  link: {
    color: '#d63225'
  }

})


export default RegistrationScreen;