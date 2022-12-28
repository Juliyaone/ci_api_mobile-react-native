import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {AuchContext} from '../context/AuchContext';
import {sendSmsCode} from "../redux/thunks/authThunks";
import {useDispatch, useSelector} from "react-redux";
import {inputLoginPhone, inputLoginSmsCode} from "../redux/actions/userActions";


function VerificationScreen({navigation}) {

    // const [number1, setNumber1] = useState(null);
    // const [number2, setNumber2] = useState(null);
    // const [number3, setNumber3] = useState(null);
    // const [number4, setNumber4] = useState(null);
    const messages = useSelector(store => store.messagesReducer)
    const {phone, code} = useSelector(store => store.smsEntryReducer)
    const user = useSelector(store => store.userReducer)
    const dispatch = useDispatch()

    // Меняет поле телефона
    const onChangePhone = (event) => {
        dispatch(inputLoginPhone(event.target.value))
    }

    // Меняет поле code
    const onChangeCode = (event) => {
        dispatch(inputLoginSmsCode(event.target.value))
    }

    // Отправляет введенные данные для подтверждения кода
    const sendApproveSmsCode = () => {
        dispatch(sendSmsCode({phone, code}));
        navigation.navigate('Profile');
    }

    // const {verification} = useContext(AuchContext);

    return (
        <View style={styles.box}>
            <Text>Верификация</Text>
            {/*<Text>{verification}</Text>*/}
            <Text>User: email: [{user.email}] phone: [{user.phone}]</Text>
            <Text>{messages.messageType}{messages.message}</Text>

            <TextInput
                style={styles.input}
                value={phone}
                tel
                autoFocus
                placeholder='+7(___)-__-__' // TODO не уверен что он должен быть таким :) Будет путать наверное такой формат, при том, что мы ждем 1234567890
                onChangeText={onChangePhone}
            />
            <TextInput  // # TODO Давай пока оставим его одной строкой, чтоб не мучиться с 4 значениями
                style={styles.input}
                value={code}
                placeholder="code"
                onChangeText={onChangeCode}
            />

            {/*<TextInput*/}
            {/*    style={styles.input}*/}
            {/*    value={number2}*/}
            {/*    placeholder="2"*/}
            {/*    onChangeText={(text) => {*/}
            {/*        setNumber2(text)*/}
            {/*    }}*/}
            {/*/>*/}

            {/*<TextInput*/}
            {/*    style={styles.input}*/}
            {/*    value={number3}*/}
            {/*    placeholder="3"*/}
            {/*    onChangeText={(text) => {*/}
            {/*        setNumber3(text)*/}
            {/*    }}*/}
            {/*/>*/}

            {/*<TextInput*/}
            {/*    style={styles.input}*/}
            {/*    value={number4}*/}
            {/*    placeholder="4"*/}
            {/*    onChangeText={(text) => {*/}
            {/*        setNumber4(text)*/}
            {/*    }}*/}
            {/*/>*/}

            <Button
                onPress={sendApproveSmsCode}
                style={styles.button}
                title="Войти"
                accessibilityLabel="Войти"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 50,
        borderColor: '#bbb',
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginBottom: 10
    },
    button: {
        borderWidth: '1px',
        borderRadius: 40,
        color: '#ffffff',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10
    }
})

export default VerificationScreen;
