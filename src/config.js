import axios from 'axios'
import { Modal } from "antd";
import { getRequestUrl } from './util';
import Qs from 'qs'

const service = axios.create({
    baseURL: getRequestUrl(),
    timeout: 10000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
    }
});
// 拦截请求
service.interceptors.request.use(function (config) {
    config.data = Qs.stringify(config.data);
    return config;
})
// 拦截响应
service.interceptors.response.use(
    response => {
        if (response.data.code === 403) {
            sessionStorage.clear();
            localStorage.clear();
            let loginURL;
            if (process.env.NODE_ENV === 'development') {
                loginURL = "http://localhost:8080/#/login";
            } else {
                if (process.env.type === "test") {
                    loginURL = "http://192.168.3.26:5026/ws-operationsystem/#/login";
                } else {
                    loginURL = "http://report.wsloan.com:8888/wsdm/#/login";
                }
            }
            Modal.error({
                title: '提示',
                content: '您的登录信息已过时, 请重新登陆',
                onOk: () => {
                    window.top.location.href = loginURL;
                }
            })
        }
        return response;
    },
    error => {
        return Promise.reject(error);
    }
)
export default service;