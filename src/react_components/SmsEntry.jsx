import {useDispatch, useSelector} from "react-redux";
import {inputLoginPhone, inputLoginSmsCode} from "../redux/actions/userActions"
import {sendSmsCode} from "../redux/thunks/authThunks";


function SmsEntry() {
    const {phone, code} = useSelector(store => store.smsEntryReducer)
    const user = useSelector(store => store.userReducer)
    const dispatch = useDispatch()

    const onChangePhone = (event) => {
        dispatch(inputLoginPhone(event.target.value))
    }

    const onChangeCode = (event) => {
        dispatch(inputLoginSmsCode(event.target.value))
    }

    const sendApproveSmsCode = () => {
        const payload = {phone, code}
        dispatch(sendSmsCode(payload))
    }

    return (
        <div>
            <div>User: email: [{user.email}] phone: [{user.phone}]</div>
            <textarea
                value={phone}
                placeholder='phone'
                onChange={onChangePhone}>
            </textarea>
            <textarea
                value={code}
                placeholder='code'
                onChange={onChangeCode}>
            </textarea>
            <button onClick={sendApproveSmsCode}>
                Подтвердить
            </button>
        </div>
    )
}

export default SmsEntry;