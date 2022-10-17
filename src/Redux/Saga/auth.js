import { call, takeLatest } from "redux-saga/effects"
import { loginApi, registerApi } from "../../api"
import { login, register } from "../Slice/authSlice"

const asyncLogin = function* (action) {
    try {
        yield console.log(123)

       const {res} = yield call(loginApi, action.payload)
    } catch (error) {
        
    }
}

const asyncRegister = function* (action) {
    try {
        const {res} = yield call(registerApi, action.payload)
    } catch (error) {
        console.log(error)
    }
}

function* authSaga() {
    yield takeLatest(login.type, asyncLogin)
    yield takeLatest(register.type, asyncRegister)
}

export default authSaga