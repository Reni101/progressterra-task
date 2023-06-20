import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authApi } from 'app/app.api'

export const authAndRefresh = createAsyncThunk(
  'auth/authAndRefresh',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await authApi.getAccessToken()
      return res.data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

const slice = createSlice({
  name: 'app',
  initialState: {
    accessToken: null as null | string
  },
  reducers: {

  }
})

export const {} = slice.actions
export const appReducer = slice.reducer
