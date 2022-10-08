import { call, put, takeEvery } from "redux-saga/effects";
import { getListProducts } from "../../../api";
import { productAtc } from "../../Slice/action";

const getProducts = function* () {
   try {
    const data = yield call(getListProducts, productAtc.setListProduct().type)
    // yield put(productAtc.setListProduct(data?.list_product.data?.data) )
   } catch (error) {
    
   }
}

function* productSaga() {
    yield takeEvery(productAtc.setListProduct().type , getProducts)
} 

export default productSaga