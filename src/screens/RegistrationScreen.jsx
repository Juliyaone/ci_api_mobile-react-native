import React, { useId } from "react";
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView} from "react-native";
import {useRegisterUserMutation} from "../redux/api";
import Message, {ERROR_TYPE} from "../message/Message";

import LogoIcon from "../img/icons/logo.svg";


const globalStyles = require("../screens/globalStyles");

import InputPhone from "../components/input/InputPhone";
import InputProfile from "../components/input/InputProfile";
import InputEmail from "../components/input/InputEmail";
import InputPassword from "../components/input/InputPassword";
import InputRadioGender from "../components/input/InputRadioGender";
import ButtonReg from "../components/button/ButtonReg";

import Loader from "../components/loader/Loader";




function RegistrationScreen({ navigation }) {
    const [registerUser, {error, isLoading}] = useRegisterUserMutation()

    if (isLoading) {
       return <Loader/>
    }

    let messageText = error?.data?.detail;
    let messageType = ERROR_TYPE;

    const sendRegisterData = async values => {
        const answer = await registerUser(values)
        if (answer.status === 200) {
            navigation.navigate('VerificationSms')
        }
    }


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

					<Text>
						username: [{user.username}] last_name: [{user.last_name}]
						third_name: [{user.third_name}] email: [{user.email}] phone:
						[{user.phone}] password: [{user.password}] password2: [
						{user.password2}] gender: [{user.gender.toString()}]
					</Text>

					<InputProfile namePlaceholder={"Имя"} keyId={keyId} name={username} onChangeUsername={onChangeUsername}/>

					<InputProfile namePlaceholder={"Отчество"} keyId={keyId} name={last_name} onChangeUsername={onChangeLastname}/>

					<InputProfile namePlaceholder={"Фамилия"} keyId={keyId} name={third_name} onChangeUsername={onChangeThirdName}/>

					<InputPhone namePlaceholder={"+7(___)-__-__"} keyId={keyId} phone={phone} onChangePhone={onChangePhone}/>

					<InputEmail namePlaceholder={"Email"} keyId={keyId} email={email} onChangeEmail={onChangeEmail}/>

					<InputPassword namePlaceholder={"Пароль"} keyId={keyId} password={password} onChangePassword={onChangePassword}/>

					<InputPassword namePlaceholder={"Повторите пароль"} keyId={keyId} password={password2} onChangePassword={onChangePassword2}/>

					<InputRadioGender keyId={keyId} onChangeGender={onChangeGender}/>

					<ButtonReg text="Зарегистрироваться" keyId={keyId} sendDataFunction={sendRegisterData}/>

		 			<TouchableOpacity onPress={()=> {navigation.navigate('Login')}}>
            <Text style={globalStyles.textRed}>Уже зарегистрированы?</Text>
          </TouchableOpacity>

				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default RegistrationScreen;