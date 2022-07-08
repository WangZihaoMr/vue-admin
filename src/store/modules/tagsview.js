import { getItem, setItem } from '@/utils/storage'

export default {
  namespaced: true,
  state: {
    tags: getItem('tags') || []
  },
  mutations: {
    SET_TAG(state, tag) {
      const data = state.tags.find(item => item.title === tag.title)
      console.log('mutaions===>', tag)
      if (!data) state.tags.push(tag)
      setItem('tags', state.tags)
    },
    DEL_TAG(state, index) {
      state.tags.splice(index, 1)
    }
  },
  actions: {
    addTag({ commit }, tag) {
      commit('SET_TAG', tag)
    },
    delTag({ commit }, index) {
      commit('DEL_TAG', index)
    }
  }
}
