import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//字体文件
// import  './assets/icon/iconfont.css'


// import mlButton from './components/button.vue'
// Vue.component(mlButton.name,mlButton)

import mlUi from '../packages/index.js'
Vue.use(mlUi)


new Vue({
  render: h => h(App),
}).$mount('#app')
