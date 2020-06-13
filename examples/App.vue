<template>
	<div>
		<ml-input v-model="value" placeholder="请输入内容" type="text" name="inp" clearable style="width: 200px;"></ml-input>
		<ml-input v-model="value" placeholder="请输入内容" type="password" name="inp"  show-password ></ml-input>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
				value: 1,
				name: ''
			}
		},
		methods: {
			go() {
				
			}
		}
	}
</script>

<style>
</style>
