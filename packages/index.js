import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'
import Dialog from './dialog/dialog.vue'
import Input from './input/input.vue'
import Switch from './switch/switch.vue' 
import Radio from './radio/radio.vue' 
import RadioGroup from './radio/radio-group.vue' 
import Checkbox from './checkbox/checkbox.vue'
import CheckboxGroup from './checkbox/checkboxGroup.vue'
import Vue from 'vue'
import Form from './form/form.vue'
import FormItem from './form/formItem.vue'
import Toast from './toast/toast.vue'
import ToastIndex from './toast/index.js'
import Select from './select/select.vue'
import Option from './select/option.vue'
Vue.use(ToastIndex)
import './fonts/iconfont.css'

const components = [
  Button,ButtonGroup,Dialog,Input,Switch,Radio,RadioGroup,Checkbox,CheckboxGroup,Form,FormItem,Toast,Select,Option
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