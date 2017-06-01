// Dependencies
import Vue from 'vue'
import Router from 'vue-router'

// Component
import InsertData from '@/components/insert-data/Insert-data'
import TableData from '@/components/table-data/Table-Data'

// External tools
Vue.use(Router)

const routes = [
  {
    path: '/insert',
    name: 'insertData',
    component: InsertData
  },
  {
    path: '/table',
    name: 'documentsTable',
    component: TableData
  }
]

export default new Router({
  routes: routes,
  mode: 'history'
})
