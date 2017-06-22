// Dependencies
import Vue from 'vue'
import Router from 'vue-router'

// Component
import InsertData from '@/components/insert-data/Insert-data'
import TableData from '@/components/table-data/Table-Data'
import InsertDataEventBus from '@/components/insert-data-eventbus/Insert-data-eventbus'
import TableDataEventBus from '@/components/table-data-eventbus/Table-Data-eventbus'

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
  },
  {
    path: '/insertEventBus',
    name: 'insertDataEventBus',
    component: InsertDataEventBus
  },
  {
    path: '/tableEventBus',
    name: 'tableDataEventbus',
    component: TableDataEventBus
  }
]

export default new Router({
  routes: routes,
  mode: 'history'
})
