import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  vuetify,
  el: '#app',
  template: '<App />',
})