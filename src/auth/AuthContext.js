import {createContext} from "react";
// import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTokenFromStorage} from "./tokenStorage";
import {loginSuccess} from "../redux/thunks/authThunks";
// import {messagesValues} from "../redux/reducers/messagesHandler";
import {AuthRequester} from "../api/AuthRequester";

const AuthContext = createContext();

/**
 * Проверяет залогинен ли пользователь. Если нет - перенаправляет на страницу логина.
 * 
 * Если есть токен в хранилище - авторизует пользователя автоматически.
 * 
 * @param children - Для какой компоненты
 * @param needAuth - boolean, если true - будет проверять авторизацию
 */
export const AuthContextProvider = ({children, needAuth, navigation}) => {
    const {isLogged, is_verified} = useSelector(store => store.userReducer)
    // const navigate = useNavigate();
    const dispatch = useDispatch()
    let userToken = getTokenFromStorage()
    if (!needAuth) {
        return children
    }

    if (!isLogged) {
        if (userToken) {
            console.log('userToken exists')
            new AuthRequester(dispatch).getMeUser()
                .then(user => {
                    if (user) {
                        // loginSuccess(dispatch, user, messagesValues.LOGIN_OK)
                        loginSuccess(dispatch, user)

                        console.log('User authorized')
                        return children
                    } else {
                        console.log(`User not authorized with token: ${userToken}`)
                        navigation.navigate('Login');
                    }
                })
        } else {
            console.log('User is not logged')
            navigation.navigate('Login');
        }
    } else if (!is_verified) {
        console.log('User is not verified')
        navigation.navigate('VerificationScreen');
    } else {
        return (
            <>
                <AuthContext.Provider value={userToken}>
                    {children}
                </AuthContext.Provider>
            </>
        )
    }
}

export default AuthContext;