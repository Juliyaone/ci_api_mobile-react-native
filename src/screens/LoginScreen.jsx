import React, { useId } from "react";
import {SafeAreaView, Text, ScrollView, View, TouchableOpacity} from 'react-native';

import {useLoginUserMutation} from "../redux/api";
import {saveTokenToStorage} from "../auth/tokenStorage";
import Message, {ERROR_TYPE} from "../message/Message";

import InputPhone from "../components/input/InputPhone";
import InputPassword from "../components/input/InputPassword";
import ButtonReg from "../components/button/ButtonReg";
import Loader from "../components/loader/Loader";

import LogoIcon from "../img/icons/logo.svg";

const globalStyles = require("../screens/globalStyles");


function LoginScreen({navigation}) {
    const keyId = useId(); 

    const [sendLoginUserDataMutation, {error, isLoading}] = useLoginUserMutation()

    if (isLoading) {
        return <Loader/>
    }

    let messageText = error?.data?.detail;
    let messageType = ERROR_TYPE;



    const sendLoginData = async values => {
        const answer = await sendLoginUserDataMutation(values)
        if (answer.data.token) {
            const token = answer.data.token.toString();
            await saveTokenToStorage(token);
            navigation.navigate('Profile');
        } else {
            messageText = 'Token not received';
            console.error(messageText);
        }
    }
    let initialValues = {phone: '', password: ''}

    // TODO тестовые данные, удалить в релизе:
    initialValues = {phone: '1234567890', password: 'asd'}


    return (
    <SafeAreaView style={globalStyles.container}>
		<ScrollView>
            <Message type={messageType} text={messageText}/>

			<View style={globalStyles.container}>
			<TouchableOpacity onPress={()=> {
                navigation.goBack();
            }}>
				<LogoIcon width={120} height={120} />
            </TouchableOpacity>

                <Text style={globalStyles.header}>Вход</Text>

				<InputPhone namePlaceholder={"+7(___)-__-__"} keyId={keyId} phone={phone} onChangePhone={onChangePhone}/>

                <InputPassword namePlaceholder={"Пароль"} keyId={keyId} password={password} onChangePassword={onChangePassword}/>
                
				<ButtonReg text="Вход" keyId={keyId} sendDataFunction={sendLoginData}/>

            </View>
        </ScrollView>
    </SafeAreaView>
    );
}


export default LoginScreen;
