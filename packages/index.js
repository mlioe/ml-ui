import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'
import mlDialog from './dialog/dialog.vue'
import './fonts/iconfont.css'

const components = [
  Button,ButtonGroup,mlDialog
]

const install = function (Vue) {
  // 注册所有的组件
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 导出install方法
export default {
  install
}