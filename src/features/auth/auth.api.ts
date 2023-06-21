import { authInstance } from 'common/insance/insance'

export const authApi = {
  getAccessToken() {
    return authInstance.post<Response>(
      'clients/accesstoken',
      {
        idClient: process.env.REACT_APP_CLIENT_ID,
        accessToken: '',
        paramName: 'device',
        paramValue: process.env.REACT_APP_DEVICE_ID,
        latitude: 0,
        longitude: 0,
        sourceQuery: 0
      },
      {}
    )
  }
}

export type Response = {
  result: Result
  accessToken: string
}

export type Result = {
  status: number
  message: string
  messageDev?: string
  codeResult: number
  duration: number
  idLog: string
}
