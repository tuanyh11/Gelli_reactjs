import {all} from 'redux-saga/effects'
import productSaga from './productSaga.js' 
import uiSaga from './uiSaga.js' 

export default function* rootSaga() {
    yield all([productSaga(), uiSaga()])
}