import React, { useEffect } from 'react'
import 'app/App.module.css'
import { useAppDispatch, useAppSelector } from 'common/hooks/useAppHooks'
import { authGetToken } from 'features/auth/auth.slice'
import { Bonus } from 'features/bonus/Bonus'
import logo from 'common/assets/Logo.svg'
import style from './App.module.css'

function App() {
  const dispatch = useAppDispatch()
  const token = useAppSelector(state => state.auth.accessToken)

  useEffect(() => {
    dispatch(authGetToken())
  }, [])

  return token ? (
    <div className={style.container}>
      <div className={style.logoContainer}>
        <span>ЛОГОТИП</span> <img src={logo} alt='logo' />
      </div>
      <Bonus />
    </div>
  ) : null
}

export default App
