// const SERVER_URL = 'http://localhost:8000'
const SERVER_URL = 'http://energy.qidoctor.ru:8000'
const BASE_URL = `${SERVER_URL}/api/v1`

const AUTH = '/auth'
export const REGISTRATION = `${BASE_URL}${AUTH}/register`
export const VERIFICATION_SMS_CODE = `${BASE_URL}${AUTH}/verify_sms_code`
export const LOGIN = `${BASE_URL}${AUTH}/login`

const USERS = '/users'
export const GET_ALL_RATES = `${BASE_URL}${USERS}/rates`
export const EDIT_PROFILE = `${BASE_URL}${USERS}/edit`
export const SET_MOOD = `${BASE_URL}${USERS}/set_user_mood`
export const CHECK_FIRST_ENTRY = `${BASE_URL}${USERS}/check_first_entry`
export const UPLOAD_AVATAR_FILE = `${BASE_URL}${USERS}/upload_avatar_file`
export const DELETE_USER = `${BASE_URL}${USERS}`


const COMPLEX = '/complex'
export const COMPLEXES_STATE = `${BASE_URL}${COMPLEX}/state`
export const SET_COMPLEX_VIEWED = `${BASE_URL}${COMPLEX}/set_viewed`

const VIDEOS = '/videos'
export const ALL_VIDEOS_FOR_COMPLEX = `${BASE_URL}${VIDEOS}/all_for`
