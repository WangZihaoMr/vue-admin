import router from '@/router'
import UserApi from '../../api/user'
import { setItem, getItem } from '../../utils/storage'

const SET_TOKEN_KEY = 'token'

export default {
  namespaced: true,
  state: {
    token: getItem(SET_TOKEN_KEY) || '',
    userInfo: '',
    nav: ''
  },
  mutations: {
    SET_TOKEN_KEY(state, token) {
      state.token = token
      setItem(SET_TOKEN_KEY, token)
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_NAV(state, nav) {
      state.nav = nav
    }
  },
  actions: {
    async loginHome({ commit }, loginData) {
      try {
        const res = await UserApi.login(loginData)
        // console.log(res);
        return res
      } catch (error) {
        console.log(error)
      }
    },
    async getInfo({ commit }) {
      try {
        const res = await UserApi.getUserInfo()
        // console.log(res);
        commit('SET_USER_INFO', res)
        return res
      } catch (error) {
        console.log(error)
      }
    },
    async getNav({ commit }) {
      try {
        const res = await UserApi.getNav()
        // console.log('resnav =', res);
        commit('SET_NAV', res)
        return res
      } catch (error) {
        console.log(error)
      }
    },
    async loginOut({ commit }) {
      const res = await UserApi.logOut()
      console.log(res)
      commit('SET_TOKEN_KEY', '')
      commit('SET_USER_INFO', '')
      commit('SET_NAV', '')
      router.push('/login')
    }
  }
}
