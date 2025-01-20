// import { User } from '@types/Usertype.ts'
import { User } from './Usertype'
export interface AuthTypes {
  access_token: string
  refresh_token: string
  expires_refresh_token: string
  expires: number
  user: User
}