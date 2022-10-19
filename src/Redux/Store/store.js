import {combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../Saga";
import {productSlice, cartSlice, authSlice} from "../Slice/";
import uiSlice from "../Slice/UiSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    user: authSlice,
    cart: cartSlice
})

const persistedCartSlice = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()
const store =  configureStore({
    reducer: {
        product: productSlice,
        ui: uiSlice,
        persistData: persistedCartSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
        {serializableCheck: false}
    ).concat(sagaMiddleware) 
})

sagaMiddleware.run(rootSaga)


export const persistor = persistStore(store)
export default store 