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
				<div class="wrapper-hour main-box" 	ref="reage1"  @scroll="scrollEvent1">
					<li 
						v-for="item in reage[0].arr" 
						:key="item.id" 
						:class="{'disabledColor':item.disabled}"
					>
						{{item.num}}
					</li>
				</div>
				<div class="wrapper-minutes main-box" ref="reage2">
					<li v-for="item in reage[1].arr" :key="item.id"	:class="{'disabledColor':item.disabled}">{{item.num}}</li>
				</div>
				<div class="wrapper-second main-box" ref="reage3">
					<li v-for="item in reage[2].arr" :key="item.id"	:class="{'disabledColor':item.disabled}">{{item.num}}</li>
				</div>
				<div class="wrapper-border"></div>
			</div>
			<div class="ml-time-wrapper-footer">
				<span>取消</span>
				<span>确认</span>
			</div>
		</div>
	</div>
</template>

<script>
	let _this = ''
	function debounce(func, wait = 500) { //可以放入项目中的公共方法中进行调用（防抖）
		let timeout;
		return function(event) {
			clearTimeout(timeout)
			timeout = setTimeout(() => {
				func.call(this, event)
			}, wait)
		}
	}
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
			_this = this
			this.selectTime = this.value
			if(this.pickerOptions.start && this.pickerOptions.end){//
				this.defaultArr()
			}else if(this.pickerOptions.selectableRange){
				this.pickerArr()
			}else{
				console.error('请确认您使用timePicker组件时picker-options传送的格式是正确的')
			}
			this.utilsTime()
		},
		data(){
			return{
				selectTime:'',
				timeArr:[],
				wrapperType:true,
				reage: [
				    { ref: 'reage1', arr: []},
				    { ref: 'reage2', arr: []},
				    { ref: 'reage3', arr: []},
				],
			}
		},
		methods:{
			scrollEvent1:debounce(function(e) {
				let scrollIndex =  e.target.scrollTop/32
				// console.log(scrollIndex)
				// console.log(Math.round(scrollIndex))
				_this.$refs.reage1.scrollTop = Math.round(scrollIndex)*32
			}),
			open(){
				this.wrapperType = !this.wrapperType
			},
			pickerArr(){//初始化数组
				let areaArr =  this.pickerOptions.selectableRange.split('-')
				let hourLen = 24
				let minutesLen = 60
				let secondLen = 60
				let startTimeHour = areaArr[0].split(':')[0]
				let startEndHour = areaArr[1].split(':')[0]
				let startMinutes = areaArr[0].split(':')[1]
				let startSecond = areaArr[0].split(':')[2]
				let hourRange = []
				let minutesRange = []
				let secondRange = []
				let startScrollTopIndex = 0 //移动的下标
				let startMinutesScrollTopIndex = 0//移动的分钟下标
				let startSecondScrollTopIndex = 0//移动的秒数下标
				for(var i=0;i<startEndHour - startTimeHour + 1;i++){//初始化要加高亮的小时
					let newI = i+Number(startTimeHour) >= 10 ? String(i+Number(startTimeHour)) : '0'+(i+Number(startTimeHour))
					hourRange.push(newI)
				}
				for(var i=0;i<60 - startMinutes;i++){//初始化要高亮的分钟数
					let newI = String(i+Number(startMinutes)) >= 10 ? String(i+Number(startMinutes)) :'0'+String(i+Number(startMinutes))
					minutesRange.push(newI)
				}
				for(var i=0;i<60-startSecond;i++){
					let newI = String(i+Number(startSecond)) >= 10 ? String(i+Number(startSecond)) :'0'+String(i+Number(startSecond))
					secondRange.push(newI)
				}
				for(var i=0;i<hourLen;i++){
					let num =  i >= 10 ? i : '0' + i
					let type = hourRange.includes(String(num)) //如果为true，说明在数组范围里，则disabled应该为false,让他能选择，反之为true
					if(startTimeHour == String(num)){//获取数组传过来的第一个值
						startScrollTopIndex = i
					}
					this.reage[0].arr.push({num:num,id:i,disabled:!type})
				}
				for(var i=0;i<minutesLen;i++){
					let num =  i >= 10 ? i : '0' + i
					let type = minutesRange.includes(String(num))
					if(startMinutes == String(num)){
						startMinutesScrollTopIndex = i
					}
					this.reage[1].arr.push({num:num,id:i,disabled:!type})
				}
				for(var i=0;i<secondLen;i++){
					let num =  i >= 10 ? i : '0' + i
					let type = secondRange.includes(String(num))
					if(String(num) == startSecond.trim()){//外面传值时有可能会出现空格
						startSecondScrollTopIndex = i
					}
					this.reage[2].arr.push({num:num,id:i,disabled:!type})
				}
				for(var i= 0 ;i < 2 ; i++){
					this.reage[0].arr.unshift({num:'--',disabled:true})
					this.reage[1].arr.unshift({num:'--',disabled:true})
					this.reage[2].arr.unshift({num:'--',disabled:true})
				}
				this.$nextTick(()=>{
					this.$refs.reage1.scrollTop = startScrollTopIndex*32
					this.$refs.reage2.scrollTop = startMinutesScrollTopIndex*32
					this.$refs.reage3.scrollTop = startSecondScrollTopIndex*32
					
				})
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
		.main-box{
			scrollbar-color: #eeeeef transparent;
			-ms-overflow-style: none; /* IE 10+ */
		}
		.main-box::-webkit-scrollbar{
			width: 6px;
		}
		.main-box::-webkit-scrollbar-thumb{
			border-radius: 6px;
			background-color: #eeeeef;
		}
		.main-box::-moz-scrollbar{
			width: 6px;
		}
		.main-box::-moz-scrollbar-thumb{
			border-radius: 6px;
			background-color: #eeeeef;
		}
		.ml-time-wrapper-main{
			width: 200px;
			height: 160px;
			position: relative;
			.wrapper-border{
				position: absolute;
				height: 32px;
				// box-sizing: border-box;
				border-top: 1px solid #e4e4e4;
				border-bottom: 1px solid #e4e4e4;
				width: 180px;
				left: 10px;
				top: 64px;
				z-index: -1;
			}
			.wrapper-hour{
				width: 33.33%;
				height: 160px;
				float: left;
				overflow: auto;
			}
			.wrapper-minutes{
				width: 33.33%;
				height: 160px;
				float: left;
				overflow: auto;
			}
			.wrapper-second{
				width: 33.33%;
				height: 160px;
				float: left;
				overflow: auto;
			}
			li{
				width: 100%;
				text-align: center;
				height: 32px;
			}
			.disabledColor{color: #dee3f4;}
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
