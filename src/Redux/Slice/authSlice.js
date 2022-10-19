import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    error: null,
    token: null
}

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers:{
        startLogin() {

        },
        startRegister() {

        },
        startCompleteRegister() {

        }
        ,
        loginSuccess(state, action){
            state.user = action.payload.user
            state.token = action.payload?.token
        },

        registerSuccess(state, action) {
            state.user = action.payload.user
        },

        completeRegisterSuccess(state, action) {
            state.user = action.payload.user
        },

        handleErrAuth(state, action) {
            state.error = action?.payload?.response?.data?.message
        }
    }
})

export const {startLogin, startRegister, startCompleteRegister,  handleErrAuth, loginSuccess, registerSuccess, completeRegisterSuccess} = authSlice.actions

export default authSlice.reducer