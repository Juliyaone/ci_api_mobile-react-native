import React, { useId } from "react";
import { View, Text, ScrollView } from "react-native";

import LogoIcon from "../img/icons/logo.svg";

const globalStyles = require("../screens/globalStyles");

import InputPhone from "../components/input/InputPhone";
import InputProfile from "../components/input/InputProfile";
import InputEmail from "../components/input/InputEmail";
import InputPassword from "../components/input/InputPassword";
import InputRadioGender from "../components/input/InputRadioGender";
import ButtonReg from "../components/button/ButtonReg";


import { useDispatch, useSelector } from "react-redux";

import {
	inputRegisterUsername,
	inputRegisterLastname,
	inputRegisterThirdName,
	inputRegisterEmail,
	inputRegisterPhone,
	inputRegisterPassword,
	inputRegisterPassword2,
	inputRegisterGender,
} from "../redux/actions/registerActions";
import { sendRegisterUserData } from "../redux/thunks/authThunks";

function RegistrationScreen({ navigation }) {
	const keyId = useId();
	const messages = useSelector((store) => store.messagesReducer);

	const {
		username,
		last_name,
		third_name,
		email,
		phone,
		password,
		password2,
		gender,
	} = useSelector((store) => store.userReducer);

	const dispatch = useDispatch();

	const user = useSelector((store) => store.userReducer);

	const onChangeUsername = (text) => {
		dispatch(inputRegisterUsername(text));
	};

	const onChangeLastname = (text) => {
		dispatch(inputRegisterLastname(text));
	};

	const onChangeThirdName = (text) => {
		dispatch(inputRegisterThirdName(text));
	};

	const onChangeEmail = (text) => {
		dispatch(inputRegisterEmail(text));
	};

	const onChangePhone = (text) => {
		dispatch(inputRegisterPhone(text));
	};

	const onChangePassword = (text) => {
		dispatch(inputRegisterPassword(text));
	};

	const onChangePassword2 = (text) => {
		dispatch(inputRegisterPassword2(text));
	};

	const onChangeGender = (gender) => {
		const genderVal = (gender === "Ж") ? false : true;
		dispatch(inputRegisterGender(genderVal));
	};

	const sendRegisterData = () => {
		dispatch(
			sendRegisterUserData({
				username,
				last_name,
				third_name,
				email,
				phone,
				password,
				password2,
				gender,
			})
		);
		// navigation.navigate("Verification");
	};


	return (
		<ScrollView>
			<View style={globalStyles.container}>
				<LogoIcon width={120} height={120} />
				<Text>
					{messages.messageType}
				</Text>
				<Text>
					{messages.message}
				</Text>
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
	
			</View>
		</ScrollView>
	);
}

export default RegistrationScreen;