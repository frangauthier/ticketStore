import * as Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router'

Vue.createApp(App).use(router).mount('#app')

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
//     // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)