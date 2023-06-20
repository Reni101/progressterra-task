import axios from 'axios'

const headers = {
  AccessKey: process.env.REACT_APP_ACCESS_KEY
}
export const authInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_TOKEN,
  headers
})

export const bonusInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL_BONUS,
  headers
})
