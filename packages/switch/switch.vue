<template>
	<div 
		class="ml-switch" 
		:class="{'is-checked':value}" 
		@click="handleClick"
	>
		<input type="checkbox"  class="ml-switch__input"  :name="name" ref="input">	
		<span class="ml-switch__core" ref="core">
			<span class="ml-switch__button"></span>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'mlSwitch',
		props: {
			value:{
				type:Boolean,
				default:false
			},
			activeColor:{
				type:String,
				default:''
			},
			inactiveColor:{
				type:String,
				default:''
			},
			name:{
				type:String,
				default:''
			}
		},
		mounted() {//修改开关颜色
			if(this.activeColor || this.inactiveColor){
				let color = this.value ? this.activeColor : this.inactiveColor
				this.$refs.core.style.borderColor = color
				this.$refs.core.style.backgroundColor = color
			}
			//控制checkbox的值
			this.$refs.input.checked = this.value
		},
		methods: {
			handleClick(){
				let val = !this.value
				this.$emit('input',val)
				this.$emit('update:value',val)
			},
			setBgColor(){
				if(this.activeColor || this.inactiveColor){
					let color = this.value ? this.activeColor : this.inactiveColor
					this.$refs.core.style.borderColor = color
					this.$refs.core.style.backgroundColor = color
				}
				this.$refs.input.checked = this.value//checkbox也要改变
			}
		},
		watch: {
			value(){
				this.setBgColor()
			}
		}
	}
</script>

<style lang="scss">
	.ml-switch {
		display: inline-flex;
		align-items: center;
		position: relative;
		font-size: 14px;
		line-height: 20px;
		height: 20px;
		vertical-align: middle;
		 .ml-switch__input {
		    position: absolute;
		    width: 0;
		    height: 0;
		    opacity: 0;
		    margin: 0;
		  }
		.ml-switch__core {
			margin: 0;
			display: inline-block;
			position: relative;
			width: 40px;
			height: 20px;
			border: 1px solid #dcdfe6;
			outline: none;
			border-radius: 10px;
			box-sizing: border-box;
			background: #dcdfe6;
			cursor: pointer;
			transition: border-color .3s, background-color .3s;
			vertical-align: middle;

			.ml-switch__button {
				position: absolute;
				top: 1px;
				left: 1px;
				border-radius: 100%;
				transition: all .3s;
				width: 16px;
				height: 16px;
				background-color: #fff;
			}
		}
	}

	.ml-switch.is-checked {
		.ml-switch__core {
			border-color: #409eff;
			background-color: #409eff;
			.ml-switch__button {
				transform: translateX(20px);
			}
		}
	}
</style>
