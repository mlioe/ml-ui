<template>
	<div class="ml-datapicker-box" v-clickoutside="handleClickOutside">
		<div @click="setWrapperType">
			<ml-input class="ml-input" :readonly="!readonly" :disabled="disabled"  :placeholder="placeholder" v-model="selectDay">
				
			</ml-input>
		</div>
		<i class="icon-arrow-up" :class="{'flip':wrapperType}"></i>
		<div class="ml-datapicker-wrapper" v-show="wrapperType">
			<!-- 顶部切换导航 -->
			<div class="top">
				<div @click="lastYear">
					<i class="icon-arrow-left top-iconHover"></i>
					<i class="icon-arrow-left top-iconHover"></i>
				</div>
				<div @click="lastMount"><i class="icon-arrow-left top-iconHover"></i></div>
				<div>{{selectYearIndex}}年{{selectMonthIndex}}月</div>
				<div @click="nextMount"><i class="icon-arrow-right top-iconHover"></i></div>
				<div @click="nextYear">
					<i class="icon-arrow-right top-iconHover"></i>
					<i class="icon-arrow-right top-iconHover"></i>
				</div>
			</div>
			<div class="top_week">
				<div>日</div><div>一</div><div>二</div><div>三</div><div>四</div><div>五</div><div>六</div>
			</div>
			<div class="bottom">
				<div 
					class="dayBox" 
					v-for="item in dataList" 
					:key="item.date"
					:style="item.month != nowMonth ? 'color:#c0c4cc':''"
					:class="[
						{'today':nowMonth == item.month && nowDay == item.showDate,},
					]"
					@click="dayClick(item)"
				>
					<span :class="item.year == display.year &&item.month == display.month && item.showDate == display.day ? 'active':''">
						{{item.showDate}}
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Clickoutside from '../utils/clickoutside.js'
	import utils from './utils.js'
	export default{
		directives: { Clickoutside },
		name:'mlDataPicker',
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
		},
		data(){
			return{
				dataList:[],
				nowMonth:'',
				nowYear:'',
				nowDay:'',
				selectDay:'',
				wrapperType:false,
				selectMonthIndex:null,
				selectDayIndex:null,
				selectYearIndex:null,
				display: {
				        year: null,
				        month: null,
				        day: null,
				},
			}
		},
		mounted(){
		},
		methods:{
			handleClickOutside(){
				this.wrapperType = false
			},
			setWrapperType(){
				if(this.disabled) return 
				this.wrapperType = !this.wrapperType
			},
			dayClick(item){
				let month = item.month <= 9 ? '0'+item.month :item.month
				let day = item.showDate <= 9 ? '0' + item.showDate:item.showDate
				let value = item.year + '-'+month+'-'+day
				this.display.year = item.year
				this.display.month = month
				this.display.day = day
				this.selectDay = value
				this.setWrapperType()
				this.$emit('input',this.selectDay)
				this.$emit('change',this.selectDay)
			},
			lastYear(){
				// console.log('上一年')
				this.selectYearIndex -- 
				this.dataList = utils.getMonthData(this.selectYearIndex,this.selectMonthIndex)
			},
			lastMount(){
				// console.log('上一个月')
				this.selectMonthIndex --
				this.dataList = utils.getMonthData(this.selectYearIndex,this.selectMonthIndex)
			},
			nextMount(){
				// console.log('下一个月')
				this.selectMonthIndex ++ 
				this.dataList = utils.getMonthData(this.selectYearIndex,this.selectMonthIndex)
			},
			nextYear(){
				// console.log('下一年')
				this.selectYearIndex ++ 
				this.dataList = utils.getMonthData(this.selectYearIndex,this.selectMonthIndex)
			},
			calculationTime(){
				if(this.value != ''){
					if(isNaN(Date.parse(this.value))){//判断是不是时间搓格式
						this.selectDay = ''
					}else{
						if(typeof this.value == 'string'){
							this.selectDay = this.value
							this.display.year = this.selectDay.split('-')[0]
							this.display.month = this.selectDay.split('-')[1]
							this.display.day = this.selectDay.split('-')[2]
						}else{
							var today = this.value//获取当前年月
							let day = today.getDay() <= 9 ? '0' + today.getDay() : today.getDay()
							let month = today.getMonth() <= 9 ? '0' + (today.getMonth()-0+1) : today.getMonth()-0+1
							let year = today.getFullYear() 
							
							this.selectDay = year + '-' + month + '-' + day
							this.display.year = year
							this.display.month = month
							this.display.day = day
						}
					}
				}
			}
		},
		created() {
			this.dataList = utils.getMonthData()//初始化当前日期
			this.calculationTime()
			var today = new Date()//获取当前年月
			this.nowMonth = today.getMonth() + 1 //0-11，所以加1
			this.nowYear = today.getFullYear()
			this.nowDay = today.getDay()
			//存储当前年月日，用于日期切换
			this.selectMonthIndex = this.nowMonth
			this.selectDayIndex = this.selectDay
			this.selectYearIndex = this.nowYear
		},
		computed:{
			judge(e){
				console.log(e)
				return true
			}
		},
		watch:{
			value(e){
				console.log(e)
				this.calculationTime()
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
	.ml-datapicker-wrapper{
		z-index: 9;
		box-sizing: border-box;
		position: absolute;
		width: 300px;
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
		.top{display: flex;align-items: center;justify-content: space-between;width:90%;margin-left: 5%;
			 .top-iconHover:hover{
				 cursor: pointer;
			 }
		}
		.top_week{display: flex;align-items: center;justify-content: space-between;width: 90%;margin-left: 5%;border-bottom: 1px solid #eeeeef;padding-bottom: 10px;}
		.bottom{
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			.dayBox{
				width: 39.7px;
				height: 39.7px;
				display: flex;
				align-items: center;
				justify-content: center;
				cursor: pointer;
				span{
					width: 28px;
					height: 28px;
					background-color: white;
					text-align: center;
					border-radius: 50%;
					transition: 0.2s;
				}
				span:hover{
					color: white;
					background-color: #409EFF;
				}
				.active{color: white;background-color: #409EFF;}
			}
			.today{color: #409EFF;}
		}
		
	}
	
	// span{width: 40.7px;height: 40.7px;line-height: 28px;text-align: center;box-sizing: border-box;}

</style>
