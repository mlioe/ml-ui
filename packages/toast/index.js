import Vue from 'vue'
import Toast from './toast.vue'
let currentToast;


export default{
	install(Vue,options){
		Vue.prototype.$toast = function(message,position,type="info",duration=3000){
			if(currentToast){
				currentToast.close()
			}
			currentToast = createToast({
				Vue,message,propsData: position, onClose: () => {
				  currentToast = null
				}
			})
		}
	}
}

function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast);
  //实例化构造器tosat对象
  let toast = new Constructor({ propsData, });
  //添加
  toast.$mount();
  //注册事件
  toast.$on('close', onClose)
  //挂到DOM
  console.log(message)
  toast.position = message.position

  document.body.appendChild(toast.$el)
  
  //组件props的值
  toast.visible = true
	
  if(message.type == 'info'){
  	toast.iconType = 'info'
  	toast.toastType = 'info'
  }
  if(message.type == 'success'){
  	toast.iconType = 'chenggong'
  	toast.toastType = 'success'
  }
  if(message.type == 'waring'){
  	toast.iconType = 'info'
  	toast.toastType = 'waring'
  }
  if(message.type == 'error'){
  	toast.iconType = 'shibai'
  	toast.toastType = 'error'
  }
  toast.message = message.message
  setTimeout(()=>{
	  toast.visible = false
  },message.duration)
  return toast;
}
