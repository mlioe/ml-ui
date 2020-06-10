<template>
	<div class="ml-datapicker-box">
		<div @click="open">
			<ml-input class="ml-input" :readonly="!readonly" :disabled="disabled"  :placeholder="placeholder" v-model="selectTime">
				
			</ml-input>
		</div>
		<i class="icon-arrow-up" :class="{'flip':wrapperType}"></i>
		<div class="ml-time-wrapper" v-show="wrapperType&&timeArr.length!=0">
			<div class="ml-time-wrapper-list" @click="slectTime(item)" v-for="item in timeArr" :key="item">{{item}}</div>
		</div>
		<div class="ml-time-wrapper" v-show="wrapperType">
			<div class="ml-time-wrapper-main">
				<div class="wrapper-hour">
					
				</div>
				<div class="wrapper-minutes"></div>
				<div class="wrapper-second"></div>
			</div>
			<div class="ml-time-wrapper-footer">
				<span>取消</span>
				<span>确认</span>
			</div>
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
			if(this.pickerOptions.start && this.pickerOptions.end){//
				this.defaultArr()
			}else if(this.pickerOptions.selectableRange){
				console.log('---')
			}else{
				console.error('请确认您使用timePicker组件时picker-options传送的格式是正确的')
			}
			this.utilsTime()
		},
		data(){
			return{
				selectTime:'',
				timeArr:[],
				wrapperType:true
			}
		},
		methods:{
			open(){
				this.wrapperType = !this.wrapperType
			},
			utilsTime(){
				const reg = /^\s*([01]?\d|2[0-4]):?([0-5]\d)\s*$/;
				if(reg.test('24:59')){
					return true
				}else{
					return false
				}
			},
			getMinute(str) {
			      let strs = str.split(':')
			      let max = Number(strs[0]) * 60 + Number(strs[1])
			      return max
			},
			defaultArr() {
				let steParr = ['01','02','05','15','20','30']
				let stepArea = this.pickerOptions.step.split(':')[1]
				if(!steParr.includes(stepArea)){
					console.error(`请确认step的值在数组${steParr}里面`)
					return
				}
				
			    let stepMax = this.getMinute(this.pickerOptions.step)
			    let maxMinutes = this.getMinute(this.pickerOptions.end)
			    let mixMinutes = this.getMinute(this.pickerOptions.start)
				mixMinutes = mixMinutes - Number(this.pickerOptions.step.split(':')[1])
			    let maxStep = maxMinutes - mixMinutes
			    let arr = []
			    let minutes = 0
			    for (let i = 0; i < maxStep / stepMax; i++) {
			        minutes = minutes + stepMax
			        let newMinutes = this.toMinute(minutes + mixMinutes)
			        arr.push(newMinutes)
			    }
				this.timeArr = arr
			},
			toMinute(minutes) {
				let houst = Math.floor(minutes / 60)
			    let min = minutes % 60
			    if (houst.toString().length < 2) {
			        houst = '0' + houst
			    }
				min =  min >= 10 ? min : '0' + min
			    return houst + ':' + min
			},
			slectTime(item){
				this.selectTime = item
				this.$emit('input', item)
				this.wrapperType = !this.wrapperType
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
	.ml-input{width: 100%;}
	.icon-arrow-up{position: absolute;right: 4px;top: 0;display: inline-block;height: 100%;line-height: 34px;transition: 0.2s;}
	.flip {
	      transform: rotate(180deg);
	}
	.ml-time-wrapper{
		z-index: 9;
		box-sizing: border-box;
		position: absolute;
		width:100%;
		left: 0;
		top: 105%;
		display: flex;
		color: #606266;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		background: #fff;
		border-radius: 4px;
		line-height: 30px;
		display: flex;
		flex-direction: column;
		height: 200px;
		overflow: auto;
		scrollbar-color: #eeeeef transparent;
		-ms-overflow-style: none; /* IE 10+ */
		.ml-time-wrapper-list{
		    width: 100%;
		    line-height: 35px;
		    text-align: left;
		    list-style: none;
			transition: 0.1s;
			box-sizing: border-box;
			padding: 0 5px;
			&:hover {
		        background-color: #f5f7fa;
		        font-weight: 700;
		        cursor: pointer;
			}
		}
		.ml-time-wrapper-main{
			width: 200px;
			height: 160px;
			position: relative;
		}
		.ml-time-wrapper-footer{
			height: 40px;
			border-top: 1px solid #e4e4e4;
			box-sizing: border-box;
			text-align: right;
			line-height: 40px;
			span{margin: 0 10px;cursor: pointer;}
			span:nth-of-type(2){color: #409EFF;}
			
		}
		
	}
	.ml-time-wrapper::-webkit-scrollbar{
		width: 4px;
	}
	.ml-time-wrapper::-webkit-scrollbar-thumb{
		border-radius: 5px;
		background-color: #eeeeef;
	}
	.ml-time-wrapper::-moz-scrollbar{
		width: 4px;
	}
	.ml-time-wrapper::-moz-scrollbar-thumb{
		border-radius: 5px;
		background-color: #eeeeef;
	}
	// span{width: 40.7px;height: 40.7px;line-height: 28px;text-align: center;box-sizing: border-box;}

</style>
