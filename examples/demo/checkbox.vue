<template>
	<div>
		<ml-checkbox v-model="value">{{value ? 'true':'false'}}</ml-checkbox>
		
		
		<ml-checkbox-group v-model="data">
			<ml-checkbox label="你好"></ml-checkbox>
			<ml-checkbox label="再见"></ml-checkbox>
		</ml-checkbox-group>
		
		
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:false,
				gender:1,
				gender2:0,
				data:[
					'你好','再见'
				]
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
