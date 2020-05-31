<template>
	<div class="ml-radio-group">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'mlRadioGroup',
		props:{
			value:null
		},
		provide(){
			return{
				RadioGroup:this
			}
		}
	}
</script>

<style>
</style>
