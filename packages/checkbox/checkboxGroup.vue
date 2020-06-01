<template>
	<div>
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'mlCheckboxGroup',
		props:{
			value:{
				type:Array,
				
			}
		},
		provide(){
			return{
				CheckboxGroup:this
			}
		}
	}
</script>

<style>
</style>
