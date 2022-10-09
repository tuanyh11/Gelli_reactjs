import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    error: '',
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        getProduct: () => {},

        setProducts: (state, action) => {
            state.products = action.payload
        },

        setError: (state, action) => {
            state.error = action.payload 
        }
    }
})

export const {getProduct, setProducts, setError} = productSlice.actions

export default productSlice.reducer 