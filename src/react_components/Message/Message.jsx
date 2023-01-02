import {useSelector} from "react-redux";
import {useContext} from "react";
import AuthContext from "../../auth/AuthContext";


function Message() {
    const messages = useSelector(store => store.messagesReducer)
    const user = useSelector(store => store.userReducer)
    const userToken = useContext(AuthContext)

    return (
        <div>
            <p>MESSAGE: type: [{messages.messageType}]</p>
            <p>text: [{messages.message}]</p>
            <p>userToken: [{userToken}]</p>
            <p>User: [{user.username}, {user.email}, {user.password}]</p>
            <p>isCreated: [{user.isCreated.toString()}]</p>
            <p>isLogged: [{user.isLogged.toString()}]</p>

        </div>
    )
}

export default Message;