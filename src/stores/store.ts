import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlide'
import loadingReducer from './slice/loadingSlice'
import authReducer from './slice/authSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    loading: loadingReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch