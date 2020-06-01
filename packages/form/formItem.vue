<template>
	<div class="ml-form-item">
		<label class="ml-form-item_label" :style="{width:this.Form.labelWidth}">{{label}}</label>
		<div :style="{width:this.Form.labelWidth}" style="line-height: 40px;height: 40px;float: left;" v-if="!label">  </div>
		<div class="ml-form-item_content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'mlFormItem',
		created() {
			
		},
		inject:['Form'],
		computed: {
		    labelStyle () {
		      return {
		        // width: this.Form.labelWidth
		      }
		    }
		},
		props:{
			label:String,
			
		}
	}
</script>

<style lang="scss" scoped>
  .ml-form-item{
    margin-bottom: 25px;
    .ml-form-item_label{
          text-align: right;
          vertical-align: middle;
          float: left;
          font-size: 14px;
          color: #606266;
          line-height: 40px;
          padding: 0 12px 0 0;
          box-sizing: border-box;
        }
        .ml-form-item_content{
          line-height: 40px;
          position: relative;
          font-size: 14px;
          overflow: hidde;
        }
  }
</style>
