import fetch from './config.js'

export function getMenuApi(data) {
    return fetch({
        url: '/findRoleMenu',
        method: 'post',
        data: data
    })
}
export function getUserInfoApi(data) {
    return fetch({
        url: '/query/userid.htmls',
        baseURL: 'http://192.168.3.26:8011',
        method: 'post',
        data: data
    })
}