// import axios from "axios";
// import * as urls from "./urls";
//
// /**
//  Делает запрос для регистрации нового пользователя.<br>
//  Для тестовых запросов добавлять поле 'test': true
//  @param payload - {
//  <br>username, <br>last_name, <br>third_name, <br>email, <br>phone, <br>password, <br>password2, <br>gender <br>}
//  **/
// export const registration = (payload) => {
//     payload = {
//         ...payload,
//         'test': true
//     }
//     return axios.post(urls.REGISTRATION, payload)
// }
//
// /**
//  Делает запрос для подтверждения телефона с помощью смс-кода. Код - строка из четырех цифр.
//  @param payload - {
//  <br>phone, <br>code <br>}
//  **/
// export const verification = (payload) => {
//     // const smsCodeArr = [number1, number2, number3, number4];
//     // const smsCode = smsCodeArr.join('');
//     return axios.post(urls.VERIFICATION_SMS_CODE, payload)
// }
//
// /**
//  Делает запрос для авторизации с телефоном и паролем.
//  @param payload - {
//  <br>phone, <br>password <br>}
//  **/
// export const login = payload => axios.post(urls.LOGIN, payload)
