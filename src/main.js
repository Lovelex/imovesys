import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from './plugins/axios'
import VueCookie from 'vue-cookie'

// import 'quill/dist/quill.core.css'
// import 'quill/dist/quill.snow.css'
// import 'quill/dist/quill.bubble.css'

// import { quillEditor } from 'vue-quill-editor'

Vue.use(VueCookie)
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
