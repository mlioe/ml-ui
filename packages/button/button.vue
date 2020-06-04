<template>
	<button 
		class="ml-button" 
		:class="[
			`ml-button--${type}`,
			{'is-plain':plain},
			{'is-round':round},
			{'is-disabled':disabled},
			{'is-circle': circle}
		]"
		@click="click"
		:disabled="disabled"
		>
		<i v-if="loading" class="icon-loading icon-loading-animation"></i>
		<i v-if="icon" :class="icon"></i>
		<!-- 没有内容要隐藏 -->
		<span v-if="$slots.default">
			<slot></slot>
		</span>
	</button>
</template>
<!-- 
type按钮类型
plain是否是朴素按钮
round是否圆角
circle是否圆形
disabled禁用
icon图片类名
 
 -->

<script>
	export default {
		name: 'mlButton',
		props: {
			type: {
				type: String,
				default: ''
			},
			plain: {
				type: Boolean,
				default: false
			},
			round: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			},
			circle:{
				type:Boolean,
				default:false
			},
			icon:{
				type:String,
				default:''
			},
			loading:{
				type:Boolean,
				default:false
			}
		},
		created() {},
		
		methods:{
			click(e){
				this.$emit('click',e)
			}
		},
	}
</script>

<style lang="scss" scoped>
	.ml-button {
		display: inline-block;
		line-height: 1;
		font-weight: 400;
		white-space: nowrap;
		cursor: pointer;
		background: #fff;
		border: 1px solid #dcdfe6;
		color: #606266;
		-webkit-appearance: none;
		text-align: center;
		box-sizing: border-box;
		outline: none;
		transition: 0.1s;
		font-weight: 500;
		// 禁止元素的文字被选中
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		//
		padding: 4px 15px;
		font-size: 14px;
		border-radius: 4px;
		transition: all .3s cubic-bezier(.645, .045, .355, 1);
		box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
		height: 32px;

		&:hover,
		&:focus {
			color: #409eff;
			border-color: #c6e2ff;
			background-color: #ecf5ff;
		}
	}


	.ml-button--primary {
		color: #fff;
		background-color: #409eff;
		border-color: #409eff;

		&:hover,
		&:focus {
			background: #66b1ff;
			border-color: #66b1ff;
			color: #fff;
		}
	}

	.ml-button--success {
		color: #fff;
		background-color: #67c23a;
		border-color: #67c23a;

		&:hover,
		&:focus {
			background: #85ce61;
			border-color: #85ce61;
			color: #fff;
		}
	}

	.ml-button--info {
		color: #fff;
		background-color: #909399;
		border-color: #909399;

		&:hover,
		&:focus {
			background: #a6a9ad;
			border-color: #a6a9ad;
			color: #fff;
		}
	}

	.ml-button--warning {
		color: #fff;
		background-color: #e6a23c;
		border-color: #e6a23c;

		&:hover,
		&:focus {
			background: #ebb563;
			border-color: #ebb563;
			color: #fff;
		}
	}

	.ml-button--danger {
		color: #fff;
		background-color: #f56c6c;
		border-color: #f56c6c;

		&:hover,
		&:focus {
			background: #f78989;
			border-color: #f78989;
			color: #fff;
		}
	}
	// 原形按钮
	.ml-button.is-circle {
	  border-radius: 50%;
	  width: 34px;
	  height: 34px;
	  padding: 0;
	  text-align: center;
	  line-height: 1;
	}

	// 朴素的按钮
	.ml-button.is-plain {

		&:hover,
		&:focus {
			background: #fff;
			border-color: #409eff;
			color: #409eff;
		}
	}

	.ml-button--primary.is-plain {
		color: #409eff;
		background: #ecf5ff;
		border-color: #b3d8ff;

		&:hover,
		&:focus {
			background: #409eff;
			border-color: #409eff;
			color: #fff;
		}
	}

	.ml-button--success.is-plain {
		color: #67c23a;
		background: #f0f9eb;
		border-color: #c2e7b0;

		&:hover,
		&:focus {
			background: #67c23a;
			border-color: #67c23a;
			color: #fff;
		}
	}

	.ml-button--info.is-plain {
		color: #909399;
		background: #f4f4f5;
		border-color: #d3d4d6;

		&:hover,
		&:focus {
			background: #909399;
			border-color: #909399;
			color: #fff;
		}
	}

	.ml-button--warning.is-plain {
		color: #e6a23c;
		background: #fdf6ec;
		border-color: #f5dab1;

		&:hover,
		&:focus {
			background: #e6a23c;
			border-color: #e6a23c;
			color: #fff;
		}
	}

	.ml-button--danger.is-plain {
		color: #f56c6c;
		background: #fef0f0;
		border-color: #fbc4c4;

		&:hover,
		&:focus {
			background: #f56c6c;
			border-color: #f56c6c;
			color: #fff;
		}
	}

	//圆形按钮
	.ml-button.is-round {
		border-radius: 34px;
		padding: 4px 23px;
	}

	//禁用按钮
	.ml-button.is-disabled {
		color: #c0c4cc;
		background-color: #fff;
		border-color: #ebeef5;

		&:hover,
		&:focus {
			cursor: not-allowed;
			border-color: #ebeef5;
			color: #c0c4cc;
		}
	}

	.ml-button--primary.is-disabled {
		color: #fff;
		background-color: #a0cfff;
		border-color: #a0cfff;

		&:hover,
		&:focus {
			color: #fff;
			background-color: #a0cfff;
			border-color: #a0cfff;
		}
	}

	.ml-button--success.is-disabled {
		color: #fff;
		background-color: #b3e19d;
		border-color: #b3e19d;

		&:hover,
		&:focus {
			color: #fff;
			background-color: #b3e19d;
			border-color: #b3e19d;
		}
	}

	.ml-button--warning.is-disabled {
		color: #fff;
		background-color: #f3d19e;
		border-color: #f3d19e;

		&:hover,
		&:focus {
			color: #fff;
			background-color: #f3d19e;
			border-color: #f3d19e;
		}
	}

	.ml-button--danger.is-disabled {
		color: #fff;
		background-color: #fab6b6;
		border-color: #fab6b6;

		&:hover,
		&:focus {
			color: #fff;
			background-color: #fab6b6;
			border-color: #fab6b6;
		}
	}

	.ml-button--info.is-disabled {
		color: #fff;
		background-color: #c8c9cc;
		border-color: #c8c9cc;

		&:hover,
		&:focus {
			color: #fff;
			background-color: #c8c9cc;
			border-color: #c8c9cc;
		}
	}


	//禁用朴素按钮
	.ml-button.is-disabled.is-plain {
		background-color: #fff;
		border-color: #ebeef5;
		color: #c0c4cc;

		&:hover,
		&:focus {
			cursor: not-allowed;
			background-color: #fff;
			border-color: #ebeef5;
			color: #c0c4cc;
		}
	}

	.ml-button--primary.is-disabled.is-plain {
		color: #8cc5ff;
		background-color: #ecf5ff;
		border-color: #d9ecff;

		&:hover,
		&:focus {
			color: #8cc5ff;
			background-color: #ecf5ff;
			border-color: #d9ecff;
		}
	}

	.ml-button--success.is-disabled.is-plain {
		color: #a4da89;
		background-color: #f0f9eb;
		border-color: #e1f3d8;

		&:hover,
		&:focus {
			color: #a4da89;
			background-color: #f0f9eb;
			border-color: #e1f3d8;
		}
	}

	.ml-button--warning.is-disabled.is-plain {
		color: #f0c78a;
		background-color: #fdf6ec;
		border-color: #faecd8;

		&:hover,
		&:focus {
			color: #f0c78a;
			background-color: #fdf6ec;
			border-color: #faecd8;
		}
	}

	.ml-button--danger.is-disabled.is-plain {
		color: #f9a7a7;
		background-color: #fef0f0;
		border-color: #fde2e2;

		&:hover,
		&:focus {
			color: #f9a7a7;
			background-color: #fef0f0;
			border-color: #fde2e2;
		}
	}

	.ml-button--info.is-disabled.is-plain {
		color: #bcbec2;
		background-color: #f4f4f5;
		border-color: #e9e9eb;

		&:hover,
		&:focus {
			color: #bcbec2;
			background-color: #f4f4f5;
			border-color: #e9e9eb;
		}
	}
	.ml-button [class*=icon-]+span{
		margin-left: 5px;
	}
	.icon-loading-animation{
		animation: rotating 2s linear infinite;
		transform:rotate(30deg);
		display: inline-block;
	}
	@keyframes rotating
	{
	0% {
		transform: rotate(0deg);
		}
	100% {
			transform: rotate(360deg);
		}
	}
</style>
