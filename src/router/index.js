import Vue from 'vue'
import Router from 'vue-router'
import MyTasks from '@/components/MyTasks'
import InProgress from '@/components/InProgress'
import Completed from '@/components/Completed'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyTasks',
      component: MyTasks
    },
    {
    	path: '/in-progress',
    	name: 'InProgress',
    	component: InProgress
    },
    {
    	path: '/completed',
    	name: 'Completed',
    	component: Completed
    }
  ]
})
