import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import './plugins/axios'

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueClipboard from "vue-clipboard2";

Vue.use(Vuex);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueClipboard);

Vue.config.productionTip = false;

// Kakao init
window.Kakao.init("fa32f0c8aa0aada5f907c55aa1826140");
window.Kakao.isInitialized();

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
