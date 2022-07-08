<template>
  <el-container>
    <el-aside width="200px">
      <app-aside></app-aside>
    </el-aside>
    <el-container>
      <el-header>
        <app-nav></app-nav>
      </el-header>
      <tags-view></tags-view>
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import AppAside from './asideBar'
import AppMain from './AppMain'
import AppNav from './AppNav'
import TagsView from '../components/TagsView'
</script>
<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
}
.el-aside {
  height: 100%;
  background-color: #545c64;
}
.el-header {
  background-color: #17b3a3;
}
.el-main {
  // background-color: purple;
}
::-webkit-scrollbar {
  display: none;
}
</style>
