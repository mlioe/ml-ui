<template>
	<div class="ml-button-group">
	    <slot></slot>
	</div>
</template>

<script>
	export default{
		name:'mlButtonGroup'
	}
</script>

<style lang="scss" scoped>
	.ml-button-group{display: flex;vertical-align: middle;}
	.ml-button-group > .ml-button{
		border-radius: 0px;
	}
	.ml-button-group > .ml-button:nth-child(1){
		border-top-left-radius: 3px;
		border-bottom-left-radius: 3px;
		border-right: none;
		
	}
	.ml-button-group > .ml-button:nth-last-child(1){
		border-top-right-radius: 5px;
		border-bottom-right-radius: 3px;
		border-left: none;
	}
</style>
