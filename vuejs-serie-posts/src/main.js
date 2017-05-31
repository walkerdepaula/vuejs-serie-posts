// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Vendors
import router from './router'
import store from './store'

// Components
import App from './App'
import Sidebar from './components/sidebar/Sidebar'

// Configure productionTip
Vue.config.productionTip = false

// Register custom component tags
Vue.component('sidebar-view', Sidebar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
