import { publicRoutes, privatorRoutes } from "@/router";

export default {
  namespaced: true,
  state: {
    routes: publicRoutes
  },
  mutations: {
    SET_ROUTES(state, routes) {
      state.routes = [...publicRoutes, ...routes]
    }
  },
  actions: {
    async filterRoutes({ commit }, menus) {
      const routes = []
      menus.forEach(name => {
        const data = privatorRoutes.filter(item => item.name === name)
        routes.push(...data)
      });
      commit('SET_ROUTES', routes)
      return routes
    }
  }
}