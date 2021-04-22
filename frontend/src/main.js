import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

// Kakao init
window.Kakao.init('fa32f0c8aa0aada5f907c55aa1826140');
window.Kakao.isInitialized();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
