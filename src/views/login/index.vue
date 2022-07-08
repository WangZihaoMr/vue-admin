<template>
  <div class="login-container">
    <el-form
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginFormRules"
      label-width="120px"
      class="demo-ruleForm"
      :size="large"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model.trim="loginForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model.trim="loginForm.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model.trim="loginForm.code" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLoginSubmit">提交</el-button>
        <el-button>获取密码</el-button>
      </el-form-item>
    </el-form>
    <img :src="codeUrl" alt="" @click="handleCodeChange" />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import UserApi from '../../api/user'

const store = useStore()
const router = useRouter()

const loginFormRef = ref()

const loginFormRules = reactive({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  code: [{ required: true, message: '请输入验证码', trigger: 'blur' }]
})

const loginForm = reactive({
  username: 'test',
  password: '1234567',
  code: '',
  token: ''
})

const codeUrl = ref()

const handleCodeChange = async () => {
  const res = await UserApi.getCode()
  loginForm.token = res.token
  codeUrl.value = res.captchaImg
}
handleCodeChange()

const handleLoginSubmit = async () => {
  if (!loginFormRef.value) return
  await loginFormRef.value.validate(async (valid) => {
    await store.dispatch('user/loginHome', loginForm)
    router.push('/')
  })
}
</script>

<style scoped lang="scss"></style>
