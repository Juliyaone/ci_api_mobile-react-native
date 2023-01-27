import React, { useState, useId } from "react";
import {StyleSheet, SafeAreaView, Text, TextInput, ScrollView, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Formik } from "formik"
import * as Yup from 'yup';

import PhoneIcon from "../img/icons/phone";
import LockIcon from "../img/icons/lock.svg";
import EyeIcon from "../img/icons/eye.svg";
import CloseEyeIcon from "../img/icons/closeEye.svg";
import LogoIcon from "../img/icons/logo.svg";


import {useLoginUserMutation} from "../redux/api";
import {saveTokenToStorage} from "../auth/tokenStorage";
import Message, {ERROR_TYPE} from "../message/Message";


import Loader from "../components/loader/Loader";

const SignupSchema = Yup.object().shape({
    phone: Yup.string()
    .min(10, 'Вы ввели неполный телефон')
    .max(10, 'Вы ввели лишние цифры телефона телефона')
    .required('Пожалуйста, введите Ваш номер телефона')
    .matches(/^[0-9]+$/, 'Введите цифры'),

    password: Yup.string()
    .min(3, 'Вы ввели короткий пароль')
    .max(10, 'Длина пароля не должна превышать 10 симоволов')
    .required('Пожалуйста, введите пароль')
});



const globalStyles = require("../screens/globalStyles");

function LoginScreen() {
    const navigation = useNavigation();
    const [secure, setSecure] = useState(true);
    const keyId = useId();
    const [sendLoginUserDataMutation, {error, isLoading}] = useLoginUserMutation()

    if (isLoading) {
        return <Loader/>
    }

    let messageText = error?.data?.detail;
    let messageType = ERROR_TYPE;


    const sendLoginData = async (values) => {

        const answer = await sendLoginUserDataMutation(values)
        if (answer.data.token) {
            const token = answer.data.token.toString();
            await saveTokenToStorage(token);
            
            if (answer.data.user.is_verified === false) {
                navigation.navigate('Verification');
            } else {
                navigation.navigate('Home');
            }
        } else {
            messageText = 'Token not received';
            console.error(messageText);
        }
    }


    return (
    <SafeAreaView style={globalStyles.container}>
		<ScrollView>
            <Text><Message type={messageType} text={messageText}/></Text>

			<View style={globalStyles.container}>
                <TouchableOpacity onPress={()=> {
                    navigation.goBack();
                }}>
                    <LogoIcon width={120} height={120} />
                </TouchableOpacity>

                <Text style={globalStyles.header}>Вход</Text>

                <Formik 
                
                initialValues={{
                    phone: "1234567890",
                    password: "asd",
                }}

                validationSchema={SignupSchema}

                onSubmit={sendLoginData}
                >
                    {({ values, isValid, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
                    <View style={globalStyles.container}>
                        <View style={globalStyles.boxInput}>
                            <PhoneIcon
                                style={globalStyles.inputIcon}
                                width={20}
                                height={20}
                            />
                            <TextInput key={keyId}
                                style={globalStyles.inputBorder}
                                value={values.phone}
                                placeholder={'Телефон'}
                                onChangeText={handleChange('phone')}
                                keyboardType="phone-pad"
                                onBlur={() => setFieldTouched('phone')}
                            />
                
                        </View>
                            {touched.phone && errors.phone && (
                                <Text style={globalStyles.textError}>{errors.phone}</Text>
                            )}

                        <View style={globalStyles.boxInput}>                 
                            <LockIcon
                                style={globalStyles.inputIcon}
                                width={20}
                                height={20}
                            />
                            <TextInput
                                style={globalStyles.inputBorder}
                                autoCapitalize='false'
                                value={values.password}
                                placeholder={'Пароль'}
                                secureTextEntry={secure}
                                onChangeText={handleChange('password')}
                                onBlur={() => setFieldTouched('password')}
                            />

                            <TouchableOpacity key={keyId}
                            style={globalStyles.inputIconRight}
                                onPress={() => {
                                    setSecure(!secure)
                                }}
                            >		
                                {secure === true ? (
                                        <EyeIcon
                                            width={20}
                                            height={20}
                                        />
                                )	: (
                                        <CloseEyeIcon
                                            width={20}
                                            height={20}
                                        />
                                )}
                            </TouchableOpacity>
                        </View>  
                        {touched.password && errors.password && (
                            <Text style={globalStyles.textError}>{errors.password}</Text>
                        )} 


                        <TouchableOpacity
                            key={keyId}
                            onPress={handleSubmit}
                            disabled={!isValid}
                            style={[
                                styles.btnSubmit,
                                {backgroundColor: isValid ? '#D32A1E' : '#cccccc'}
                            ]}>
                            <Text style={globalStyles.textWhite}>Вход</Text>
                        </TouchableOpacity>
                    </View>
                    )}

                </Formik>

            </View>
        </ScrollView>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  btnSubmit : {
    width: "90%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#D32A1E",
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 20,
    paddingLeft: 20,
    marginBottom: 20,
  }
})


export default LoginScreen;
