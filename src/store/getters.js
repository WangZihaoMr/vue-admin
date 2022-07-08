const getters = {
  token: (state) => state.user.token,
  userInfo: (state) => state.user.userInfo,
  nav: (state) => state.user.nav,
  tags: (state) => state.tagsview.tags
}
export default getters
