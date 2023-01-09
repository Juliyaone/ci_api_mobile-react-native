export const SUCCESS_TYPE = 'success'
export const ERROR_TYPE = 'error'


export const successMessages = {
    LOGIN_OK: 'Вы удачно зашли в аккаунт',
    SMS_APPROVE_OK: 'Смс-код подтвержден',
    SUBSCRIBE_OK: 'Вы удачно оформили подписку',
    NEED_VERIFICATION: 'Необходимо верифицировать телефон',
    EDIT_PROFILE_OK: 'Профиль изменен',
}

const errorMessages = {
    UNDEFINED_ERROR: 'Ошибка не распознана',
    'Invalid phone number': 'Неверный номер телефона',
    'Invalid user or password': 'Неверный логин или пароль',
    'Invalid sms code': 'Неверный смс-код',
    'Sms service error': 'Неверный номер телефона',
    'Email exists': 'Пользователь с таким email уже существует',
    'Phone exists': 'Пользователь с таким телефоном уже существует',
    'Not authenticated': 'Необходима авторизация',
    'Not Found': 'Страница не найдена',
}

export const ErrorMessage = ({text}) => {
    if (!text) {
        return <></>
    }
    let message = errorMessages[text]
    if (!message) {
        console.error(text)
        message = errorMessages.UNDEFINED_ERROR
    }
    return (
        <div>
            Error: {message}
        </div>
    )
}

export const SuccessMessage = ({text}) => {
    if (!text) {
        return <></>
    }
    return (
        <div>
            Success: {text}
        </div>
    )
}


function Message({type = '', text = ''}) {

    if (!text) {
        return <></>
    }
    if (type === ERROR_TYPE) {
        return <ErrorMessage text={text}/>
    } else if (type === SUCCESS_TYPE) {
        return <SuccessMessage text={text}/>
    } else {
        return (
            <div>
                Undefined error type {type} with message {text}
            </div>
        )
    }
}

export default Message;