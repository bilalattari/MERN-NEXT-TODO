import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
import taskReducer from './features/taskSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        task: taskReducer
    },
})
