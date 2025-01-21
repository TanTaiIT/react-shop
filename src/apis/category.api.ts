import Http from './../server/http'
import { CategoryTypes } from '../types/Category.type'
import { ResponseType } from '../types/utils'
const http = new Http()
export const getAllCatgegories = async () => {
  return await http.axiosIntance.get<ResponseType<CategoryTypes[]>>('categories')
}