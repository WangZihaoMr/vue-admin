<template>
  <div class="header-container">
    <div class="header-left">左</div>
    <div class="header-right">
      <el-avatar :src="$store.getters.userInfo.avatar" />
      <div>
        <el-dropdown @command="handleSelectOptions">
          <span class="el-dropdown-link">
            test<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="single">个人中心</el-dropdown-item>
              <el-dropdown-item command="logOut">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ArrowDown } from '@element-plus/icons-vue'

const store = useStore()
const handleSelectOptions = (command) => {
  if (command === 'single') {
    handleToSingle()
  } else {
    handleLogOut()
  }
}

const handleToSingle = () => {
  console.log('个人中心')
}
const handleLogOut = () => {
  store.dispatch('user/loginOut')
}
</script>

<style scoped lang="scss">
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
}
.header-right {
  display: flex;
  align-items: center;
  .el-avatar {
    margin-right: 10px;
  }
}
</style>
