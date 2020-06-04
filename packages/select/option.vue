<template>
	<li  @click="selecteItem" :style="label == selectValue  ? 'color:#66b1ff;font-weight: 700;':''">
		{{label}}
	</li>
</template>

<script>
	export default{
		name:'ml-option',
		data(){
			return{
				selectValue:'',
			}
		},
		props:{
			label: {
				    type: [String, Number],
				    required: true,
				},
				value: {
				    type: [String, Number],
				    required: true,
				},
		},
		methods:{
			
		},
		inject:{
			eventBus:{default:''},
			select:{default:''}
		},
		created() {
			// console.log(this)
			// console.log(this.eventBus)
			// console.log(this.select.value)
			this.selectValue = this.select.value
		},
		methods:{
			selecteItem(){
				this.eventBus.$emit('update:selectedValue', {
				        value: this.value,
				        label: this.label,
				})
			}
		}
	}
</script>

<style>
	li {
	    width: 100%;
	    line-height: 35px;
	    text-align: left;
	    list-style: none;
		transition:0.5s
	    &:hover {
	        background-color: #f5f7fa;
	        font-weight: 700;
	        cursor: pointer;
	    }
	}
	.isSelect{
		color: #409eff;
		font-weight: bold;
	}
</style>
