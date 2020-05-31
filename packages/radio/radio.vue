<template>
	<label class="ml-radio" :class="{'is-checked':label == model}">
		<span class="ml-radio__input">
			<span class="ml-radio__inner"></span>
			<input type="radio" ref="radio" class="ml-radio__original" :value="label" :name="name" v-model="model">
		</span>
		<span class="ml-radio__label">
			<slot></slot>
			<template v-if="!$slots.default">
				{{label}}
			</template>
		</span>
	</label>
</template>

<script>
	export default {
		name: 'mlRadio',
		inject:{
			RadioGroup:{default:''}
		},
		created() {
			// console.log(this.$parent)
		},
		props: {
			label:{
				type:[String,Number,Boolean],
				default:''
			},
			value:null,
			name:{
				type:String,
				default:''
			}
		},
		computed:{
			model: {
			      get () {
			        return this.isGroup ? this.RadioGroup.value:this.value
			      },
			      set (value) {
			        this.$emit('input', value)
			        // this.$refs.radio.checked = this.label === this.model
					this.isGroup ? this.RadioGroup.$emit('input',value):this.$emit('input',value)
			      }
			},
			isGroup(){
				return !!this.RadioGroup
			}
		},
		data() {
			return {
				
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.ml-radio {
		color: #606266;
		font-weight: 500;
		line-height: 1;
		position: relative;
		cursor: pointer;
		display: inline-block;
		white-space: nowrap;
		outline: none;
		font-size: 14px;
		margin-right: 30px;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;

		.ml-radio__input {
			white-space: nowrap;
			cursor: pointer;
			outline: none;
			display: inline-block;
			line-height: 1;
			position: relative;
			vertical-align: middle;

			.ml-radio__inner {
				border: 1px solid #dcdfe6;
				border-radius: 100%;
				width: 14px;
				height: 14px;
				background-color: #fff;
				position: relative;
				cursor: pointer;
				display: inline-block;
				box-sizing: border-box;

				&:after {
					width: 6px;
					height: 6px;
					border-radius: 100%;
					background-color: #fff;
					content: "";
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%) scale(0);
					transition: transform .15s ease-in;
				}
			}

			.ml-radio__original {
				opacity: 0;
				outline: none;
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0px;
				right: 0;
				bottom: 0;
				margin: 0;
			}
		}

		.ml-radio__label {
			font-size: 14px;
			padding-left: 5px;
		}
	}

	.ml-radio.is-checked {
		.ml-radio__input {
			.ml-radio__inner {
				border-color: #409eff;
				background: #409eff;

				&:after {
					transform: translate(-50%, -50%) scale(1);
				}
			}
		}

		.ml-radio__label {
			color: #409eff;
		}
	}
</style>
