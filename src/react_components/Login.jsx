import {useDispatch} from "react-redux";
import {getLoginUserData} from "../redux/thunks/authThunks";
import {useState} from "react";


function Login() {
    const [phone, setPhone] = useState('1234567890')
    const [password, setPassword] = useState('asd')
    const dispatch = useDispatch()

    const onChangePhone = (event) => {
        setPhone(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const sendLoginData = () => {
        dispatch(getLoginUserData({phone, password}))
    }

    return (
        <div>
            <textarea
                value={phone}
                placeholder='phone'
                onChange={onChangePhone}>
                    </textarea>
            <textarea
                value={password}
                placeholder='password'
                onChange={onChangePassword}>
                    </textarea>
            <button onClick={sendLoginData}>
                Войти
            </button>
        </div>
    )
}

export default Login;