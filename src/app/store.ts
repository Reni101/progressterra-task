import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { authReducer } from 'features/auth/auth.slice'
import { bonusReducer } from 'features/bonus/bonuse.slice'

const rootReducer = combineReducers({
  auth: authReducer,
  bonus: bonusReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
