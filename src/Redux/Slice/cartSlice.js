import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    length: 0,
    error: null,
}

const setLength = (state) => state.length = state.cart.length

const cartSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
       addProductToCart: (state, action) => {
        const existingProduct = state.cart.findIndex(cartItem => cartItem.id === action.payload.id)
        if(existingProduct > -1) {
            state.cart[existingProduct].quantity = ++state.cart[existingProduct].quantity
            return
        }

        state.cart.push({quantity: 1, ...action.payload})
        setLength(state)
       },

       handleSetQuantity:(state, action) => {
        state.cart[action.payload.index].quantity = action.payload.quantity
       },

       handleDelCartItem:(state, action) => {  
        state.cart = state.cart.filter(cartItem => cartItem.id !== action.payload.id)
        setLength(state)
       }
    }
})

export const {addProductToCart, handleSetQuantity, handleDelCartItem} = cartSlice.actions

export default cartSlice.reducer 