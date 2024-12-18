

import { ApiRoutes } from '@/constant/constant';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { getCookie } from 'cookies-next';

export const fetchTask = createAsyncThunk('tasks/fetchTask', async () => {
    const token = getCookie('token');
    const response = await axios.get(ApiRoutes.getTask, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log("TASK API CALLED=>", response.data)
    return response.data
})

// export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
//     const token = getCookie('token');
//     const response = await axios.post(ApiRoutes.getTask, task {
//         headers: {
//             Authorization: `Bearer ${token}`
//         },
//     })
//     console.log("TASK API CALLED=>", response.data)
//     return response.data
// })

const initialState = {
    tasks: [],
    isLoading: true,
    status: "pending",
    error: null
}
export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchTask.pending, (state, action) => {
                state.status = 'pending'
            })
            .addCase(fetchTask.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.tasks = action.payload
            })
            .addCase(fetchTask.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message ?? 'Unknown Error'
            })
    }
})

export const { } = taskSlice.actions

export default taskSlice.reducer

