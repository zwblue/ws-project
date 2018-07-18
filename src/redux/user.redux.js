import axios from "axios";
import { getRedirectPath } from '../util'
import { Toast } from 'antd'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';

const initState = {
    token: '',
    userName: '',
    msg: ''
}

export function user(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.data), isAuth: true, ...action.data }
        case LOAD_DATA:
            return { ...state, ...action.data }
        case ERROR_MSG:
            if (action.msg) {
                Toast.fail(action.msg)
            }
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state;
    }
}

function loginSuccess(data) {
    return { data: data, type: LOGIN_SUCCESS }
}
function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}
export function loadData(data) {
    return { data: data, type: LOAD_DATA }
}
export function login({ user, pwd }) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        axios.post('user/login', { user, pwd }).then(res => {
            if (res.status === 200 && res.data.code === 0) {
                Toast.success(res.data.msg)
                dispatch(loginSuccess(res.data.data))
            } else {
                dispatch(errorMsg(res.data.msg))
            }
        }).catch()
    }
}