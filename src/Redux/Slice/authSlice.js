import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userInfo: {},
    error: null,
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{
        login() {

        },
        register() {

        }
    }
})

export const {login, register} = authSlice.actions

export default authSlice.reducer