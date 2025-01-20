import Http from '../server/http'
import { AuthTypes } from '@types/AuthTypes.type'

const http = new Http()
export const login = async (payload: { email: string, password: string}) => {
  return await http.axiosIntance.post('login', payload)
}

export const register = async (payload: {email: string, password: string}) => {
  return await http.axiosIntance.post<AuthTypes>('register', payload)
}