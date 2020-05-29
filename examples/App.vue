<template>
	<div id="app">
		<div class="iconList">
			<div class="list" v-for="item in data">
				<i :class="item"></i>
				<div class="text">{{item}}</div>
			</div>
		</div>
	</div />
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
		data() {
			return {
				data: [
					'icon-loading', 
					'icon-movie',
					 'icon-coupon', 
					 'icon-remen', 
					 'icon-chuangzuo', 
					 'icon-component', 
					 'icon-code',
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
					"icon-list",
					"icon-check-filled",
					"icon-forbidden",
					"icon-info-filled",
					"icon-info",
					"icon-help-filled",
					"icon-help",
					"icon-caution",
					"icon-caution-filled",
					"icon-like",
					"icon-like-filled",
					"icon-star",
					"icon-star-filled",
					"icon-arrow-up",
					"icon-arrow-left",
					"icon-arrow-down",
					"icon-arrow-right",
					"icon-page-turning-left",
					"icon-page-turning-right",
					"icon-show-less",
					"icon-show-more",
					"icon-social-fb",
					"icon-social-linkedin",
					"icon-social-sina",
					"icon-social-google",
					"icon-social-naver",
					"icon-social-stackflow",
					"icon-social-youtube",
					"icon-social-githu",
					"icon-social-twitter",
					"icon-applets",
					"icon-isocial-wechat",
					"icon-social-server-fault",
					"icon-balance",
					"icon-go-to-link",
					"icon-benefits",
					"icon-jianshezhong1",
					"icon-dingtalk",
					"icon-alipay",
					"icon-taobao",
					"icon-aixin",
					"icon-dingtalk",
					"icon-alipay",
					"icon-taobao",
					"icon-aixin",
					"icon-bianji",
					"icon-Dyanjing",
					'icon-caidan',
					"icon-anquan",
					"icon-bangzhu",
					"icon-buganxingqu",
					"icon-bofangjilu",
					"icon-chuangzuo",
					"icon-chenggong",
					"icon-ceshi",
					"icon-dianhua",
					"icon-dianzan",
					"icon-dingwei",
					"icon-diantong-guan",
					"icon-dianying",
					"icon-ditu",
					"icon-diantong_kai",
					"icon-dianyingpiao",
					"icon-dingdan",
					"icon-gengduo",
					"icon-fanbei",
					"icon-faxian",
					"icon-ertongpiao",
					"icon-gongyi",
					"icon-hongbao",
					"icon-fuzhi",
					"icon-fenxiang",
					"icon-huatifuhao",
					"icon-huiyuan",
					"icon-aliyu",
					"icon-jiju",
					"icon-jianshao",
					"icon-kabao",
					"icon-huati",
					"icon-guanzhu",
					"icon-maiyizengyi",
					"icon-mima",
					'icon-nan',
					"icon-nv",
					"icon-lihe",
					"icon-paihangbang",
					"icon-lipinka",
					"icon-pengyouquan",
					"icon-mingxinghuodong",
					"icon-qupiao",
					"icon-saoyisao",
					"icon-rili",
					"icon-pinglun",
					"icon-qinghuiyuan",
					"icon-riqian",
					"icon-shandian",
					"icon-shaixuan",
					"icon-shangquan",
					"icon-shanchu",
					"icon-shezhi",
					"icon-shangchuan",
					"icon-shequ",
					"icon-shengyinguanbi",
					"icon-shibai",
					"icon-shijian",
					"icon-shengyin",
					"icon-shoucang",
					"icon-shouji",
					"icon-shouye",
					"icon-shuju",
					"icon-shuaxin",
					"icon-sousuo",
					"icon-tanhao",
					'icon-taolunqu',
					"icon-tianjiayouhuiquan",
					"icon-tishi",
					"icon-tupian",
					"icon-tuipiao",
					"icon-weixuanzhong",
					"icon-weibo",
					"icon-wenjuan",
					"icon-wode",
					"icon-weixin",
					"icon-wodeguanzhu",
					"icon-xiami",
					"icon-xiangkan",
					"icon-xiangji",
					"icon-xiaoxi",
					"icon-xiazai",
					"icon-xiaojuchang",
					"icon-xiaoshi",
					"icon-xiaoxizhongxin",
					"icon-yinhangka",
					"icon-yanjing",
					'icon-yingchengka',
					"icon-yixiangkan",
					"icon-yingpingmoban",
					"icon-yanchu",
					"icon-xiaomi",
					"icon-yingyuan",
					"icon-zengjia",
					"icon-yuyin",
					
					"icon-youhuiquan",
					"icon-WIFI",
					"icon-zhibo",
					"icon-youkuhuiyuan",
					"icon-yulebao",
					"icon-zhiwen",
					"icon-aixin1",
					'icon-chenggong1',
					"icon-dianzan1",
					"icon-dianhua1",
					'icon-bangzhu1',
					"icon-dianyingpiao1",
					'icon-faxian1',
					"icon-dingwei1",
					"icon-gonggao",
					"icon-huati1",
					"icon-jianshao1",
					"icon-huiyuan1",
					'icon-pinglun1',
					"icon-shequ1",
					
					"icon-shibai1",
					"icon-shijian1",
					"icon-shandian1",
					"icon-wode1",
					"icon-shouye1",
					"icon-shouji1",
					"icon-tanhao1",
					"icon-shoucang1",
					'icon-shuju1',
					
					'icon-wenda',
					"icon-yanjing1",
					"icon-yingchengka1",
					"icon-xiangji1",
					"icon-yingyuan1",
					"icon-yinhangyouhui",
					"icon-xiaoshi1",
					"icon-yanchu1",
					"icon-zengjia1",
					"icon-close",
					"icon-leftarrow"
					
					
				]
			}
		},
		methods: {
			close(e) {
				this.visible = e
			}
		}
	}
</script>

<style lang="scss">
	#app {
		width: 80%;
		margin: 0 auto;
	}

	.iconList {
		width: 100%;
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}

	.iconList .list {
		width: 20%;
		display: flex;
		align-items: center;
		flex-direction: column;
		margin: 10px 0;
	}

	.iconList .list i {
		font-size: 50px;
	}

	.iconList .list .text {
		font-size: 16px;
		padding: 20px 0;
	}
</style>
