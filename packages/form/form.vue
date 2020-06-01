<template>
	<div class="ml-form">
		<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'mlForm',
		props:{
			model:{
				type:Object,
				required:true
			},
			labelWidth:{
				type:String,
				default:''
			}
		},
		provide(){
			return{
				Form:this
			}
		}
	}
</script>

<style>
	
</style>
