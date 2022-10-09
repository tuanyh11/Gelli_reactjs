import {configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../Saga";
import {productSlice} from "../Slice/";
import uiSlice from "../Slice/UiSlice";

const sagaMiddleware = createSagaMiddleware()

const store =  configureStore({
    reducer: {
        product: productSlice,
        ui: uiSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware) 
})

sagaMiddleware.run(rootSaga)

export default store 