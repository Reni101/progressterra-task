import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { bonusApi, BonusData } from 'features/bonus/bonuse.api'
import { AppRootStateType } from 'app/store'

export const getBonus = createAsyncThunk<BonusData, void, { state: AppRootStateType }>(
  'bonus/getBonus',
  async (_, { rejectWithValue, getState }) => {
    const accessToken = getState().auth.accessToken
    try {
      const res = await bonusApi.getBonus(accessToken!)
      return res.data.data
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)

const initialState: BonusData = {
  typeBonusName: '',
  currentQuantity: 0,
  forBurningQuantity: 0,
  dateBurning: ''
}

const slice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getBonus.fulfilled, (state, action) => {
      state.typeBonusName = action.payload.typeBonusName
      state.currentQuantity = action.payload.currentQuantity
      state.forBurningQuantity = action.payload.forBurningQuantity
      state.dateBurning = action.payload.dateBurning
    })
  }
})

export const bonusReducer = slice.reducer

export const burningBonus = (state: AppRootStateType) => state.bonus.dateBurning
export const dateBurningBonus = createSelector(burningBonus, burningBonus => {
  if (burningBonus) {
    const date = new Date(burningBonus)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')

    return `${day}.${month}`
  }
})
