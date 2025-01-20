import axios from 'axios'

export default class Http {
  axiosIntance = axios.create({
    baseURL: 'https://api-ecom.duthanhduoc.com/',
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}