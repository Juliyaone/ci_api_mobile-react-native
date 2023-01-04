import {useDispatch, useSelector} from "react-redux";
import {sendSmsCode} from "../redux/thunks/authThunks";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";


function SmsEntry() {
    const user = useSelector(store => store.userReducer)
    const [phone, setPhone] = useState(user.phone ? user.phone : '')
    const [code, setCode] = useState('')

    const navigate = useNavigate()
    useEffect(() => {
        if (user.is_verified) {
            navigate('/profile')
        }
    })

    const onChangePhone = (event) => {
        setPhone(event.target.value)
    }

    const onChangeCode = (event) => {
        setCode(event.target.value)
    }

    const dispatch = useDispatch()
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