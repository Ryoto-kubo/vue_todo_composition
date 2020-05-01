import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue';
import pagesCalc from '@/components/pages/pagesCalc.vue'
import pagesAccordion from '@/components/pages/pagesAccordion.vue'
import Test from '../views/Test.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: pagesCalc
  },
  {
    path: '/accordion',
    component: pagesAccordion
  },
  {
    path: '/test',
    // name: 'Home',
    component: Test
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
