import axios from "axios";
import { getRedirectPath } from '../util'
import { getRequestUrl } from '../util'
import { Message } from 'antd'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const ERROR_MSG = 'ERROR_MSG';
const LOAD_DATA = 'LOAD_DATA';

const api = {
    login: 'http://192.168.3.26:6426/user/login'
}
const initState = {
    token: '',
    msg: '',
    isLogin: '',
    user: {}
}

export function user(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLogin: true, ...action.data }
        case LOAD_DATA:
            return { ...state, ...action.data }
        case ERROR_MSG:
            return { ...state, isLogin: false, msg: action.msg }
        default:
            return state;
    }
}

function loginSuccess(data) {
    return { data: data.data, type: LOGIN_SUCCESS }
}
function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}
export function loadData(data) {
    console.log(data);
    return { data: data, type: LOAD_DATA }
}
export function login(params) {
    const code = { code: 1 }
    let params1 = { ...code, ...params }
    return dispatch => {
        axios.post(api.login, params1).then(res => {
            if (res.data.code === 0) {
                Message.success(res.data.msg)
                dispatch(loginSuccess(res.data))
            } else {
                Message.error(res.data.msg)
            }
        }).catch()
    }
}