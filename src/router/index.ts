import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { routeMenus } from '../constants/routes'

Vue.use(VueRouter)

const analysisMenus: (menus: any[]) => any[] = menus => menus.map(item => {
  const { name, path, componentPath, children } = item;
  return {
    name,
    path,
    ...componentPath ? {
      component: componentPath
    } : {},
    ...children ? {
      children: analysisMenus(children)
    } : {}
  }
})

const routes: any[] = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  }
]

routes.push(...analysisMenus(routeMenus))

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
