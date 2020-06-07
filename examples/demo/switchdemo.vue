<template>
	<div>
		<ml-switch  v-model="value"></ml-switch>
		<ml-switch  v-model="value" active-color="red" inactive-color="green" @input="input"></ml-switch>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value:false,
			}
		},
		methods:{
			input(e){
				this.$toast({
					message:JSON.stringify(e),
				})
			}
		}
	}
</script>

<style>
</style>
