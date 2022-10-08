import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
    products: []
}

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setListProduct: (state) => {
            console.log(current(state))
        }
    }
})

export const productAtc = productSlice.actions

export default productSlice.reducer 