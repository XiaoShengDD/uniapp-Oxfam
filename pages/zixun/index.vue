<template>
	<view class="container">
		<u-no-network></u-no-network>
		<view class="box" @click="navgopages(i)" v-for="(i,index) in newsList" :key="index">
			<view class="biaoti color_222 font_size_30 over_one">
				{{i.news_title}}
			</view>
			<view class="color_9B9B9B font_size_28 over_one">
				{{i.news_text}}
			</view>
			<view class="color_9B9B9B font_size_28">
				{{i.create_time}}
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList: [{
					news_title: '请注意，内有猛犬！BigONE带你一文读懂SHIB柴犬币',
					news_text: '最近几天一种名为“柴犬币”（SHIB），也俗称“屎币”的虚拟货币，以单日涨幅超过 5 倍，月涨幅超过 300 倍，',
					create_time: '2021-05-14 16:02',
					url:'https://m.mytokencap.com/news/236355?language=zh_CN&legal_currency=CNY'
				},
				{
					news_title: '行业观察 | shib暴涨后刹车，大波动币种注意风险',
					news_text: '最近火热的shib（柴犬币），让人惊叹，短短2天时间，Shib先后上线了OKEx、火币、币安三大交易所，币价也真的抹掉了一个“0”，越过狗狗币，',
					create_time: '2021-05-17 15:37',
					url:'https://m.mytokencap.com/news/239279?language=zh_CN&legal_currency=CNY'
				},
				{
					news_title: 'SHIB被抛售后，V神的地址里还有什么币？',
					news_text: '在经历了疯狂的上涨后，SHIB为代表的“动物币”迎来了当头暴击，5月13日凌晨',
					create_time: '2021-05-14 08:41',
					url:'https://m.mytokencap.com/news/237315?language=zh_CN&legal_currency=CNY'
				},
				{
					news_title: 'V神执剑斩狗，SHIB 一度盘中近乎腰斩',
					news_text: 'V神（以太坊的创始人Vitalik）12号在Uniswap治理论坛上发了一个提案。提案立意新颖，脑洞大开，令社群击节赞叹。',
					create_time: '2021-05-13 11:22',
					url:'https://m.mytokencap.com/news/237046?language=zh_CN&legal_currency=CNY'
				},
				{
					news_title: 'Vitalik卖出SHIB、AKITA等获赠代币，捐赠50亿枚SHIB给印度新冠救急基金会',
					news_text: 'ANews 5月13日消息，以太坊联合创始人Vitalik Buterin在今日凌晨抛售项目方赠与其的SHIB、',
					create_time: '2021-05-13 08:43',
					url:'https://m.mytokencap.com/news/236757?language=zh_CN&legal_currency=CNY'
				},
				{
					news_title: '从SHIB身上，看到了区块链精神的传承',
					news_text: '昨天关于 SHIB 的文章 有 不少读者的留言 ， 其中有些读者表达了一丝遗憾，认为要是能早点知道这 类项目 就好了',
					create_time: '2021-05-11 06:28',
					url:'https://m.mytokencap.com/news/236206?language=zh_CN&legal_currency=CNY'
				}],
				
			}
		},
		onShow() {
			// this.news()
		},
		methods: {
			navgopages(i){
				uni.setStorageSync("xinwen",i)
				uni.navigateTo({
					url:"../news/newdel/newdel"
				})
			},
			// 初始化方法
			async news(){
				let data = {
				
				}
				const res = await this.$appserve.news(data);
				//console.log(res)
				this.newsList = res.data
				
			},
		}
	}
</script>

<style scoped>
	.box{
		width: 95%;
		background: #FFFFFF;
		border-radius: 3px;
		padding: 20upx;
		margin: 20upx auto;
	}
	.box view{
		line-height: 60upx;
	}
	.biaoti{
		font-weight: 600;
	}
</style>
