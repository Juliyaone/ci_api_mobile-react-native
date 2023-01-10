import React, { useId, useContext } from "react";
import {SafeAreaView, Text, ScrollView, View, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {inputLoginPassword, inputLoginPhone} from "../redux/actions/userActions";
import {getLoginUserData} from "../redux/thunks/authThunks";

import InputPhone from "../components/input/InputPhone";
import InputPassword from "../components/input/InputPassword";
import ButtonReg from "../components/button/ButtonReg";

import LogoIcon from "../img/icons/logo.svg";
import { AuthContext } from "../auth/AuthContext"

const globalStyles = require("../screens/globalStyles");


function LoginScreen({navigation}) {

    const messages = useSelector(store => store.messagesReducer)
    const {phone, password} = useSelector(store => store.loginReducer)

    const dispatch = useDispatch()
    const keyId = useId();

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
    <SafeAreaView style={globalStyles.container}>
		<ScrollView showsVerticalScrollIndicator={false}>

			<View style={globalStyles.container}>
			<TouchableOpacity onPress={()=> {
                navigation.goBack();
            }}>
				<LogoIcon width={120} height={120} />
            </TouchableOpacity>

                {/*
				<Text>{messages.messageType}</Text>

				<Text>{messages.message}</Text> */}


                <Text style={globalStyles.header}>Вход</Text>

				<InputPhone namePlaceholder={"+7(___)-__-__"} keyId={keyId} phone={phone} onChangePhone={onChangePhone}/>

                <InputPassword namePlaceholder={"Пароль"} keyId={keyId} password={password} onChangePassword={onChangePassword}/>
                
				<ButtonReg text="Вход" keyId={keyId} sendDataFunction={sendLoginData}/>


                <TouchableOpacity onPress={()=> {navigation.navigate('Forgot')}}>
                    <Text style={globalStyles.textRed}>Забыли пароль?</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    </SafeAreaView>
    );
}


export default LoginScreen;
