import { bonusInstance } from 'common/insance/insance'
import { Result } from 'features/auth/auth.api'

export const bonusApi = {
  getBonus(accessToken: string) {
    return bonusInstance.get<ResponseBonus>(`ibonus/generalinfo/${accessToken}`)
  }
}

export type ResponseBonus = {
  resultOperation: Result
  data: BonusData
}

export type BonusData= {
  typeBonusName: string
  currentQuantity: number
  forBurningQuantity: number
  dateBurning: string
}
