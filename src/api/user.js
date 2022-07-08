import request from '../utils/request'

// 验证码接口
const getCode = () => {
  return request({ url: '/captcha', method: 'GET' })
}

// 登录接口
const login = (data = {}) => {
  return request({ url: `/login?username=${data.username}&password=${data.password}&code=${data.code}&token=${data.token}`, method: 'POST' })
}

// nav菜单权限接口
const getNav = () => {
  return request({ url: '/sys/menu/nav', method: 'GET' })
}

// 用户信息接口
const getUserInfo = () => {
  return request({ url: '/sys/userInfo', method: 'GET' })
}

// 退出登录接口
const logOut = () => {
  return request({ url: '/logout', method: 'POST' })
}

// 导出方法
export default {
  getCode,
  login,
  getNav,
  getUserInfo,
  logOut
}