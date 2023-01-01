import {deleteTokenFromStorage} from "../auth/tokenStorage";
import {useDispatch} from "react-redux";


function Logout() {
    const dispatch = useDispatch()

    const logout = () => {
        deleteTokenFromStorage(dispatch)
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