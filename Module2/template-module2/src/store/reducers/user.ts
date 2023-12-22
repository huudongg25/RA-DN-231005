import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import UserService from "../../services/user.service"

export const handleLogin = createAsyncThunk('user/fetchById', async (formData: any) => {
   try {
    const userService = new UserService()
    const response: any = await userService.login(formData)
    console.log(response);
    localStorage.setItem('token', response.data.accessToken)
    return response.data
   } catch (error) {
    console.log(error);
    throw error
   }
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
        builder.addCase(handleLogin.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = false
        })
        builder.addCase(handleLogin.rejected, (state, action) => {
            state.loading = false
            state.error = true
        })
    }
})

export const { } = userSlice.actions

export default userSlice.reducer