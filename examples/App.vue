<template>
	<div>
		<ml-form :model="model" label-width="80px">
			<ml-form-item label="用户名">
				<ml-input placeholder="请输入名字" style="width: 200px;"></ml-input>
			</ml-form-item>
			<ml-form-item label="显示资料">
				<ml-switch v-model="value"></ml-switch>
			</ml-form-item>
			<ml-form-item>
				<ml-button type="primary" @click="go">立即创建</ml-button>
			</ml-form-item>
		</ml-form>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				model:{
					gender:0,
					value:false
				},
				value:false
			}
		},
		methods:{
			go(){
				console.log(this.model)
			}
		}
	}
</script>

<style>
</style>
