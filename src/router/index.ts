import Vue from 'vue'
import VueRouter from 'vue-router'
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

const routes: any[] = []

routes.push(...analysisMenus(routeMenus))

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
