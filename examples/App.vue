<template>
	
	<div>
		<ml-data-picker placeholder="选择日期时间" v-model="value" disabled></ml-data-picker>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				// value:new Date()
				value:''
			}
		},
		
	}
</script>

<style>
</style>
