<template>
	<label class="ml-checkbox" :class="{'is-checked':isChecked}">
		<span class="ml-checkbox_input">
			<span class="ml-checkbox_inner"></span>
			<input 
			type="checkbox" 
			class="ml-checkbox_original"
			:name="name"
			v-model="model"
			:value="label"
			/>
		</span>
		<span class="ml-checkbox_label">
			<slot></slot>
			<template v-if="!$slots.default">
				{{label}}
			</template>
		</span>
	</label>
	
</template>

<script>
	export default{
		name:'mlCheckbox',
		props: {
			label:{
				type:[String,Number,Boolean],
				default:''
			},
			value:{
				type:Boolean,
				default:false
			},
			name:{
				type:String,
				default:''
			}
		},
		inject:{
			CheckboxGroup:{default:''}
		},
		computed:{
			model: {
			      get () {
					  return this.isGroup ? this.CheckboxGroup.value : this.value
			      },
			      set (value) {
			        this.isGroup ? this.CheckboxGroup.$emit('input',value) : this.$emit('input', value)
			      }
			},
			isGroup(){
				return !!this.CheckboxGroup
			},
			isChecked(){
				//如果是group包裹，判断label是否在model中
				//
				return this.isGroup ? this.model.includes(this.label) : this.model
			}
		},
	}
</script>

<style lang="scss" scoped>
  .ml-checkbox{
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: nml;
    margin-right: 30px;
    .ml-checkbox_input{
      white-space: nowrap;
      cursor: pointer;
      outline: nml;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .ml-checkbox_inner{
        display: inline-block;
        position: relative;
        border: 1px solid #dcdfe6;
        border-radius: 2px;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: #fff;
        z-index: 1;
        transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s,cubic-bezier(.71,-.46,.29,1.46);
        &:after{
          box-sizing: content-box;
          content: '';
          border: 1px solid white;
          border-left: 0;
          border-top: 0;
          height: 7px;
          left: 4px;
          position: absolute;
          top: 1px;
          transform: rotate(45deg) scaleY(1);
          width: 3px;
          transition: transform .15s ease-in .05s;
          transform-origin: center;
        }
      }
      .ml-checkbox_original{
        opacity: 0;
        outline: nml;
        position: absolute;
        left: 10px;
        margin: 0;
        width: 0;
        height: 0;
        z-index: -1;
      }
    }
    .ml-checkbox_label{
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
  }
  // 选中的样式
  .ml-checkbox.is-checked{
    .ml-checkbox_input{
      .ml-checkbox_inner{
        background-color: #409eff;
        border-color: #409eff;
      }
      &:after{
        transform: rotate(45deg) scaleY(1);
		
      }
    }
    .ml-checkbox_label{
      color: #409eff;
    }
  }
</style>
