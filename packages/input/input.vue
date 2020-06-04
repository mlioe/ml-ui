<template>
	<div class="ml-input" :class="showSuffix?'ml-input--suffix':''">
		 <input 
		 :type=" showPassword ? (passVisible ? 'text':'password'):type " 
		 class="ml-input__inner" 
		 :placeholder="placeholder" 
		 :name="name" :disabled="disabled"
		 :value="value"
		 @input="handelInput"
		 :readonly="readonly"
		 :style="readonly ?'cursor: pointer':''"
		 >
		 <span class="ml-input__suffix" v-if="showSuffix">
			 <i class="icon-shibai" v-if="clearable && value" @click="clear"></i>
			 <i :class="passVisible ? 'icon-view-off':'icon-view'" v-if="showPassword" @click="handelPassword"></i>
		 </span>
	</div>
</template>

<script>
	export default{
		name:'mlInput',
		data(){
			return{
				passVisible:false
			}
		},
		props:{
			placeholder:{
				type:String,
				default:''
			},
			type:{
				type:String,
				default:'text'
			},
			name:{
				type:String,
				default:''
			},
			disabled:{
				type:Boolean,
				default:false
			},
			value:{
				type:[String,Number],
				default:''
			},
			clearable:{
				type:Boolean,
				default:false
			},
			showPassword:{
				type:Boolean,
				default:false
			},
			readonly:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			showSuffix(){
				return this.clearable || this.showPassword
			}
		},
		methods:{
			handelInput(e){
				this.$emit('input',e.target.value)
			},
			clear(){
				this.$emit('input','')
			},
			handelPassword(){
				this.passVisible = !this.passVisible
			}
		}
	}
</script>

<style lang="scss">
	.ml-input {
	  width: 100%;
	  position: relative;
	  font-size: 14px;
	  display: inline-block;
	  &__inner {
	    -webkit-appearance: none;
	    background-color: #fff;
	    background-image: none;
	    border-radius: 4px;
	    border: 1px solid #dcdfe6;
	    box-sizing: border-box;
	    color: #606266;
	    display: inline-block;
	    font-size: inherit;
	    height: 34px;
	    line-height: 34px;
	    outline: none;
	    padding: 0 15px;
	    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
	    width: 100%;
	
	    &:focus {
	      outline: none;
	      border-color: #409eff;
	    }
	  }
	}
	
	
	.ml-input--suffix {
	  .ml-input__inner {
	    padding-right: 30px;
	  }
	  .ml-input__suffix {
	    position: absolute;
	    height: 100%;
	    right: 10px;
	    top: 0;
	    line-height: 34px;
	    text-align: center;
	    color: #c0c4cc;
	    transition: all .3s;
	    z-index: 900;
	    i {
	      color: #c0c4cc;
	      font-size: 14px;
	      cursor: pointer;
	      transition: color .2s cubic-bezier(.645,.045,.355,1);
	    }
	  }
	}
</style>
