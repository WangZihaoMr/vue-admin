<template>
  <template v-if="item && !item.children">
    <el-menu-item :index="item.path">
      <el-icon><document /></el-icon>
      <span> {{ item.meta.title }}</span>
    </el-menu-item>
  </template>
  <template v-if="item && item.children && item.children.length > 0">
    <el-sub-menu :index="item.index">
      <template #title>
        <el-icon></el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Item v-for="(child, i) in item.children" :item="child" :key="i"></Item>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => {}
  }
})

// eslint-disable-next-line vue/no-setup-props-destructure
const item = props.item
</script>

<style scoped lang="scss"></style>
