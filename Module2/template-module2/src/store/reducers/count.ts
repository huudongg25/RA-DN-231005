import { createSlice } from "@reduxjs/toolkit"

export const countSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        upCount(state: number) {
            return state + 1
        },
        downCount(state: number) {
            return state - 1
        },
        sum(state: number, action) {
            console.log(action.type);
            return state + action.payload
        }
    },
})

export const { upCount, downCount, sum } = countSlice.actions

export default countSlice.reducer