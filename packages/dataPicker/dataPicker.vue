<template>
	<div class="ml-datapicker-box">
		<div @click="setWrapperType">
			<ml-input class="ml-input" :readonly="!readonly" style="cursor: pointer;" :placeholder="placeholder" v-model="selectDay">
				
			</ml-input>
		</div>
		<i class="icon-arrow-up" :class="{'flip':wrapperType}"></i>
		<div class="ml-option-wrapper" v-show="wrapperType">
			<!-- 顶部切换导航 -->
			<div class="top">
				<div @click="lastYear">
					<i class="icon-arrow-left top-iconHover"></i>
					<i class="icon-arrow-left top-iconHover"></i>
				</div>
				<div @click="lastMount"><i class="icon-arrow-left top-iconHover"></i></div>
				<div>{{nowYear}}年{{nowMonth}}月</div>
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
					:class="{'today':nowMonth == item.month && nowDay == item.showDate}"
					@click="dayClick(item)"
				>
					<span>{{item.showDate}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import utils from './utils.js'
	export default{
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
			}
		},
		data(){
			return{
				dataList:[],
				nowMonth:'',
				nowYear:'',
				nowDay:'',
				selectDay:'',
				wrapperType:false
			}
		},
		mounted(){
			console.log(this.$parent)
		},
		methods:{
			setWrapperType(){
				this.wrapperType = !this.wrapperType
			},
			dayClick(item){
				let value = this.nowYear + '-'+item.month+'-'+item.showDate
				this.selectDay = value
				this.setWrapperType()
			},
			lastYear(){
				// console.log('上一年')
				this.nowYear -- 
				this.dataList = utils.getMonthData(this.nowYear,this.nowMonth)
			},
			lastMount(){
				// console.log('上一个月')
				this.nowMonth --
				this.dataList = utils.getMonthData(this.nowYear,this.nowMonth)
			},
			nextMount(){
				// console.log('下一个月')
				this.nowMonth ++ 
				this.dataList = utils.getMonthData(this.nowYear,this.nowMonth)
			},
			nextYear(){
				// console.log('下一年')
				this.nowYear ++ 
				this.dataList = utils.getMonthData(this.nowYear,this.nowMonth)
			}
		},
		created() {
			this.dataList = utils.getMonthData()
			var today = new Date()//获取当前年月
			this.nowMonth = today.getMonth() + 1 //0-11，所以加1
			this.nowYear = today.getFullYear()
			this.nowDay = today.getDay()
			
		}
	}
</script>

<style lang="scss">
	.ml-datapicker-box{
		width: 200px;
		position: relative;
	}
	.ml-input{width: 100%;padding-right: 20px;}
	.icon-arrow-up{position: absolute;right: 4px;top: 0;display: inline-block;height: 100%;line-height: 34px;transition: 0.2s;}
	.ml-option-wrapper{
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
				
			}
			.today{color: #409EFF;}
			.active{border: 1px solid #409EFF;color: white;background-color: #409EFF;border-radius: 100%;}
		}
		
	}
	
	// span{width: 40.7px;height: 40.7px;line-height: 28px;text-align: center;box-sizing: border-box;}

</style>
