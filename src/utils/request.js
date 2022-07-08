import axios from 'axios'

import store from '../store'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000
})

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    const token = store.getters.token
    if (token) config.headers.Authorization = token
    // Do something before request is sent
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    const authorization = response.headers.authorization
    if (authorization) {
      store.commit('user/SET_TOKEN_KEY', authorization)
    }

    if (response.data.code === 200) {
      return response.data.data
    }
    // return data
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

// 处理统一传参
function request(options) {
  options.method = options.method || 'GET'
  if (options.method.toLocaleUpperCase() === 'GET') {
    options.params = options.data
  }
  return instance(options)
}
// options.method = options.method || 'GET'
// options.method = options.method.toLocaleUpperCase() === 'GET' ? options.data : {}
// return instance(options)

export default request
