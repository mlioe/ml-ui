<template>
	
	<div>
		<ml-data-picker placeholder="选择日期时间" v-model="value" @change="change"></ml-data-picker>
		
		<button @click="aa">1213</button>
		<button @click="bb">获取</button>
	</div>
</template>
<script>
	/*
	* placeholder  v-model 
	*@change
	*/
	export default{
		data(){
			return{
				// value:new Date()
				value:''
			}
		},
		methods:{
			aa(){
				this.value = '2020-06-06'
			},
			change(e){
				console.log(e)
			},
			bb(){
				console.log(this.value)
			}
		}
	}
</script>

<style>
</style>
