<template>
	<transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
		<div class="ml-dialog__wrapper" v-show="visible" @click.self="handleClose">
			<div class="ml-dialog" :style="{width:width,marginTop:top}">
				<div class="ml-dialog__header">
					<slot name="title">
						<span class="ml-dialog__title">
							{{title}}
						</span>
					</slot>
					<button class="ml-dialog__headerbtn" @click="handleClose">
						<i class="icon-close"></i>
					</button>
				</div>
				<div class="ml-dialog__body">
					<span>哈哈哈</span>
				</div>
				<div class="ml-dialog__footer">
					<div v-if="!$slots.footer">
						<ml-button v-if="showClose" @click="handleClose">取消</ml-button>
						<ml-button v-if="showConfirm" type="primary">确定</ml-button>
					</div>
					<slot name="footer" v-if="$slots.footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default{
		name:'mlDialog',
		props:{
			visible:{
				type:Boolean,
				default:false
			},
			title:{
				type:String,
				default:'提示'
			},
			width:{
				type:String,
				default:'30%'
			},
			top:{
				type:String,
				default:'15vh'
			},
			showClose:{
				type:Boolean,
				default:true
			},
			showConfirm:{
				type:Boolean,
				default:true
			},
		},
		methods:{
			handleClose(){
				this.$emit('close',false)
				this.$emit('update:visible',false)
			},
			afterEnter () {//开启事件
			      this.$emit('opened')
			    },
			    afterLeave () {//开启事件
			      this.$emit('closed')
			    }
		}
	}
</script>

<style lang="scss">
	.ml-dialog__wrapper {
	  position: fixed;
	  top: 0;
	  right: 0;
	  bottom: 0;
	  left: 0;
	  overflow: auto;
	  margin: 0;
	  z-index: 2001;
	  background-color: rgba(0,0,0, .5);
	  .ml-dialog {
	    position: relative;
	    margin: 15vh auto 50px;
	    background: #fff;
	    border-radius: 2px;
	    box-shadow: 0 1px 3px rgba(0,0,0,.3);
	    box-sizing: border-box;
	    width: 30%;
	    &__header {
	      padding: 20px 20px 10px;
		  
	      .ml-dialog__title {
	        line-height: 24px;
	                font-size: 18px;
	                color: #303133;

	      }
	      .ml-dialog__headerbtn {
	        position: absolute;
	        top: 20px;
	        right: 20px;
	        padding: 0;
	        background: transparent;
	        border: none;
	        outline: none;
	        cursor: pointer;
	        font-size: 16px;
	        .el-icon-close {
	          color: #909399;
	        }
	      }
	    }
	    &__body {
	      padding: 30px 20px;
	      color: #606266;
	      font-size: 14px;
	      word-break: break-all;
	    }
	    &__footer {
	      padding: 10px 20px 20px;
	      text-align: right;
	      box-sizing: border-box;
	      .ml-button:first-child {
	        margin-right: 20px;
	      }
	    }
	  }
	}
	
	.dialog-fade-enter-active {
	  animation: dialog-fade-in .1s;
	}
	.dialog-fade-leave-active {
	  animation: dialog-fade-out .1s;
	}
	@keyframes dialog-fade-in {
	  0% {
	    transform: translate3d(0, -20px, 0);
	    opacity: 0;
	  }
	  100% {
	    transform: translate3d(0, 0, 0);
	    opacity: 1;
	  }
	}
	@keyframes dialog-fade-out {
	  0% {
	    transform: translate3d(0, 0, 0);
	    opacity: 1;
	  }
	  100% {
	    transform: translate3d(0, -20px, 0);
	    opacity: 0;
	  }
	}
</style>
