import {deleteTokenFromStorage} from "../auth/tokenStorage";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {userApi} from "../redux/api";


function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const logout = async () => {
        await deleteTokenFromStorage()
        // dispatch(userApi.util.resetApiState()) // Очищает весь стэйт
        dispatch(userApi.util.invalidateTags(['User']))  // Очищает стэйт User
        navigate('/login')
    }

    return (
        <div>
            <button onClick={logout}>
                Выйти
            </button>
        </div>
    )
}

export default Logout;