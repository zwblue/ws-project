export function getRedirectPath({ type, avatar }) {
    let url = (type === 'boss') ? '/boss' : '/genius'
    if (!avatar) { url += 'info' }
    return url
}


let baseURL = "";
if (process.env.NODE_ENV === 'development') {
    baseURL = "http://192.168.3.26:5826";
    console.log('dev', baseURL);
} else {
    console.log(11111, process.env.type)
    if (process.env.type === 'test') {
        baseURL = "http://192.168.3.26:5826";
        console.log('test', baseURL);
    } else {
        baseURL = "http://report.wsloan.com:8888/projectManage";
        console.log('pro', baseURL);
    }
}
export function getUploadUrl() {
    let uploadUrl = baseURL + '/uploadFile';
    return uploadUrl;
}

export function getRequestUrl() {
    let requestUrl = baseURL;
    return requestUrl;
}
