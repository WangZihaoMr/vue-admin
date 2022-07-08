import Layout from '../../layout'

export default {
  path: '/tool',
  name: 'sys:tools',
  meta: {
    title: '系统工具',
    icon: 'el-home'
  },
  component: Layout,
  redirect: '/tool/dicts',
  children: [
    {
      path: '/tool/dicts',
      component: () => import('../../views/dicts'),
      meta: {
        title: '数字字典',
        icon: 'el-home'
      },
    }
  ]
}
