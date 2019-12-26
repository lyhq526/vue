import ajax from "../ajax";
export function login (params) {
    return ajax.post('http://127.0.0.1:3000/login',params)
}