import React, { useId } from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import {useDispatch, useSelector} from "react-redux";
import {sendSmsCode} from "../redux/thunks/authThunks";
import {inputLoginPhone, inputLoginSmsCode} from "../redux/actions/userActions";

import InputPhone from "../components/input/InputPhone";
import InputSms from "../components/input/InputSms";
import ButtonReg from "../components/button/ButtonReg";

const globalStyles = require("../screens/globalStyles");

function VerificationScreen({navigation}) {
    const messages = useSelector(store => store.messagesReducer)
    const {phone, code} = useSelector(store => store.smsEntryReducer)
    const user = useSelector(store => store.userReducer)
    const dispatch = useDispatch()
    const keyId = useId();

    // Меняет поле телефона
    const onChangePhone = (text) => {
        dispatch(inputLoginPhone(text))
    }

    // Меняет поле code
    const onChangeCode = (text) => {
        dispatch(inputLoginSmsCode(text))
    }

    // Отправляет введенные данные для подтверждения кода
    const sendApproveSmsCode = () => {
        dispatch(sendSmsCode({phone, code}));
        // navigation.navigate('Profile');
    }

    return (
        <ScrollView>
			<View style={globalStyles.container}>

                <Text style={globalStyles.header}>Подтверждение телефона</Text>

                <Text>{messages.messageType}</Text>
                <Text>{messages.message}</Text>
                <Text>User: email: [{user.email}] phone: [{user.phone}]</Text>

				<InputPhone namePlaceholder={"+7(___)-__-__"} keyId={keyId} phone={phone} onChangePhone={onChangePhone}/>

                <InputSms namePlaceholder="Введите код смс" code={code} keyId={keyId} onChangeText={onChangeCode}/>

                <ButtonReg text="Войти" keyId={keyId} sendDataFunction={sendApproveSmsCode}/>

            </View>
        </ScrollView>
    );
}

export default VerificationScreen;
