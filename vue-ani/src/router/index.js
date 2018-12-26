import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import prop from '@/components/Prop'
import layout from '@/components/Layout'
import Table from '@/components/Table'
import Weather from '@/components/Weather'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/HelloWorld',
      component: layout,
      children: [
        {
          path: '/table',
          name: 'table',
          component: Table
        },
        {
          path: '/HelloWorld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/prop',
          name: 'prop',
          component: prop
        },
        {
          path: '/weather',
          name: 'weather',
          component: Weather
        }]
    }
  ]
})
