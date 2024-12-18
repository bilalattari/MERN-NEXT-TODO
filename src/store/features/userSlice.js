
import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    isLogin: false,
    user: null
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.user = null
            state.isLogin = false
        },
        loginUser: (state, action) => {
            state.user += action.payload
            state.isLogin = true
        },
    },
})

export const { logoutUser, loginUser } = userSlice.actions

export default userSlice.reducer

