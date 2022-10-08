import axios from "axios"

const url = ''

const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const getListProducts = () => {
    return Api.get('/products')
}