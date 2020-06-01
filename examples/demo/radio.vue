<template>
	<div>
		<!-- <ml-radio label="1" v-model="gender">男</ml-radio>
		<ml-radio label="0"  v-model="gender">女</ml-radio>
		
		<ml-radio label="1" v-model="gender"></ml-radio>
		<ml-radio label="0"  v-model="gender"></ml-radio> -->
		
		<ml-radio-group v-model="gender2">
			<ml-radio label="1"></ml-radio>
			<ml-radio label="0"></ml-radio>
		</ml-radio-group>
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:false,
				gender:1,
				gender2:0
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
