<template>
	<div style="margin-top: 30px;" >
		
	
		
		<ml-time-picker v-model="value" :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"></ml-time-picker>
		
		<!-- <ml-radio label="1" v-model="gender" @change="input"></ml-radio>
		<ml-radio label="0" v-model="gender" @change="input"></ml-radio> -->
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:'2019-01-01',
				
			}
		},
		methods:{
			input(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
