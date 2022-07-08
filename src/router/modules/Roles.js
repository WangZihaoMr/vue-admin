import Layout from '../../layout'

export default {
  path: '/sys',
  name: 'sys:role:list',
  meta: {
    title: '系统管理',
    icon: 'el-home'
  },
  component: Layout,
  redirect: '/sys/roles',
  children: [
    {
      path: '/sys/roles',
      component: () => import('../../views/roles'),
      meta: {
        title: '角色管理',
        icon: 'el-home'
      },
    }
  ]
}