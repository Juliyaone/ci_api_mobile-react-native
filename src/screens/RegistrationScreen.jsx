import React, { useState, useId } from "react";
import {
	StyleSheet,
	View,
	TextInput,
	Text,
	TouchableOpacity,
	ScrollView,
} from "react-native";

import LogoIcon from "../img/icons/logo.svg";
import ProfileIcon from "../img/icons/profile.svg";
import PhoneIcon from "../img/icons/phone.svg";
import EmailIcon from "../img/icons/email.svg";
import LockIcon from "../img/icons/lock.svg";
import EyeIcon from "../img/icons/eye.svg";
import OkIcon from "../img/icons/ok.svg";
import CloseEyeIcon from "../img/icons/closeEye.svg";
const globalStyles = require("./globalStyles");

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

import { MaskedTextInput } from "react-native-mask-text";


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

	const [secure, setSecure] = useState(true);
	const [checked, setChecked] = useState(0);
	const genderArr = ["Ж", "M"];
	let genderVal = genderArr[checked];

	const onChangeGender = (genderVal) => {
		const gender = (genderVal === "Ж") ? false : true;
		dispatch(inputRegisterGender(gender));
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

		<ScrollView style={styles.scrollView}>
			
			<View style={globalStyles.container}>
				
				<Text key={keyId}>
					<LogoIcon width={120} height={120} />
				</Text>


				<Text key={keyId}>
					{messages.messageType}
				</Text>

				<Text key={keyId}>
					{messages.message}
				</Text>

				<Text>
					username: [{user.username}] last_name: [{user.last_name}]
					third_name: [{user.third_name}] email: [{user.email}] phone:
					[{user.phone}] password: [{user.password}] password2: [
					{user.password2}] gender: [{user.gender.toString()}]
				</Text>
				

				<View style={globalStyles.boxInput}>

					<Text key={keyId}>

						<ProfileIcon key={keyId}
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>

					</Text>
					<TextInput key={keyId}
						style={globalStyles.inputBorder}
						value={username}
						autoFocus
						placeholder="Имя"
						onChangeText={onChangeUsername}
					/>
				</View>
				<View style={globalStyles.boxInput}>
					{/* <Text key={keyId}> */}
						<ProfileIcon key={keyId}
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>
					{/* </Text> */}
					<TextInput key={keyId}
						style={globalStyles.inputBorder}
						value={last_name}
						placeholder="Отчество"
						onChangeText={onChangeLastname}
					/>
				</View>
				<View style={globalStyles.boxInput}>
					{/* <Text key={keyId}> */}
						<ProfileIcon key={keyId}
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>
					{/* </Text> */}
					<TextInput key={keyId}
						style={globalStyles.inputBorder}
						value={third_name}
						placeholder="Фамилия"
						onChangeText={onChangeThirdName}
					/>
				</View>
				<View style={globalStyles.boxInput}>
					{/* <Text key={keyId}> */}
						<PhoneIcon key={keyId}
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>
					{/* </Text> */}
					<MaskedTextInput key={keyId}
						mask="+7(999)-999-99-99"
						style={globalStyles.inputBorder}
						value={phone}
						placeholder="+7(___)-__-__"
						onChangeText={onChangePhone}
						keyboardType="numeric"
					/>
				</View>
				<View style={globalStyles.boxInput}>
					{/* <Text key={keyId}> */}
						<EmailIcon key={keyId}
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>
					{/* </Text> */}
					<TextInput key={keyId}
						style={globalStyles.inputBorder}
						value={email}
						email
						placeholder="Email"
						onChangeText={onChangeEmail}
					/>
				</View>
				<View style={globalStyles.boxInput}>
					{/* <Text key={keyId}> */}
						<LockIcon
							key={keyId}
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>
					{/* </Text> */}
					<TextInput
						key={keyId}
						style={globalStyles.inputBorder}
						value={password}
						placeholder="Пароль"
						secureTextEntry={secure}
						onChangeText={onChangePassword}
					/>

					<TouchableOpacity key={keyId}
					style={globalStyles.inputIconRight}
						onPress={() => {
							setSecure(!secure)
						}}
					>		
						{secure === true ? (
							// <Text key={keyId}>
								<EyeIcon
									key={keyId}
									width={20}
									height={20}
								/>
							// </Text>
						)	: (
							// <Text key={keyId}>
								<CloseEyeIcon
									key={keyId}
									width={20}
									height={20}
								/>
							// </Text>
						)}

					</TouchableOpacity>
				</View>
				<View style={globalStyles.boxInput}>
					{/* <Text key={keyId}> */}
						<LockIcon
							key={keyId}
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>
					{/* </Text> */}
					<TextInput key={keyId}
						style={globalStyles.inputBorder}
						value={password2}
						placeholder="Повторите пароль"
						secureTextEntry={secure}
						onChangeText={onChangePassword2}
					/>
					<TouchableOpacity key={keyId}
						style={globalStyles.inputIconRight}
						onPress={() => {
							setSecure(!secure)
						}}
					>					
					{secure === true ?	(
						// <Text key={keyId}>	
							<EyeIcon
								key={keyId}
								width={20}
								height={20}
							/>
						// </Text>
					) : (
						// <Text key={keyId}>
							<CloseEyeIcon
								key={keyId}
								width={20}
								height={20}
							/>
						// </Text>
						)}
					</TouchableOpacity>

				</View>

				<View key={keyId}>

					<View key={keyId} style={styles.boxRow}>

						<Text key={keyId} style={styles.btnRadioText}>Пол</Text>

						{genderArr.map((gender, index) => {
							return (
								<View key={keyId}>
									{checked == index ? (
										<View style={styles.btnBox}>
											<Text style={styles.btnRadioText}>{gender}</Text>

											<TouchableOpacity key={keyId} style={styles.btnRadio}
												onPress={() => {
													setChecked(index);
													onChangeGender(gender);
												}}
												>
												{/* <Text key={keyId}> */}
													<OkIcon/>
												{/* </Text> */}
											</TouchableOpacity>
										</View>
									) : (
										<View style={styles.btnBox}>
											<Text style={styles.btnRadioText}>{gender}</Text>

											<TouchableOpacity
												style={styles.btnRadio}
												onPress={() => {
													setChecked(index);
													onChangeGender(gender);
												}}
											>
											</TouchableOpacity>
										</View>
									)}
								</View>
							);
						})}
					</View>
				</View>

				<TouchableOpacity key={keyId}
					onPress={sendRegisterData}
					style={globalStyles.btnRed}
				>
					<Text key={keyId} style={globalStyles.textWhite}>
						Зарегистрироваться
					</Text>
				</TouchableOpacity>

				<View  key={keyId} style={globalStyles.box}>

					<Text key={keyId}>Вы уже зарегистрированы?</Text>

					<TouchableOpacity key={keyId}
						onPress={() => {
							navigation.navigate("Login");
						}}
					>
						<Text key={keyId} style={styles.link}>Войти</Text>

					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
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
	}
});

export default RegistrationScreen;
