// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// Vendors
import router from './router'
import store from './store'

// Components
import App from './App'

// Plugins
import EventBus from './plugins/eventbus'

// Configure productionTip
// Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(EventBus)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
