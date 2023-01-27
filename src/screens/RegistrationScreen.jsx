import React, { useId, useState} from "react";
import {StyleSheet, SafeAreaView, Text, TextInput, ScrollView, View, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {useRegisterUserMutation} from "../redux/api";
import Message, {ERROR_TYPE} from "../message/Message";

import Loader from "../components/loader/Loader";


// библиотеки
import { Formik } from "formik"
import * as Yup from 'yup';


// Иконки

import ProfileIcon from "../img/icons/profile";
import EmailIcon from "../img/icons/email.svg";
import PhoneIcon from "../img/icons/phone";
import LockIcon from "../img/icons/lock.svg";
import EyeIcon from "../img/icons/eye.svg";
import CloseEyeIcon from "../img/icons/closeEye.svg";
import OkIcon from "../img/icons/ok.svg";
import LogoIcon from "../img/icons/logo.svg";




const globalStyles = require("../screens/globalStyles");

const SignupSchema = Yup.object().shape({
	username: Yup.string()
	.min(2, 'Вы ввели слишком короткое имя')
	.max(100, 'Вы  ввели слишком длинное имя')
	.required('Пожалуйста, введите Ваш имя'),
	last_name: Yup.string()
	.min(2, 'Вы ввели слишком короткую фамилию')
	.max(100, 'Вы  ввели слишком длинную фамилию')
	.required('Пожалуйста, введите Вашу фамилию'),
	third_name: Yup.string()
	.min(2, 'Вы ввели слишком короткое отчество')
	.max(100, 'Вы  ввели слишком длинное отчество'),
	email: Yup.string()
	.min(2, 'Вы ввели неполный email')
	.max(100, 'Вы  ввели слишком длинный email')
	.required('Пожалуйста, введите Ваш email'),

	phone: Yup.string()
	.min(10, 'Вы ввели неполный телефон')
	.max(10, 'Вы ввели лишние цифры телефона телефона')
	.required('Пожалуйста, введите Ваш номер телефона')
	.matches(/^[0-9]{10}$/, 'Введите цифры'),

	password: Yup.string()
	.min(3, 'Вы ввели короткий пароль')
	.max(10, 'Длина пароля не должна превышать 10 симоволов')
	.required('Пожалуйста, введите пароль'),

	password2: Yup.string()
	.min(3, 'Вы ввели короткий пароль')
	.max(10, 'Длина пароля не должна превышать 10 симоволов')
	.required('Пожалуйста, введите пароль'),

});



function RegistrationScreen() {
	  const navigation = useNavigation();
	  const keyId = useId();
		const [secure, setSecure] = useState(true);
		const [genderVal, setGenderVal] = useState(false);

		const [checkedFemale, setCheckedFemale] = useState(true);
		const [checkedMale, setCheckedMale] = useState(false);

    const [registerUser, {error, isLoading}] = useRegisterUserMutation();

    if (isLoading) {
       return <Loader/>
    }

    let messageText = error?.data?.detail;
    let messageType = ERROR_TYPE;

		const onChangeGenderFamale = () => {
			setGenderVal(false);
			setCheckedMale(prev => !prev);
			setCheckedFemale(prev => !prev);
		}

		const onChangeGenderMale = () => {
			setGenderVal(true);
			setCheckedMale(prev => !prev);
			setCheckedFemale(prev => !prev);
		}

		const sendRegisterData = async values => {
			const answer = await registerUser(values);
			if (answer !== null) {
					navigation.navigate('Verification');
			} else {
            messageText = 'Not registered';
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

        <Formik 
					initialValues={{
							username: '',
							last_name: '',
							third_name: '',
							phone: '',
							email: '',
							password: '',
							password2: '',
							gender: genderVal,
							test: false
					}}

					validationSchema={SignupSchema}
					onSubmit={sendRegisterData}
        >

					{({ values, isValid, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
						<View>

							<View style={globalStyles.boxInput}>
								<ProfileIcon
									style={globalStyles.inputIcon}
									width={20}
									height={20}
								/>
								<TextInput key={keyId}
									style={globalStyles.inputBorder}
									value={values.username}
									placeholder={'Имя'}
									onChangeText={handleChange('username')}
									onBlur={() => setFieldTouched('username')}
								/>
							</View>
							{touched.username && errors.username && (
								<Text style={globalStyles.textError}>{errors.username}</Text>
							)}


							<View style={globalStyles.boxInput}>
								<ProfileIcon
									style={globalStyles.inputIcon}
									width={20}
									height={20}
								/>
								<TextInput key={keyId}
									style={globalStyles.inputBorder}
									value={values.third_name}
									placeholder={'Отчество'}
									onChangeText={handleChange('third_name')}
									onBlur={() => setFieldTouched('third_name')}
								/>
							</View>
							{touched.third_name && errors.third_name && (
								<Text style={globalStyles.textError}>{errors.third_name}</Text>
							)}

							<View style={globalStyles.boxInput}>
								<ProfileIcon
									style={globalStyles.inputIcon}
									width={20}
									height={20}
								/>
								<TextInput key={keyId}
									style={globalStyles.inputBorder}
									value={values.last_name}
									placeholder={'Фамилия'}
									onChangeText={handleChange('last_name')}
									onBlur={() => setFieldTouched('last_name')}

								/>
							</View>
							{touched.last_name && errors.last_name && (
								<Text style={globalStyles.textError}>{errors.last_name}</Text>
							)}

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
										keyboardType='phone-pad'
										onBlur={() => setFieldTouched('phone')}
								/>
							</View>
							{touched.phone && errors.phone && (
								<Text style={globalStyles.textError}>{errors.phone}</Text>
							)}

							<View style={globalStyles.boxInput}>
								<EmailIcon
									style={globalStyles.inputIcon}
									width={20}
									height={20}
								/>
								<TextInput key={keyId}
									style={globalStyles.inputBorder}
									autoCapitalize='false'
									value={values.email}
									placeholder={'Email'}
									onChangeText={handleChange('email')}
									onBlur={() => setFieldTouched('email')}
								/>
							</View>
							{touched.email && errors.email && (
								<Text style={globalStyles.textError}>{errors.email}</Text>
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
									placeholder={'Введите пароль'}
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

							<View style={globalStyles.boxInput}>
								<LockIcon
									style={globalStyles.inputIcon}
									width={20}
									height={20}
								/>
								<TextInput
									style={globalStyles.inputBorder}
									autoCapitalize='false'
									value={values.password2}
									placeholder={'Повторите пароль'}
									secureTextEntry={secure}
									onChangeText={handleChange('password2')}
									onBlur={() => setFieldTouched('password2')}
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
							{touched.password2 && errors.password2 && (
								<Text style={globalStyles.textError}>{errors.password2}</Text>
							)}
							<View>
								<View style={styles.boxRow}>
										<Text style={styles.btnRadioText}>Пол</Text>
											<View>

												<View style={styles.btnBox}>
													<Text style={styles.btnRadioText}>Ж</Text>

														<TextInput
															style={styles.btnRadioText}
															onChangeText={handleChange('gender')}
															value={values.gender}
															/>

														<TouchableOpacity
															style={styles.btnRadio}
															onPress={onChangeGenderFamale}
															>

														<Text>{checkedFemale ? <OkIcon/> : <Text></Text>}</Text>

														</TouchableOpacity>
												</View>

													<View style={styles.btnBox}>
														<Text style={styles.btnRadioText}>М</Text>

														<TextInput
															style={styles.btnRadioText}
															onChangeText={handleChange('gender')}
															value={values.gender}
															/>
													
														<TouchableOpacity
																style={styles.btnRadio}
																onPress={onChangeGenderMale}
														>
														<Text>{checkedMale ? <OkIcon/> : <Text></Text>}</Text>

														</TouchableOpacity>

													</View>
											</View>
										</View>
							</View>

							<TouchableOpacity
								key={keyId}
								onPress={handleSubmit}
								disabled={!isValid}
								style={[
										styles.btnSubmit,
										{backgroundColor: isValid ? '#D32A1E' : '#cccccc'}
								]}>
								<Text style={globalStyles.textWhite}>Зарегистрироваться</Text>
							</TouchableOpacity>
							<Text>Подтверждая регистрацию, вы принимаете условия согласия на обработку персональных данных</Text>

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
  }
});

export default RegistrationScreen;