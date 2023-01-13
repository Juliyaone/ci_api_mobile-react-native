import React, { useId } from 'react';
import {ScrollView, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';

import {useSendSmsCodeMutation} from "../redux/api";
import {saveTokenToStorage} from "../auth/tokenStorage";
import Message, {ERROR_TYPE} from "../message/Message";


import LogoIcon from "../img/icons/logo.svg";

import InputPhone from "../components/input/InputPhone";
import InputSms from "../components/input/InputSms";
import ButtonReg from "../components/button/ButtonReg";
import Loader from "../components/loader/Loader";



const globalStyles = require("./globalStyles");

function VerificationScreen({navigation}) {
  const [sendSmsCode, {error, isLoading}] = useSendSmsCodeMutation();

    if (isLoading) {
        return <Loader/>
    }

    let messageText = error?.data?.detail;
    let messageType = ERROR_TYPE;

    const sendApproveSmsCode = async values => {
        const answer = await sendSmsCode(values);
        if (answer.data.token) {
            await saveTokenToStorage(answer.data.token);
            navigation.navigate('Profile');
        } else {
            messageText = 'Token not received';
            console.error(messageText);
        }
    }

    const initialValues = {phone: phone, code: ''}


    return (
        <SafeAreaView>
        <ScrollView>
            <Message type={messageType} text={messageText}/>

			<View style={globalStyles.container}>

                <TouchableOpacity onPress={()=> {
                    navigation.goBack();
                }}>
                    <LogoIcon width={120} height={120} />
                </TouchableOpacity>

                <Text style={globalStyles.header}>Подтверждение телефона</Text>

                <Text>User: email: [{user.email}] phone: [{user.phone}]</Text>

				<InputPhone namePlaceholder={"+7(___)-__-__"} keyId={keyId} phone={phone} onChangePhone={onChangePhone}/>

                <InputSms namePlaceholder="Введите код смс" code={code} keyId={keyId} onChangeText={onChangeCode}/>

                <ButtonReg text="Войти" keyId={keyId} sendDataFunction={sendApproveSmsCode}/>

            </View>
        </ScrollView>
        </SafeAreaView>
    );
}

export default VerificationScreen;
