<template>
	<div style="margin-top: 30px;" >
		
		<ml-radio-group v-model="gender2" @change="input">
			<ml-radio label="1"></ml-radio>
			<ml-radio label="0"></ml-radio>
		</ml-radio-group>
		
		<!-- <ml-radio label="1" v-model="gender" @change="input"></ml-radio>
		<ml-radio label="0" v-model="gender" @change="input"></ml-radio> -->
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:false,
				gender:0,
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
