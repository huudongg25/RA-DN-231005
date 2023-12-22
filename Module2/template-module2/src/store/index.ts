import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { countSlice } from './reducers/count'
import { userSlice } from './reducers/user';


const rootReducer = combineReducers({
    count: countSlice.reducer, // Đảm bảo bạn sử dụng counterSlice.reducer
    user:userSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch