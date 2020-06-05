<template>
	<div style="margin-top: 30px;">
		
		<!-- <ml-radio-group v-model="gender2" @change="change">
			<ml-radio label="1"></ml-radio>
			<ml-radio label="0"></ml-radio>
		</ml-radio-group> -->
		<button @click="d">1</button>
		
		
		<ml-radio label="1" v-model="gender2" @change="change"></ml-radio>
		<ml-radio label="0" v-model="gender2" @change="change"></ml-radio>
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
			},
			d(e){
				console.log(this.gender2)
			},
			change(e){
				console.log(e)
			}
		}
	}
</script>

<style>
</style>
