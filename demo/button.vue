<template>
  <div id="app">
	  <div class="bt-box">
	  	<ml-button circle >圆形</ml-button>
	  	<ml-button circle  type="primary">1</ml-button>
	  	<ml-button circle  type="success">1</ml-button>
	  	<ml-button circle  type="info">1</ml-button>
	  	<ml-button circle  type="warning">1</ml-button>
	  	<ml-button circle  type="danger">1</ml-button>
	  </div>
    <div class="bt-box">
		<ml-button>普通按钮</ml-button>
		<ml-button type="primary">primary</ml-button>
		<ml-button type="success">success</ml-button>
		<ml-button type="info">info</ml-button>
		<ml-button type="warning">warning</ml-button>
		<ml-button type="danger">danger</ml-button>
	</div>
	<div class="bt-box">
		<ml-button plain>朴素按钮</ml-button>
		<ml-button plain type="primary">primary</ml-button>
		<ml-button plain type="success">success</ml-button>
		<ml-button plain type="warning">warning</ml-button>
		<ml-button plain type="info">info</ml-button>
		<ml-button plain type="danger">danger</ml-button>
	</div>
	<div class="bt-box">
		<ml-button plain round>圆角</ml-button>
		<ml-button plain round type="primary">primary</ml-button>
		<ml-button plain round type="success">success</ml-button>
		<ml-button plain round type="warning">warning</ml-button>
		<ml-button plain round type="info">info</ml-button>
		<ml-button plain round type="danger">danger</ml-button>
	</div>
	<div class="bt-box">
		<ml-button  round disabled>普通禁用按钮</ml-button>
		<ml-button  round disabled type="primary">primary</ml-button>
		<ml-button  round disabled type="success">success</ml-button>
		<ml-button  round disabled type="info">info</ml-button>
		<ml-button  round disabled type="warning">warning</ml-button>
		<ml-button  round disabled type="danger">danger</ml-button>
	</div>
	<div class="bt-box">
		<ml-button plain round disabled>普通禁用按钮</ml-button>
		<ml-button plain round disabled type="primary">primary</ml-button>
		<ml-button plain round disabled type="success">success</ml-button>
		<ml-button plain round disabled type="info">info</ml-button>
		<ml-button plain round disabled type="warning">warning</ml-button>
		<ml-button plain round disabled type="danger">danger</ml-button>
	</div>
	<div class="bt-box">
		<ml-button icon="icon-icon-test9">带图标的按钮</ml-button>
		<ml-button circle icon="icon-icon-test9" @click="click"></ml-button>
		<ml-button type="primary"  :loading="true">加载中</ml-button>
	</div>
  </div>
</template>

<script>

export default {
	methods:{
		click(e){
			// console.log(e)
		}
	}
}
</script>

<style lang="scss">
	.bt-box{margin-bottom: 20px;}
	.ml-button{margin-right: 20px;}
</style>
