<template>
  <div id="app">
	<!-- 普通的 -->
	<!-- <ml-dialog :visible="true" :title="title">12</ml-dialog> -->
	<!-- 自定义标题 -->
	<!-- <ml-dialog :visible="true" >
		<template v-slot:title>
			<h3>12</h3>
		</template>
	</ml-dialog> -->
	<!-- 自定义框，距离顶部的距离 -->
	<!-- <ml-dialog :visible="true" width="20%" top="300px">neirong</ml-dialog> -->
	<!-- 管理底部按钮 -->
	<!-- <ml-dialog :visible="true" :title="title">
		<template v-slot:footer>
			<ml-button>自定义</ml-button>
		</template>
	</ml-dialog> -->
	<!-- 取消底部按钮 -->
	<!-- 关闭取消按钮 -->
	<!-- <ml-dialog :visible="true" :showClose="false">12</ml-dialog> -->
	<!-- 关闭确认按钮 -->
	<button @click="visible = !visible">按钮</button>
	<ml-dialog :visible.sync="visible" :showConfirm="false">12</ml-dialog>
  </div>
</template>

<script>

export default {
	data(){
		return{
			title:'123',
			visible:false
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
