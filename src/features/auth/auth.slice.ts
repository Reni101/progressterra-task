import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { authApi } from 'features/auth/auth.api'

export const authGetToken = createAsyncThunk<string>(
  'auth/authGetToken',
  async (_, { rejectWithValue }) => {
    try {
      const res = await authApi.getAccessToken()
      return res.data.accessToken
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

const slice = createSlice({
  name: 'auth',
  initialState: {
    accessToken: null as null | string
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(authGetToken.fulfilled, (state, action) => {
      state.accessToken = action.payload
    })
  }
})

export const authReducer = slice.reducer
