import {useDispatch, useSelector} from "react-redux";
import {inputLoginPassword, inputLoginPhone} from "../redux/actions/userActions"
import {getLoginUserData} from "../redux/thunks/authThunks";


function Login() {
    const {phone, password} = useSelector(store => store.loginReducer)
    const user = useSelector(store => store.userReducer)
    const dispatch = useDispatch()

    const onChangePhone = (event) => {
        dispatch(inputLoginPhone(event.target.value))
    }

    const onChangePassword = (event) => {
        dispatch(inputLoginPassword(event.target.value))
    }

    const sendLoginData = () => {
        dispatch(getLoginUserData({phone, password}))
    }


    return (
        <div>
            <div>User: email: [{user.email}] phone: [{user.phone}]</div>

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