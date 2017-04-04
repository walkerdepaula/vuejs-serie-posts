// Import vue and vue-router
import Vue from 'vue'
import VueRouter from 'vue-router'

// Inject vue-router into Vue
Vue.use(VueRouter)

// Define Routes
const routes = [
  {
    name: 'createToDo',
    path: '/',
    component: {}
  },
  {
    name: 'listToDo',
    path: '/list',
    component: {}
  }
]

// Return VueRouter component
export default new VueRouter({
  routes
})
