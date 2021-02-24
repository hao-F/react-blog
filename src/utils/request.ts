import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000
})

service.interceptors
