import { call, put, takeLatest } from "redux-saga/effects"
import { completeRegisterApi, loginApi, registerApi } from "../../api"
import {  completeRegisterSuccess, handleErrAuth, loginSuccess, registerSuccess, startCompleteRegister, startLogin, startRegister } from "../Slice/authSlice"

const asyncLogin = function* (action) {
    try {

       const res = yield call(loginApi, action.payload)
       yield put(loginSuccess(res.data))
    } catch (error) {
        yield put(handleErrAuth(error))
    }
}

const asyncRegister = function* (action) {
    try {
        const res = yield call(registerApi, action.payload)
        yield put(registerSuccess(res.data))
    } catch (error) {
        yield put(handleErrAuth(error))
    }
}

const asyncCompleteRegister = function* (action) {
    try {
        const res = yield call(completeRegisterApi, action.payload)
        yield put(completeRegisterSuccess(res.data))
    } catch (error) {
        yield put(handleErrAuth(error))
    }
}

function* authSaga() {
    yield takeLatest(startLogin.type, asyncLogin)
    yield takeLatest(startRegister.type, asyncRegister)
    yield takeLatest(startCompleteRegister.type, asyncCompleteRegister)
}

export default authSaga