import React from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {inputLoginPassword, inputLoginPhone} from "../redux/actions/userActions";
import {getLoginUserData} from "../redux/thunks/authThunks";


function LoginScreen({navigation}) {
    const messages = useSelector(store => store.messagesReducer)
    const {phone, password} = useSelector(store => store.loginReducer)
    const dispatch = useDispatch()
    const user = useSelector(store => store.userReducer)

    // Меняет поле телефона
    const onChangePhone = (text) => {
        dispatch(inputLoginPhone(text))
    }

    // Меняет поле пароля
    const onChangePassword = (text) => {
        dispatch(inputLoginPassword(text))
    }

    // Отправляет введенные данные для авторизации
    const sendLoginData = () => {
        dispatch(getLoginUserData({phone, password}));
        navigation.navigate('Profile');
    }

    return (
        <View style={styles.container}>

            <View style={styles.wrapper}>
                <Text>User: email: [{user.email}] phone: [{user.phone}]</Text>

                <Text>{messages.messageType}{messages.message}</Text>
                <TextInput
                    style={styles.input}
                    value={phone}
                    tel
                    autoFocus
                    placeholder='+7(___)-__-__' // todo не уверен что он должен быть таким :) Будет путать наверное такой формат, при том, что мы ждем 1234567890
                    onChangeText={onChangePhone}
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Введите пароль"
                    secureTextEntry
                    options={headerShow = false} // todo У меня IDE ругается на атрибут headerShow - говорит что unresolved
                    onChangeText={onChangePassword}
                />
                <Button
                    onPress={sendLoginData}
                    style={styles.button}
                    title="Войти"
                    accessibilityLabel="Войти"
                />
            </View>

            <View>
                <Text>У вас еще нет аккаунта?</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Registration')
                }}>
                    <Text style={styles.link}>Зарегистрироваться</Text>
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


export default LoginScreen;
