<template>
	<transition :name="position">
	<div class="wrapper" 
		 v-show="visible"
		 :class="[`wrapper-${position}`]"
		 >
		<div class="ml-toast" :class="[toastType]">
			<i :class="[`icon-${iconType}`]"></i>
			<slot v-if="message == ''"></slot>
			<div v-if="message != ''">{{message}}</div>
		</div>
	</div>
	</transition>
</template>

<script>
	/**
	 * toastType  success | waring | info | error
	 * iconType chenggong |info | info|shibai
	 * position top | bottom | center
	 */
	export default{
		name:'mlToast',
		props:{
			type:{
				type:String,
				default:'info'
			},
			position:{
				type:String,
				default:'top'
			},
			visible: {
				type:Boolean,
				default:false
			},
			duration:{
				type:Number,
				default:3000
			},
			message:{
				type:String,
				default:''
			}
			
		},
		data(){
			return{
				iconType:'',
				toastType:'',
			}
		},
		created() {
			console.log(this.type)
			if(this.type == 'info'){
				this.iconType = 'info'
				this.toastType = 'info'
			}
			if(this.type == 'success'){
				this.iconType = 'chenggong'
				this.toastType = 'success'
			}
			if(this.type == 'waring'){
				this.iconType = 'info'
				this.toastType = 'waring'
			}
			if(this.type == 'error'){
				this.iconType = 'shibai'
				this.toastType = 'error'
			}
		},
		mounted() {
		  if(this.visible){
		  	this.setTimer()
		  }
		},
		methods:{
			setTimer(){
				setTimeout(()=>{
					this.$emit('update:visible',false)
				},3000)
			},
			 close() {
			      this.$el.remove()
			      //销毁
			      this.$destroy()
			    },
		},
		watch:{
			visible(){
				if(this.visible){
					this.setTimer()
				}
			}
		}
	}
</script>

<style lang="scss">
	.wrapper-top{top: 10px;}
	.wrapper-bottom{bottom:10px;}
	.wrapper-center{top:50vh;margin-top: -17px;}
	.wrapper{
		position: fixed;
		left: 50%;
		z-index: 99;
		bottom: 10px;
		transform: translateX(-50%);
	}
	.ml-toast{
		font-size: 14px;
		line-height: 34px;
		min-height: 34px;
		background-color: #fff;
		box-shadow: 0 1px 3px rgba(0,0,0,.3);
		padding: 0 10px;
		border-radius: 3px;
		display: flex;
		i{display: inline-block;height: 34px;line-height: 34px;padding: 0 5px;font-size: 14px;}
	}
	.info{background-color: #edf2fc;color: #909399;}
	.success{background-color:#f0f9eb;color: #67c23a;}
	.waring{background-color: #fdf6ec;color: #e6a23c;}
	.error{background-color: #fef0f0;color: #f56c6c;}

	.top-enter-active {
	  animation: top-in .1s;
	}
	.top-leave-active {
	  animation:top-out .1s;
	}
	@keyframes top-in {
	  0% {
	    transform: translate3d(0, -20px, 0)  translateX(-50%);
	    opacity: 0;
	  }
	  100% {
	    transform: translate3d(0, 0, 0)  translateX(-50%);
	    opacity: 1;
	  }
	}
	@keyframes top-out {
	  0% {
	    transform: translate3d(0, 0, 0)  translateX(-50%);
	    opacity: 1;
	  }
	  100% {
	    transform: translate3d(0, -20px, 0)  translateX(-50%);
	    opacity: 0;
	  }
	}
	
	.center-enter-active {
	  animation: top-in .1s;
	}
	.center-leave-active {
	  animation:top-out .1s;
	}
	@keyframes center-in {
	  0% {
	    transform: translate3d(0, -20px, 0)  translateX(-50%);
	    opacity: 0;
	  }
	  100% {
	    transform: translate3d(0, 0, 0)  translateX(-50%);
	    opacity: 1;
	  }
	}
	@keyframes center-out {
	  0% {
	    transform: translate3d(0, 0, 0)  translateX(-50%);
	    opacity: 1;
	  }
	  100% {
	    transform: translate3d(0, -20px, 0)  translateX(-50%);
	    opacity: 0;
	  }
	}
	
	.bottom-enter-active {
	bottom: 0px;
	  animation: bottom-in .1s;
	}
	.bottom-leave-active {
	  animation:bottom-out .1s;
	}
	@keyframes bottom-in {
	  0% {
	    transform: translate3d(0, 20px, 0)  translateX(-50%);
	    opacity: 0;
	  }
	  100% {
	    transform: translate3d(0, 0, 0)  translateX(-50%);
	    opacity: 1;
	  }
	}
	@keyframes bottom-out {
	  0% {
	    transform: translate3d(0, 0, 0)  translateX(-50%);
	    opacity: 1;
	  }
	  100% {
	    transform: translate3d(0, 20px, 0)  translateX(-50%);
	    opacity: 0;
	  }
	}
</style>
