import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit'
import { appReducer } from 'app/app.slice'

const rootReducer = combineReducers({
  app: appReducer,
  // bonus: bonusReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
