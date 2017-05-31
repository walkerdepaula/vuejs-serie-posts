// Dependencies
import Vue from 'vue'
import Router from 'vue-router'

// Component
import Login from '@/components/login/Login'
import Home from '@/components/home/Home'
import DocumentsTable from '@/components/documents-table/Documents-table'

// External tools
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/documents-table',
    name: 'documentsTable',
    component: DocumentsTable
  }
]

export default new Router({
  routes: routes,
  mode: 'history'
})
