import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from "react-redux";
import {loginUser, setPassword, setPhone} from "../redux/actions"


function LoginScreen({navigation}) {
    // const [phone, setphone] = useState(null);
    // const [password, setPassword] = useState(null);

    const { phone, password } = useSelector(store => store.loginReducer)
    const dispatch = useDispatch()
    // useEffect(() => {
    //
    // }, [])
    // const {login} = useContext(AuchContext);


    return (
        <View style={styles.container}>

            <View style={styles.wrapper}>
                {/* <Text>{val}</Text> */}
                <TextInput
                    style={styles.input}
                    value={phone}
                    tel
                    autoFocus
                    placeholder='+7(___)-__-__'
                    onChangeText={(text) => {
                        dispatch(setPhone(text))
                    }}
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Введите пароль"
                    secureTextEntry
                    options={headerShow = false}
                    onChangeText={(text) => {
                        dispatch(setPassword(text))
                    }}
                />
                <Button
                    onPress={() => {
                        dispatch(loginUser({phone, password}))
                        // login(phone, password);
                        navigation.navigate('Profile');
                    }}
                    style={styles.button}
                    title="Войти"
                    accessibilityLabel="Войти"
                />
            </View>

            <View>
                <Text>У вас еще нет аккаунта?</Text>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('Registration')
                }}>
                    <Text style={styles.link}>Зарегистрироваться</Text>
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


export default LoginScreen;
