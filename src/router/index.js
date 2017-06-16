import Vue from 'vue'
import Router from 'vue-router'
import Report from '../components/report/Report'
import Case from '../components/case/Case'
import Mission from '../components/misson/Mission'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Report
    },
    {
      path: '/report',
      component: Report
    },
    {
      path: '/case',
      component: Case
    },
    {
      path: '/mission',
      component: Mission
    }
  ]
})
