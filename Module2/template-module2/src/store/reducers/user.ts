import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getUser = createAsyncThunk('user/fetchById', async () => {
    const respone = await axios('https://jsonplaceholder.typicode.com/users/1')
    return respone.data as any
})


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: false,
        data: undefined
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(getUser.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }
})

export const { } = userSlice.actions

export default userSlice.reducer