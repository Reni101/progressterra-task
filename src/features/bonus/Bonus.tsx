import React, {useEffect} from 'react'
import {useAppDispatch, useAppSelector} from 'common/hooks/useAppHooks'
import {dateBurningBonus, getBonus} from 'features/bonus/bonuse.slice'
import arrow from '../../common/assets/Group 3112.svg'
import fire from '../../common/assets/Path 241.svg'
import style from './Bonus.module.css'

export const Bonus = () => {
  const dispatch = useAppDispatch()
  const bonus = useAppSelector(state => state.bonus)
  const dateBonus = useAppSelector(dateBurningBonus) || ''

  useEffect(() => {
    dispatch(getBonus())
  }, [])

  return (
    <div className={style.container}>
      <div className={style.bonusContainer}>
        <div className={style.bonuses}>
          <span className={style.bonus}>{bonus.currentQuantity} Бонусов</span>
          <span className={style.burningBonus}>
            {dateBonus} сгорит <img src={fire} alt='fire' />
            {bonus.forBurningQuantity} бонусов
          </span>
        </div>

        <img src={arrow} alt='arrow' />
      </div>
    </div>
  )
}
