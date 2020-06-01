<template>
	<div>
		<ml-toast :visible.sync="type" :position="position" :type="success">{{position}}</ml-toast>
		<ml-button @click="a">点击</ml-button>
		<ml-button @click="b">函数调用</ml-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				type:false,
				position:'center',
				success:'success'
			}
		},
		methods:{
			a(){
				this.type = !this.type
			},
			b(){
				this.$toast({
					message:'你好',
					position:this.position,
					type:this.success,
					duration:1000
				})
			}
		}
	}
</script>

<style>
</style>
