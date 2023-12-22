import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import UserService from "../../services/user.service"

export const handleLogin = createAsyncThunk('user/fetchById', async (formData: any) => {
    try {
        const userService = new UserService()
        const response: any = await userService.login(formData)
        console.log(response);
        localStorage.setItem('token', response.data.accessToken)
        localStorage.setItem('idUser', response.data.user.id)
        return response
    } catch (error) {
        return error
    }
})


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        data: undefined
    },
    reducers: {
        logout: (state) => {
            state.data = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(handleLogin.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(handleLogin.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload.data
        })
    }
})

export const { } = userSlice.actions

export default userSlice.reducer