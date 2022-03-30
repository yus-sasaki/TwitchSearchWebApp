import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.headers.common [`Client-ID`]='j1defdsq0bq2li4fz7dtjo5e79du80';
axios.defaults.headers.common [`Authorization`]='Bearer 3ba1slovca1w8hp51covh3571hwu5v';

new Vue({
  render: h => h(App),
}).$mount('#app')

