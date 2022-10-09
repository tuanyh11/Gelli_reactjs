import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: null,
    data: {},
}


const uiSlice = createSlice({
    name: 'uiSlice',
    initialState,
    reducers: {
        getUi:() => {},
        getCategories:() => {},
        setCategories:(state, action) => {
            state.data = {...state.data, categories: action.payload}
        },
        setUi:(state, action) => {
            state.data = {...state.data, ...action.payload}
        },
        setError:(state, action) => {
            state.error = action.payload
        },
    }
})

export const {getUi, setUi, getCategories, setCategories,  setError} = uiSlice.actions
export default uiSlice.reducer