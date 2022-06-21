import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.headers.common [`Client-ID`]='j1defdsq0bq2li4fz7dtjo5e79du80';
axios.defaults.headers.common [`Authorization`]='Bearer rgrppbkepowqo65vudbalybhqfti19';

new Vue({
  render: h => h(App),
}).$mount('#app')

