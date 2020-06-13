<template>
	<div style="margin-top: 30px;display: flex;align-items: center;" >
		
	
		
		<ml-time-picker v-model="value" placeholder="请选择时间" :picker-options="{
        start: '08:00',
		step:'00:30',
        end: '18:30',
      }"  @input="input"></ml-time-picker>
		
		
		
		
		<ml-time-picker v-model="value2" placeholder="请选择时间" :picker-options="{
		  selectableRange: '00:09:20 - 02:01:05'
		  
		}" @input="input2"></ml-time-picker>
		
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
				value2:''
			}
		},
		methods:{
			input(e){
				console.log(this.value)
			},
			input2(e){
				console.log(e)
				this.value2 = e
			},
			
		}
	}
</script>

<style>
</style>
