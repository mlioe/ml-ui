<template>
	<div class="ml-select-box">
		<div @click="wrapperType = !wrapperType">
			<ml-input class="ml-input" readonly style="cursor: pointer;" v-model="selectedValue">
				
			</ml-input>
		</div>
		<div class="ml-option-wrapper" v-show="wrapperType">
			<ul>
				<slot></slot>
			</ul>
		</div>
	</div>
</template>

<script>
	import mlInput from '../input/input.vue'
	import Vue from 'vue'
	export default{
		components: { mlInput },
		props:{
			value:'',
		},
		data(){
			return{
				wrapperType:false,
				eventBus: new Vue(),
				selectedValue:''
			}
		},
		created() {
			this.selectedValue = this.value
		},
		methods:{
			
		},
		computed:{
			
		},
		mounted() {
		    this.eventBus.$on('update:selectedValue', (row) => {
				// this.label = row.value
				// this.value = row.label
				this.selectedValue = row.label
				this.$emit('input', row.label)
				this.$emit('change',{label:row.label,value:row.value})
				this.wrapperType = !this.wrapperType
				this.$children.filter(vm=>{
					vm.selectValue = vm.selectValue ?  row.label : ''
				})
		    })
			
		  },
		name:'mlSelect',
		provide() {
		    return{
		    	eventBus:this.eventBus,
				select:this
		    }
		},
	}
</script>

<style lang="scss">
	.ml-select-box{
		width: 200px;
		position: relative;
		
	}
	.ml-input{width: 100%;}
	.ml-option-wrapper{
		z-index: 9;
		box-sizing: border-box;
		position: absolute;
		width: 100%;
		left: 0;
		top: 105%;
		display: flex;
		color: #606266;
		border: 1px solid #e4e7ed;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		background: #fff;
		border-radius: 4px;
		line-height: 30px;
		padding: 10px;
		ul{
			width: 100%;
			text-align: center;
			max-height: 150px;
			overflow-y: auto;
			padding: 0;
			margin: 0;
			scrollbar-width: none; /* firefox */
			  -ms-overflow-style: none; /* IE 10+ */
			li {
			    width: 100%;
			    line-height: 35px;
			    text-align: left;
			    list-style: none;
				transition: 0.1s;
			    &:hover {
			        background-color: #f5f7fa;
			        font-weight: 700;
			        cursor: pointer;
			    }
			}
		}
		ul::-webkit-scrollbar {
		        display: none;
		}
	}
</style>
