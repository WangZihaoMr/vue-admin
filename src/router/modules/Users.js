import Layout from '../../layout'

export default {
  path: '/sys',
  name: 'sys:user:list',
  meta: {
    title: '系统管理',
    icon: 'el-home'
  },
  component: Layout,
  redirect: '/sys/users',
  children: [
    {
      path: '/sys/users',
      component: () => import('../../views/users'),
      meta: {
        title: '用户管理',
        icon: 'el-home'
      },
    }
  ]
}