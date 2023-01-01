import {useSelector} from "react-redux";


// TODO add to App
function Message() {
    const messages = useSelector(store => store.messagesReducer)
    return (
        <View>
            MESSAGE: type: [{messages.messageType}]
            text: [{messages.message}]
        </View>
    )
}

export default Message;
