export const routeMenus = [{
  name: 'dynamicPlanning',
  cnName: '动态规划',
  path: '/dynamicPlanning',
  icon: 'el-icon-ice-drink',
  componentPath: () => import('../views/ChildHome.vue'),
  children: [{
    name: 'shortPath',
    cnName: '最短路径',
    path: 'shortPath',
    componentPath: () => import('../components/DynamicPlanning/ShortPath.vue')
  }, {
    name: 'coinSettle',
    cnName: '硬币找零',
    path: 'coinSettle'
  }]
}, {
  name: 'greedyAlgorithm',
  cnName: '贪心算法',
  path: '/greedyAlgorithm',
  icon: 'el-icon-ice-tea',
  componentPath: () => import('../views/ChildHome.vue'),
  children: [{
    name: 'distributingCookies',
    cnName: '分布饼干',
    path: 'distributingCookies'
  }]
}]
