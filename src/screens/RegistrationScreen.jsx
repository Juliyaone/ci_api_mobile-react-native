import React, { useContext, useState } from "react";
import {
	StyleSheet,
	Button,
	View,
	TextInput,
	Text,
	TouchableOpacity,
} from "react-native";
import { AuchContext } from "../context/AuchContext";
// import { useSelector, useDispatch } from "react-redux";
// import {createUser} from "../redux/actions"

function RegistrationScreen({ navigation }) {
	const [username, setUsername] = useState(null);
	const [last_name, setLast_name] = useState(null);
	const [third_name, setThird_name] = useState(null);
	const [email, setEmail] = useState(null);
	const [phone, setPhone] = useState(null);
	const [password, setPassword] = useState(null);
	const [password2, setPassword2] = useState(null);
	const [gender, setGender] = useState(false);

	const { registration } = useContext(AuchContext);

<<<<<<< HEAD
	return (
		<View style={styles.container}>
			<View style={styles.wrapper}>
				<Text>{registration}</Text>
				<TextInput
					style={styles.input}
					value={username}
					autoFocus
					placeholder="Имя"
					onChangeText={(text) => {
						setUsername(text);
					}}
				/>
				<TextInput
					style={styles.input}
					value={last_name}
					placeholder="Отчество"
					onChangeText={(text) => {
						setLast_name(text);
					}}
				/>
				<TextInput
					style={styles.input}
					value={third_name}
					placeholder="Фамилия"
					onChangeText={(text) => {
						setThird_name(text);
					}}
				/>
				<TextInput
					style={styles.input}
					value={email}
					email
					placeholder="Email"
					onChangeText={(text) => {
						setEmail(text);
					}}
				/>
				<TextInput
					style={styles.input}
					value={phone}
					placeholder="+7(___)-__-__"
					onChangeText={(text) => {
						setPhone(text);
					}}
				/>
				<TextInput
					style={styles.input}
					value={password}
					placeholder="Пароль"
					secureTextEntry
					options={(headerShow = false)}
					onChangeText={(text) => {
						setPassword(text);
					}}
				/>
				<TextInput
					style={styles.input}
					value={password2}
					placeholder="Повторите пароль"
					secureTextEntry
					options={(headerShow = false)}
					onChangeText={(text) => {
						setPassword2(text);
					}}
				/>

				<TextInput
					style={styles.input}
					value={gender}
					placeholder="Выберите пол"
					options={(headerShow = false)}
					onChangeText={(text) => {
						setGender(text);
					}}
				/>

				<Button
					onPress={() => {
						registration(
							username,
							last_name,
							third_name,
							email,
							phone,
							password,
							password2,
							gender
						);
						navigation.navigate("Verification");
					}}
					style={styles.button}
					title="Зарегистрироваться"
					accessibilityLabel="Зарегистрироваться"
				/>
			</View>

			<View>
				<Text>Вы уже зарегистрированы?</Text>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("Login");
					}}
				>
					<Text style={styles.link}>Войти</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	wrapper: {
		width: "50%",
	},
	input: {
		borderWidth: 1,
		borderRadius: 40,
		borderColor: "#bbb",
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginBottom: 10,
	},
	button: {
		borderWidth: "1px",
		borderRadius: 40,
		color: "#ffffff",
		paddingHorizontal: 15,
		paddingVertical: 10,
		marginBottom: 10,
	},
	link: {
		color: "#d63225",
	},
});

=======
    const messages = useSelector(store => store.messagesReducer)
    const user = useSelector(store => store.userReducer)
    const dispatch = useDispatch()
    console.log(user)

    const onChangeUsername = (text) => {
        dispatch(inputRegisterUsername(text))
    }
    const onChangeLastname = (text) => {
        dispatch(inputRegisterLastname(text))
    }
    const onChangeThirdName = (text) => {
        dispatch(inputRegisterThirdName(text))
    }
    const onChangeEmail = (text) => {
        dispatch(inputRegisterEmail(text))
    }
    const onChangePhone = (text) => {
        dispatch(inputRegisterPhone(text))
    }
    const onChangePassword = (text) => {
        dispatch(inputRegisterPassword(text))
    }
    const onChangePassword2 = (text) => {
        dispatch(inputRegisterPassword2(text))
    }
    const onChangeGender = () => { // TODO Передать сюда true или false с переключателя пола и удалить строку с const
        const value = true
        dispatch(inputRegisterGender(value))
    }

    const sendRegisterData = () => {
        const payload = {
            username: user.username,
            last_name: user.last_name,
            third_name: user.third_name,
            email: user.email,
            phone: user.phone,
            password: user.password,
            password2: user.password2,
            gender: user.gender,

        }
        dispatch(sendRegisterUserData(payload))
        navigation.navigate('Verification');
    }

    return (
        <View style={styles.container}>

            <View style={styles.wrapper}>
                <Text>User: email: [{user.email}] phone: [{user.phone}]</Text>
                <Text>MESSAGE: type: [{messages.messageType}] text: [{messages.message}]</Text>

                <TextInput
                    style={styles.input}
                    value={user.username}
                    autoFocus
                    placeholder='Имя'
                    onChangeText={onChangeUsername}
                />
                <TextInput
                    style={styles.input}
                    value={user.last_name}
                    placeholder='Отчество'
                    onChangeText={onChangeLastname}
                />
                <TextInput
                    style={styles.input}
                    value={user.third_name}
                    placeholder='Фамилия'
                    onChangeText={onChangeThirdName}
                />
                <TextInput
                    style={styles.input}
                    value={user.email}
                    email
                    placeholder='Email'
                    onChangeText={onChangeEmail}
                />
                <TextInput
                    style={styles.input}
                    value={user.phone}
                    placeholder='+7(___)-__-__'
                    onChangeText={onChangePhone}
                />
                <TextInput
                    style={styles.input}
                    value={user.password}
                    placeholder="Пароль"
                    secureTextEntry
                    options={headerShow = false}
                    onChangeText={onChangePassword}
                />
                <TextInput
                    style={styles.input}
                    value={user.password2}
                    placeholder="Повторите пароль"
                    secureTextEntry
                    options={headerShow = false}
                    onChangeText={onChangePassword2}
                />

                <TextInput
                    style={styles.input}
                    value={user.gender}
                    placeholder="Выберите пол"
                    options={headerShow = false}
                    onChangeText={onChangeGender}
                />

                <Button
                    onPress={sendRegisterData}
                    style={styles.button}
                    title="Зарегистрироваться"
                    accessibilityLabel="Зарегистрироваться"
                />
            </View>

            <View>
                <Text>Вы уже зарегистрированы?</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Login')
                }}>
                    <Text style={styles.link}>Войти</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapper: {
        width: '50%'
    },
    input: {
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#bbb',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10
    },
    button: {
        borderWidth: '1px',
        borderRadius: 40,
        color: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10
    },
    link: {
        color: '#d63225'
    }

})


>>>>>>> dab44b6cf948cf099c03256c175ddb7fd1fcdaf6
export default RegistrationScreen;
