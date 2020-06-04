<template>
	
	<div>
		<ml-select v-model="value">
			<ml-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</ml-option>
		</ml-select>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				options: [{
				          value: '选项1',
				          label: '黄金糕'
				        },
						{
				          value: '选项2',
				          label: '双皮奶'
				        }, {
				          value: '选项3',
				          label: '蚵仔煎'
				        }, {
				          value: '选项4',
				          label: '龙须面'
				        },
						{
				          value: '选项5',
				          label: '北京烤鸭'
				        }],
				value: '黄金糕',
			}
		},
		created() {
			setTimeout(()=>{
				this.value2 = '------'
			},2000)
		},
		methods:{
			
		}
	}
</script>

<style>
</style>
