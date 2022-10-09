import { call, put, takeLatest } from "redux-saga/effects";
import { getAllUi, getListCategories } from "../../api";
import { setError } from "../Slice/productSlice";
import { getCategories, getUi, setCategories, setUi } from "../Slice/UiSlice";

const getUiAsync = function* (action) {
    try {
        const res = yield call(getAllUi, action.type)
        yield  put(setUi(res.data))
    } catch (error) {
        yield  put(setError(error.message))
    }
}

const getCategiesAsync = function* (action) {
    try {
        const res = yield call(getListCategories, action.type)
        yield  put(setCategories(res.data.list_category))
    } catch (error) {
        yield  put(setError(error.message))
    }
}

export default function* sliderSaga() {
    yield takeLatest(getUi.type, getUiAsync)
    yield takeLatest(getCategories.type, getCategiesAsync)
}