<template>
	<div style="margin-top: 30px;display: flex;align-items: center;" >
		
	
		
		<ml-time-picker v-model="value" placeholder="请选择时间" :picker-options="{
        start: '08:00',
		step:'00:30',
        end: '18:30',
      }"></ml-time-picker>
		
		
		
		
		<ml-time-picker v-model="value" placeholder="请选择时间" :picker-options="{
		  selectableRange: '00:09:20 - 02:01:05'
		  
		}" @input="input"></ml-time-picker>
		
		<!-- <button @click="aa"></button> -->
		
		<!-- <ml-radio label="1" v-model="gender" @change="input"></ml-radio>
		<ml-radio label="0" v-model="gender" @change="input"></ml-radio> -->
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:'',
				
			}
		},
		methods:{
			input(e){
				console.log(e)
			},
			aa(){
				console.log(this.value)
			}
		}
	}
</script>

<style>
</style>
