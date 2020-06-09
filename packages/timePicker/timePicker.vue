<template>
	<div class="ml-datapicker-box">
		<div>
			<ml-input class="ml-input" :readonly="!readonly" :disabled="disabled"  :placeholder="placeholder" v-model="selectTime">
				
			</ml-input>
		</div>
		<i class="icon-arrow-up"></i>
		<div class="ml-time-wrapper">
		
		</div>
	</div>
</template>

<script>
	import Clickoutside from '../utils/clickoutside.js'
	export default{
		name:'mlTimePicker',
		directives: { Clickoutside },
		props:{
			value:'',
			placeholder:{
				type:String,
				default:''
			},
			readonly:{
				type:Boolean,
				default:false
			},
			disabled:{
				type:Boolean,
				default:false
			},
			pickerOptions:{
				type:Object,
				 default: () => {},
			}
		},
		created(){
			this.selectTime = this.value
			// console.log(this.pickerOptions)
			if(this.pickerOptions.start && this.pickerOptions.end){//
				this.calculationTimeRange()
			}else{
				console.error('请确认您使用timePicker组件时picker-options传送的格式是正确的')
			}
			this.utilsTime()
		},
		data(){
			return{
				selectDay:''
			}
		},
		methods:{
			utilsTime(){
				const reg = /^\s*([01]?\d|2[0-4]):?([0-5]\d)\s*$/;
				if(reg.test('24:59')){
					return true
				}else{
					return false
				}
			},
			calculationTimeRange(){//计算时间段选择器
				
			}
		}
	}
</script>

<style lang="scss">
	.ml-datapicker-box{
		width: 200px;
		position: relative;
		.stop{cursor: not-allowed;}
	}
	.ml-input{width: 100%;padding-right: 20px;}
	.icon-arrow-up{position: absolute;right: 4px;top: 0;display: inline-block;height: 100%;line-height: 34px;transition: 0.2s;}
	.ml-time-wrapper{
		z-index: 9;
		box-sizing: border-box;
		position: absolute;
		width:100%;
		left: 0;
		top: 105%;
		display: flex;
		color: #606266;
		border: 1px solid #e4e7ed;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		background: #fff;
		border-radius: 4px;
		line-height: 30px;
		display: flex;
		flex-direction: column;
		height: 200px;
		
		
		
	}
	
	// span{width: 40.7px;height: 40.7px;line-height: 28px;text-align: center;box-sizing: border-box;}

</style>
