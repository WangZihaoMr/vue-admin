import Layout from '../../layout'

export default {
  path: '/sys',
  name: 'sys:menu:list',
  meta: {
    title: '系统管理',
    icon: 'el-home'
  },
  component: Layout,
  redirect: '/sys/menus',
  children: [
    {
      path: '/sys/menus',
      component: () => import('../../views/menus'),
      meta: {
        title: '菜单管理',
        icon: 'el-home'
      },
    }
  ]
}
