import {useSelector} from "react-redux";


function Message() {
    const messages = useSelector(store => store.messagesReducer)
    const user = useSelector(store => store.userReducer)

    return (
        <div>
            <p>MESSAGE: type: [{messages.messageType}]</p>
            <p>text: [{messages.message}]</p>
            <p>isCreated: [{user.isCreated.toString()}]</p>
            <p>isLogged: [{user.isLogged.toString()}]</p>
        </div>
    )
}

export default Message;