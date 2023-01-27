import React, { useId, useState} from "react";
import {StyleSheet, SafeAreaView, Text, TextInput, ScrollView, View, TouchableOpacity} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import LockIcon from "../../img/icons/lock.svg";
import EyeIcon from "../../img/icons/eye.svg";
import CloseEyeIcon from "../../img/icons/closeEye.svg";

import { Formik } from 'formik';
import * as Yup from 'yup';

const globalStyles = require("../globalStyles");

const SignupSchema = Yup.object().shape({
	password:  Yup.string()
	.min(3, 'Пароль должен содержать минимум 3 символа')
	.max(10, 'Пароль не должен превышать 10 символов')
	.required('Пожалуйста, введите Ваш старый пароль'),
	passwordNew:  Yup.string()
	.min(3, 'Пароль должен содержать минимум 3 символа')
	.max(10, 'Пароль не должен превышать 10 символов')
	.required('Пожалуйста, введите Ваш новый пароль'),
	passwordNew2:  Yup.string()
	.min(3, 'Пароль должен содержать минимум 3 символа')
	.max(10, 'Пароль не должен превышать 10 символов')
	.oneOf([Yup.ref('passwordNew')], 'Пароли не совпадают')
	.required('Пожалуйста, введите Ваш новый пароль еще раз')

});

const ProfileEditPassword = ({user, editPassword}) => {
		const navigation = useNavigation();
    const keyId = useId();
		const [secure, setSecure] = useState(true);

	return (
		<View>

			<Text>Редактирование пароля</Text>

			<Formik 
				initialValues={{
						password: '',
						passwordNew: '',
						passwordNew2: '',
				}}

				validationSchema={SignupSchema}
				onSubmit={editPassword}
			>

			{({ values, isValid, errors, touched, handleChange, setFieldTouched, handleSubmit}) => (
				<View>

					<View style={globalStyles.boxInput}>
						<LockIcon
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>
						<TextInput
							style={globalStyles.inputBorder}
							value={values.password}
							autoCapitalize='false'
							placeholder='Введите старый пароль'
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
							value={values.passwordNew}
							autoCapitalize='false'
							placeholder='Введите новый пароль'
							secureTextEntry={secure}
							onChangeText={handleChange('passwordNew')}
							onBlur={() => setFieldTouched('passwordNew')}
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
					{touched.passwordNew && errors.passwordNew && (
					<Text style={globalStyles.textError}>{errors.passwordNew}</Text>
					)}

					<View style={globalStyles.boxInput}>
						
						<LockIcon
							style={globalStyles.inputIcon}
							width={20}
							height={20}
						/>
						<TextInput
							style={globalStyles.inputBorder}
							value={values.passwordNew2}
							autoCapitalize='false'
							placeholder='Повторите новый пароль'
							secureTextEntry={secure}
							onChangeText={handleChange('passwordNew2')}
							onBlur={() => setFieldTouched('passwordNew2')}						
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
					{touched.passwordNew2 && errors.passwordNew2 && (
					<Text style={globalStyles.textError}>{errors.passwordNew2}</Text>
					)}

		
					<TouchableOpacity
						key={keyId}
						onPress={handleSubmit}
						disabled={!isValid}
						style={[
								styles.btnSubmit,
								{backgroundColor: isValid ? '#D32A1E' : '#cccccc'}
						]}>
						<Text style={globalStyles.textWhite}>Редактировать пароль</Text>
					</TouchableOpacity>
			</View>
			)}
		</Formik>
	</View>
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

export default ProfileEditPassword;
