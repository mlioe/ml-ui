<template>
	<div class="ml-input">
		 <input :type="type" class="ml-input__inner" :placeholder="placeholder" :name="name" :disabled="disabled">
	</div>
</template>

<script>
	export default{
		name:'mlInput',
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
</style>
