import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css' 
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios, Buefy)
axios.defaults.headers.common [`Client-ID`]='j1defdsq0bq2li4fz7dtjo5e79du80';
axios.defaults.headers.common [`Authorization`]='Bearer atejm37mfs85e1je1li5xxtnratr3w';

new Vue({
  render: h => h(App),
}).$mount('#app')

