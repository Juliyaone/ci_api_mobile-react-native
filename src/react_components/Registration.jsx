import {useDispatch, useSelector} from "react-redux";
import {
    inputRegisterEmail, inputRegisterGender,
    inputRegisterLastname,
    inputRegisterPassword, inputRegisterPassword2,
    inputRegisterPhone,
    inputRegisterThirdName,
    inputRegisterUsername
} from "../redux/actions/registerActions";
import {sendRegisterUserData} from "../redux/thunks/authThunks";


function Registration() {
    const user = useSelector(store => store.userReducer)
    const dispatch = useDispatch()

    const onChangeUsername = (event) => {
        dispatch(inputRegisterUsername(event.target.value))
    }
    const onChangeLastname = (event) => {
        dispatch(inputRegisterLastname(event.target.value))
    }
    const onChangeThirdName = (event) => {
        dispatch(inputRegisterThirdName(event.target.value))
    }
    const onChangeEmail = (event) => {
        dispatch(inputRegisterEmail(event.target.value))
    }
    const onChangePhone = (event) => {
        dispatch(inputRegisterPhone(event.target.value))
    }
    const onChangePassword = (event) => {
        dispatch(inputRegisterPassword(event.target.value))
    }
    const onChangePassword2 = (event) => {
        dispatch(inputRegisterPassword2(event.target.value))
    }
    const onChangeGender = () => {
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
    }

    return (
        <div>
            <div>User: email: [{user.email}] phone: [{user.phone}]</div>


            <textarea
                value={user.username}
                placeholder='username'
                onChange={onChangeUsername}>
                username
            </textarea>

            <textarea
                value={user.last_name}
                placeholder='last_name'
                onChange={onChangeLastname}>
                last_name
            </textarea>

            <textarea
                value={user.third_name}
                placeholder='third_name'
                onChange={onChangeThirdName}>
                third_name
            </textarea>

            <textarea
                value={user.email}
                placeholder='email'
                onChange={onChangeEmail}>
                email
            </textarea>

            <textarea
                value={user.phone}
                placeholder='phone'
                onChange={onChangePhone}>
                phone
            </textarea>

            <textarea
                value={user.password}
                placeholder='password'
                onChange={onChangePassword}>
                password
            </textarea>

            <textarea
                value={user.password2}
                placeholder='password2'
                onChange={onChangePassword2}>
                password2
            </textarea>

            <textarea
                value={user.gender}
                placeholder='gender'
                onChange={onChangeGender}>
                gender
            </textarea>

            <button onClick={sendRegisterData}>
                Зарегистрироваться
            </button>
        </div>
    )
}

export default Registration;