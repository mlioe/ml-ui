<template>
  <div id="app">
	
	<ml-input v-model="value" placeholder="请输入你XX" type="text" name="inp"></ml-input>
  </div>
</template>



<script>
/**
 * placeholder
 * type
 * disabled
 * clearable
 * showPass
 * name
 * 
 * */
export default {
	data(){
		return{
			value:"你好"
		}
	},
	methods:{
		close(e){
			this.visible = e
		}
	}
}
</script>

<style lang="scss">
	
</style>
