import axios from "axios";
import { getRedirectPath } from '../util'
import { getRequestUrl } from '../util'
import { Message } from 'antd'
import { getUserInfoApi } from '../api/user'

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';

const api = {
    login: 'http://192.168.3.26:6426/user/login',
    getInfo: 'http://192.168.3.26:6426/query/userid.htmls'
}
const initState = {
    token: '',
    isLogin: ''
}

export function user(state = initState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { ...state, isLogin: true, token:action.data }
        case LOAD_DATA:
            return { ...state, ...action.data }
        default:
            return state;
    }
}

function loginSuccess(data) {
    return { data: data.token, type: LOGIN_SUCCESS }
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
                dispatch(loginSuccess(res.data.data))
            } else {
                Message.error(res.data.msg)
            }
        }).catch()
    }
}
export function getInfo(params) {
    return dispatch => {
        getUserInfoApi(params).then(res => {
            console.log(res.data)
            if (res.data.code === 0) {
            } else {
                Message.error(res.data.msg)
            }
        }).catch()
    }
}