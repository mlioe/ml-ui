<template>
	
	<div>
		<ml-toast :visible.sync="type" position="top" type="info" :duration="3000">{{position}}</ml-toast>
		<ml-toast :visible.sync="type2" position="center" type="info">{{position}}</ml-toast>
		<ml-toast :visible.sync="type3" position="bottom" type="info" :duration="1000">{{position}}</ml-toast>
		<ml-toast :visible.sync="type4" position="top" type="success" :duration="3000">{{position}}</ml-toast>
		
		<ml-button @click="a">从顶部出现的默认按钮</ml-button>
		<ml-button @click="a2">从中间出现的默认按钮</ml-button>
		<ml-button @click="a3">从底部出现的默认按钮</ml-button>
		<ml-button @click="a4">从顶部出现的别的类型按钮</ml-button>
		
		<br>
		<ml-button @click="mr">默认</ml-button>
		<ml-button @click="b">成功</ml-button>
		<ml-button @click="b2">警告</ml-button>
		<ml-button @click="b3">文本</ml-button>
		<ml-button @click="b4">错误</ml-button>
		<ml-button @click="bbb">关闭</ml-button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				type:false,
				type2:false,
				type3:false,
				type4:false,
				position:'center',
				success:'info'
			}
		},
		created() {
			this.$on('good',()=>{
				console.log('触发了')
			})
		},
		methods:{
			bbb(){
				console.log(this)
			},
			a(){
				this.type = !this.type
			},
			a2(){
				this.type2 = !this.type2
			},
			a3(){
				this.type3 = !this.type3
			},
			a4(){
				this.type4 = !this.type4
			},
			mr(){
				this.$toast({
					message:'默认文本',
				})
			},
			b(){
				this.$toast({
					message:'成功文本',
					position:'top',
					type:'success',
				})
			},
			b2(){
				this.$toast({
					message:'警告文本',
					position:'top',
					type:'waring',
					duration:1000
				})
			},
			b3(){
				this.$toast({
					message:'普通文本',
					position:'top',
					type:'info',
					duration:1000
				})
			},
			b4(){
				this.$toast({
					message:'错误文本',
					position:'top',
					type:'error',
					duration:1000
				})
			}
		}
	}
</script>

<style>
</style>
