import React, { useId, useContext } from 'react';
import {StyleSheet, ScrollView, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


// библиотеки
import { Formik } from "formik"
import * as Yup from 'yup';

import LogoIcon from "../img/icons/logo.svg";


import { useSendSmsCodeMutation} from "../redux/api";
import {saveTokenToStorage} from "../auth/tokenStorage";
import Message, {ERROR_TYPE} from "../message/Message";

import Loader from "../components/loader/Loader";

const globalStyles = require("./globalStyles");

const SignupSchema = Yup.object().shape({
    phone: Yup.string()
    .min(10, 'Номер телефона должен содержать не менее 10 цифр')
    .max(10, 'Номер телефона должен содержать не более 10 цифр')
    .required('Пожалуйста, введите номер телефона'),
    code: Yup.string()
    .min(4, 'Код смс должен содержать 4 цифры')
    .max(4, 'Код смс должен содержать 4 цифры')
    .required('Пожалуйста, введите код из смс')
});

function VerificationScreen({user}) {
    const keyId = useId();

    const [sendSmsCode, {error, isLoading}] = useSendSmsCodeMutation();
    const navigation = useNavigation();


    if (isLoading) {
        return <Loader/>
    }

    let messageText = error?.data?.detail;
    let messageType = ERROR_TYPE;


    const sendApproveSmsCode = async (values) => {

        const answer = await sendSmsCode(values);
        if (answer.data.token) {
            await saveTokenToStorage(answer.data.token);
            navigation.navigate('Home');
        } else {
            messageText = 'Token not received';
            console.error(messageText);
        }
    }




    return (
        <SafeAreaView>
        <ScrollView>
			<Text><Message type={messageType} text={messageText}/></Text>

			<View style={globalStyles.container}>

                <TouchableOpacity onPress={()=> {
                    navigation.goBack();
                }}>
                    <LogoIcon width={120} height={120} />
                </TouchableOpacity>

                <Formik 

					initialValues={{
							phone: '',
                            code: ''
					}}

					validationSchema={SignupSchema}
					onSubmit={sendApproveSmsCode}
                >



			        {({ values, isValid, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
                        <View>
                            
                        <TextInput
                            style={globalStyles.inputBorder}
                            value={values.phone}
                            placeholder='Телефон'
                            onChangeText={handleChange('phone')}
                            keyboardType={'phone-pad'}
                            onBlur={() => setFieldTouched('phone')}

                        />

                        <TextInput
                            style={styles.inputBorderNotIcon}
                            value={values.code}
                            placeholder='смс'
                            onChangeText={handleChange('code')}
                            keyboardType={'phone-pad'}
                            onBlur={() => setFieldTouched('code')}

                        />
                        {touched.code && errors.code && (
						    <Text style={globalStyles.textError}>{errors.code}</Text>
						)}

                        <TouchableOpacity
                            key={keyId}
                            onPress={handleSubmit}
                            disabled={!isValid}
                            style={[
                                    styles.btnSubmit,
                                    {backgroundColor: isValid ? '#D32A1E' : '#cccccc'}
                            ]}>
							<Text style={globalStyles.textWhite}>Войти</Text>
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
	boxRow: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flexStart",
		marginBottom: 30,
	},
	btnBox: {
		flexDirection: "row",
		alignItems: "center",
	},
	btnRadio: {
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		width: 40,
		borderWidth: 1,
		borderColor: "#D32A1E",
		borderRadius: 50,
		flexDirection: "row",
		alignItems: "center",
		marginRight: 20,
	},
	btnRadioText: {
		textAlign: "center",
		fontFamily: "Evolventa",
		color: "#111111",
		fontWeight: "600",
		fontSize: 16,
		marginRight: 10
	},
	inputIconBtn: {
		width: '30%',
		height: '100%'
	},
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
  },
  inputBorderNotIcon: {
		width: "90%",
		height: 55,
		justifyContent: "center",
		alignItems: "center",
		fontSize: 16,
		backgroundColor: "#ffffff",
		borderWidth: 1,
		borderColor: "#D32A1E",
		borderStyle: "solid",
		borderRadius: 40,
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 10,
		paddingLeft: 10,
		marginBottom: 10,
  }
});

export default VerificationScreen;
