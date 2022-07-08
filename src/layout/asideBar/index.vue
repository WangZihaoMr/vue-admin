<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    :default-active="$route.path"
    text-color="#fff"
    unique-opened
    router
  >
    <Item v-for="(item, index) in routeData" :key="index" :item="item"></Item>
  </el-menu>
</template>

<script setup>
import Item from './Item'
import { useRouter } from 'vue-router'
import { filterMenuData } from '../../utils/menus'
import { filterRouters, generateMenus } from '../../utils/router'
import { computed } from 'vue'

const router = useRouter()
const routeData = computed(() => {
  const routes = filterRouters(router.getRoutes())
  return filterMenuData(generateMenus(routes))
})
console.log(routeData)
</script>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}
</style>
