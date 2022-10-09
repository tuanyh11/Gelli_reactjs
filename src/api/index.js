import axios from "axios"

export const URL = 'http://127.0.0.1:8000'

const Api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

export const getListProducts = () => {
    return Api.get('/products')
}

export const getAllUi = () => {
    return Api.get('/settings')
}


export const getListCategories = () => {
    return Api.get('/categories')
}

export const getAllBrand =  () => {
    return Api.get('/brand')
}
