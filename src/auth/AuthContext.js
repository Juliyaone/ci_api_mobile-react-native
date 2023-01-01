import {createContext} from "react";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getTokenFromStorage, isTokenExpired, refreshToken} from "./tokenStorage";

const AuthContext = createContext();

/**
 * Проверяет залогинен ли пользователь. Если нет - перенаправляет на страницу логина.
 * @param children - Для какой компоненты
 * @param accessBy - если === "non-authenticated" - то не проверяет токен.
 */
export const AuthContextProvider = ({children, accessBy}) => {
    const {isLogged, password} = useSelector(store => store.userReducer)
    console.log(`password: ${password}`)
    const navigate = useNavigate();
    if (accessBy === "non-authenticated") {
        return children
    }
    let userToken = getTokenFromStorage()

    if (!isLogged) {
        if (userToken) {
            if (isTokenExpired()) {
                refreshToken()
                // TODO обновлять если истек
                console.log('Token is expired')
            }
            return children
        } else {
            navigate('/login')
        }
    }
    return (
        <>
            <AuthContext.Provider value={userToken}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContext;