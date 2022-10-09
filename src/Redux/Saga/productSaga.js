import { call, put, takeLatest } from "redux-saga/effects";
import { getListProducts } from "../../api";
import { getProduct, setError, setProducts } from "../Slice/productSlice";

const getProductsAsync = function* (action) {
   try {
    const {data: res} = yield call(getListProducts, action.type) 
    yield put(setProducts(res?.list_product.data))
   } catch (error) {
    yield put(setError(error.Message))
   }
}

function* productSaga() {
    yield takeLatest( getProduct.type , getProductsAsync)
} 

export default productSaga