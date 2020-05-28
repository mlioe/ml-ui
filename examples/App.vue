<template>
  <div id="app">
	<div class="iconList">
		<div class="list" v-for="item in data">
			<i :class="item"></i>
			<div class="text">{{item}}</div>
		</div>
	</div>
  </div/>
</template>



<script>
/**
 * placeholder
 * type
 * disabled
 * clearable
 * showPass
 * name
 * 
 * */
export default {
	data(){
		return{
			data:['icon-loading','icon-movie','icon-coupon','icon-remen','icon-chuangzuo','icon-component','icon-code',
			'icon-rising',
			'icon-exchangerate',
			"con-add-select",
			"icon-sami-select",
			"icon-jianshezhong",
			'icon-view-off',
			"icon-view",
			"icon-time",
			"icon-edit",
			"icon-link",
			"icon-setting",
			"icon-upload",
			"icon-download",
			"icon-play",
			"icon-region",
			"icon-list"
			]
		}
	},
	methods:{
		close(e){
			this.visible = e
		}
	}
}
</script>

<style lang="scss">
	#app{width: 80%;margin: 0 auto;}
	.iconList{width: 100%;display: flex;align-items: center;flex-wrap: wrap;}
	.iconList .list{width: 20%;display: flex;align-items: center;flex-direction: column;margin: 10px 0;}
	.iconList .list i{font-size: 50px;}
	.iconList .list .text{font-size: 16px;padding: 20px 0;}
</style>
