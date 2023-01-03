import {useSelector} from "react-redux";
import {useContext} from "react";
import AuthContext from "../../auth/AuthContext";


function Message() {
    const messages = useSelector(store => store.messagesReducer)
    const user = useSelector(store => store.userReducer)
    const userToken = useContext(AuthContext)

    return (
        // <View>
            
        //     {/* <Text>MESSAGE: type: [{messages.messageType}]</Text> */}
        //     <Text>text: [{messages.message}]</Text>
        //     <Text>userToken: [{userToken}]</Text>
        //     <Text>User: [{user.username}, {user.email}, {user.password}]</Text>
        //     <Text>isCreated: [{user.isCreated.toString()}]</Text>
        //     <Text>isLogged: [{user.isLogged.toString()}]</Text>

        // </View>
    )
}

export default Message;