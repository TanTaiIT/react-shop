import { createSlice } from "@reduxjs/toolkit"

const inititalState = {
  loading: false
}

const loadingSlice = createSlice({
  name: 'Loading',
  initialState: inititalState,
  reducers: {
    setLoading: (state, action) => {
      return {...state, loading: action.payload }
    }
  }
})
export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer 