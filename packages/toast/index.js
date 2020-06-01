import Vue from 'vue'
import Toast from './toast.vue'
let currentToast;


export default{
	install(Vue,options){
		Vue.prototype.$toast = function(message){
			if(currentToast){
				currentToast.close()
			}
			currentToast = createToast({
				Vue,message, onClose: () => {
				  currentToast = null
				}
			})
		}
	}
}

function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast);
  //实例化构造器tosat对象
  let toast = new Constructor({  });
  //添加
  toast.$mount();
  //注册事件
  toast.$on('close', onClose)
  //挂到DOM
  // console.log(message)
  let toastMessage = {
	  message:message.message,
	  position : typeof message.position == 'undefined' ? 'top':message.position,
	  type : typeof message.type == 'undefined' ? 'info' : message.type,
	  duration : typeof message.duration == 'undefined' ? 3000 : message.duration
  }
  //提示组件位置
  toast.position = toastMessage.position

  document.body.appendChild(toast.$el)
  
  //组件props的值
  //组件出现
  toast.visible = true
  //设置组件的样式
  if(toastMessage.type == 'info'){
  	toast.iconType = 'info'
  	toast.toastType = 'info'
  }
  if(toastMessage.type == 'success'){
  	toast.iconType = 'chenggong'
  	toast.toastType = 'success'
  }
  if(toastMessage.type == 'waring'){
  	toast.iconType = 'info'
  	toast.toastType = 'waring'
  }
  if(toastMessage.type == 'error'){
  	toast.iconType = 'shibai'
  	toast.toastType = 'error'
  }
  //组件的值
  toast.message = toastMessage.message
  //默认3秒，关闭组件
  setTimeout(()=>{
	  toast.visible = false
  },toastMessage.duration)
  return toast;
}
