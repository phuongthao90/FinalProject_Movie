// định nghĩa các tham số cố định
import axios from 'axios'
export const DOMAIN = 'https://movienew.cybersoft.edu.vn'
export const TOKEN = 'accessToken'
export const GROUPID = 'GP13'

export const USER_LOGIN = 'USER_LOGIN'




// Cấu hình interceptor (Những thông số mặc định cho tất cả api)

export const http = axios.create({
    baseURL:'https://movienew.cybersoft.edu.vn',
    timeout:30000
})

http.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        'TokenCybersoft':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMSIsIkhldEhhblN0cmluZyI6IjEyLzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTcyMTYwMDAwMCIsIm5iZiI6MTYyMDkyNTIwMCwiZXhwIjoxNjQ5ODY5MjAwfQ.RkFKrifGWTY3MP0bQtIpvA5WpWWrcSkGjDSw01LwhuI',
        'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)

    }
    return config
},(error) => {
    return Promise.reject(error)
})