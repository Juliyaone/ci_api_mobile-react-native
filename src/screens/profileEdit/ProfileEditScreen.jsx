import React, { useEffect, useId, useState} from "react";
import {useGetMeQuery, useEditProfileMutation} from "../../redux/api";

import {StyleSheet, RefreshControl, SafeAreaView, Text, TextInput, ScrollView, View, TouchableOpacity} from 'react-native';
import { useNavigation} from '@react-navigation/native';

import { Formik } from 'formik';
import * as Yup from 'yup';
import Loader from "../../components/loader/Loader";

import ProfileIcon from "../../img/icons/profile";
import EmailIcon from "../../img/icons/email.svg";
import PhoneIcon from "../../img/icons/phone";
import Message, {ERROR_TYPE, SUCCESS_TYPE} from "../../message/Message";


// import LogoIcon from "../../img/icons/logo.svg";

import Header from '../../components/header/Header';
import ProfileEditPasswordContainer from '../profileEditPassword/ProfileEditPasswordContainer'


const globalStyles = require("../globalStyles");

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
	.matches(/^[0-9]+$/, 'Введите цифры'),

});


function ProfileEditScreen() {
		const navigation = useNavigation();
    const keyId = useId();

		const {data: user, error: userError, isLoading: userLoading } = useGetMeQuery();

    const [sendEditProfile, { data: profileData, error: profileError, isLoading: profileIsLoading}]= useEditProfileMutation()

		if (userLoading || profileIsLoading) {
        return <Loader/>
    }
    let messageText;

    if (userError) {
        messageText = userError.data?.detail
    }

    if (profileError) {
        messageText = profileError.data?.detail
    }



    let messageType = ERROR_TYPE;

    if (profileData) {
        messageType = SUCCESS_TYPE
        messageText = 'Профиль изменен'
    }


    const editUserData = async (values) => {
        await sendEditProfile(values);
        // navigation.navigate('Profile');
    }


	return (
		<SafeAreaView style={globalStyles.container}>
			<ScrollView>

      <Message type={messageType} text={messageText}/>

				<Header/>

				<View style={globalStyles.container}>

					<Text>Редактирование профиля</Text>

					<Formik 

						initialValues={{
								username: user.username,
								last_name: user.last_name,
								third_name: user.third_name,
								phone: user.phone,
								email: user.email,
						}}

						validationSchema={SignupSchema}
						onSubmit={editUserData}
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
											keyboardType={'phone-pad'}
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
										value={values.email}
										autoCapitalize='false'
										placeholder={'Email'}
										onChangeText={handleChange('email')}
										onBlur={() => setFieldTouched('email')}
									/>
								</View>
								{touched.email && errors.email && (
									<Text style={globalStyles.textError}>{errors.email}</Text>
								)}

								<TouchableOpacity
									key={keyId}
									onPress={handleSubmit}
									disabled={!isValid}
									style={[
											styles.btnSubmit,
											{backgroundColor: isValid ? '#D32A1E' : '#cccccc'}
									]}>
									<Text style={globalStyles.textWhite}>Редактировать</Text>
								</TouchableOpacity>
						</View>


						)}
						</Formik>

					</View>

					<ProfileEditPasswordContainer/>

						
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

export default ProfileEditScreen;