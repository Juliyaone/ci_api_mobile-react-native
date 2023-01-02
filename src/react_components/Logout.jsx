import {deleteTokenFromStorage} from "../auth/tokenStorage";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";


function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const logout = () => {
        deleteTokenFromStorage(dispatch)
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