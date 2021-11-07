<template>
	<view class="index">
		<view class="mine-main-head">
			<view class="jibie color_fff">
				{{ $t("Investment") }}: {{userinfo.level_value || $t("None") }}
			</view>
			<view class="jine color_fff" v-if="yueinfo1">
				{{yueinfo1.coin_value}}U
			</view>
			<view class="bordersss display_flex flex_between" v-if="yueinfo2">
				<view v-for="(item,index) in yueinfo2" :key="index" class="bordersssview">
					<view>{{item.coin_name}}</view>
					<view class="">{{item.coin_value}}</view>
				</view>
				<!-- 	<view class="bordersssview" >
					<view>{{yueinfo[2].coin_name}}</view>
					<view class="">{{yueinfo[2].coin_value}}</view>
				</view>
				<view class="bordersssview">
					<view>{{yueinfo[3].coin_name}}</view>
					<view class="">{{yueinfo[3].coin_value}}</view>
				</view> -->
			</view>
		</view>
		<view class="jiange"></view>
		<view class="tudndui display_flex flex_start"
			@click="clickMenu(`/pages/index/tuandui/tuandui?name=${userinfo.user_nick_name}`)">
			<view class="">
				<image class="touxiang" src="/static/img/s14.png" mode=""></image>
			</view>
			<view class="tuandui">
				<view class="">{{userinfo.user_nick_name}} {{ $t("team_name") }}</view>
				<view class="" style="padding-top: 50upx;text-align: left;">
					<image src="/static/img/s13.png" mode="" style="margin-right: 30upx;"></image>
					<text style="position: relative;top: -6upx;">{{teamCount}}</text>
				</view>
			</view>
		</view>
		<u-notice-bar style="width: 92%;margin: 0 auto;" border-radius="30" mode="vertical" :duration="3000" type="none"
			color="#4c00af" bg-color="#f5f5f5" :list="list"></u-notice-bar>
		<!-- 		<view class="juanzeng display_flex flex_between">
			<view class="display_flex flex_start">
				<image class="touxiang1" src="/static/img/s15.png" mode=""></image>
				<view class="" style="line-height: 100upx;margin-left: 30upx;font-weight: 600;">
					SHIB募捐
				</view>
			</view>
			<view class="display_flex flex_start">
				<view class="chongzhi" @click="clickMenu('/pages/index/mujuanj/mujuanj')">{{ $t("Donation") }}</view>
				<view class="tixian" @click="clickMenu('/pages/index/mujuan/mujuan')">{{ $t("Breakdown") }}</view>
			</view>
		</view>
 -->


		<view class="juanzeng ">
			<view class="display_flex flex_between">
				<view class="yasen">
					{{ $t("News") }}
				</view>
				<view class="yasen1" @click="tiaozhuan">
					{{ $t("more") }}>
				</view>
			</view>
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


	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				userinfo: {},
				// newsList: [
				// {
				// 		news_title: '请注意，内有猛犬！BigONE带你一文读懂SHIB柴犬币',
				// 		news_text: '最近几天一种名为“柴犬币”（SHIB），也俗称“屎币”的虚拟货币，以单日涨幅超过 5 倍，月涨幅超过 300 倍，',
				// 		create_time: '2021-05-14 16:02',
				// 		url: 'https://m.mytokencap.com/news/236355?language=zh_CN&legal_currency=CNY'
				// 	},
				// 	{
				// 		news_title: '行业观察 | shib暴涨后刹车，大波动币种注意风险',
				// 		news_text: '最近火热的shib（柴犬币），让人惊叹，短短2天时间，Shib先后上线了OKEx、火币、币安三大交易所，币价也真的抹掉了一个“0”，越过狗狗币，',
				// 		create_time: '2021-05-17 15:37',
				// 		url: 'https://m.mytokencap.com/news/239279?language=zh_CN&legal_currency=CNY'
				// 	}
				// ],
				newsList: [
					{
						news_title: 'SHIB再度起飞 小心暴涨后的回调',
						news_text: '比特币创历史新高后开始回调，而柴犬币SHIB却不断创下历史高点，与此同时市值也在不断上升，目前重新成为全球第11大加密货币。',
						create_time: '2021-10-28 09:13',
						url: 'https://mobi.mytokencap.com/news/351024?language=zh_CN&legal_currency=CNY'
					},
					{
						news_title: 'SHIB 登高，谣言作祟？',
						news_text: '整个周末，加密圈的眼球被Shiba Inu吸引，这个logo为柴犬表情的Meme项目通证 SHIB 在2天内从0.000027美元附近冲至0.000044美元左右，涨幅超过62%的同时，也突破了历史新高。',
						create_time: '2021-10-26 09:55',
						url: 'https://mobi.mytokencap.com/news/350390?language=zh_CN&legal_currency=CNY'
					},
					{
						news_title: '金色观察 | 不吹不黑 Shiba Inu (SHIB) 拿什么证明自己',
						news_text: '谈到SHIB，圈内人无人不知。SHIB，Shiba Inu的代币名称，俗称“柴犬币”，也被圈内人戏称为“屎币”，其诞生于一场去中心化自发社区建设的实验。SHIB号称自己是“狗狗币杀手”（ DOGE COIN KILLER），并且在短时间内能超过狗狗币。那么如今怎么样了？',
						create_time: '2021-10-15 16:50',
						url: 'https://mobi.mytokencap.com/news/345960?language=zh_CN&legal_currency=CNY'
					},
					{
						news_title: '行业观察 | shib暴涨后刹车，大波动币种注意风险',
						news_text: '最近火热的shib（柴犬币），让人惊叹，短短2天时间，Shib先后上线了OKEx、火币、币安三大交易所，币价也真的抹掉了一个“0”，越过狗狗币，',
						create_time: '2021-05-17 15:37',
						url: 'https://m.mytokencap.com/news/239279?language=zh_CN&legal_currency=CNY'
					},
					{
						news_title: '请注意，内有猛犬！BigONE带你一文读懂SHIB柴犬币',
						news_text: '最近几天一种名为“柴犬币”（SHIB），也俗称“屎币”的虚拟货币，以单日涨幅超过 5 倍，月涨幅超过 300 倍，',
						create_time: '2021-05-14 16:02',
						url: 'https://m.mytokencap.com/news/236355?language=zh_CN&legal_currency=CNY'
					}

				],
				teamCount: '',
				yueinfo: {},
				yueinfo1: {},
				yueinfo2: []


			}
		},

		onShow() {
			if (uni.getStorageSync('rescodeUserInfo').user_id) {
				this.userdetail()

			} else {
				uni.reLaunch({
					url: '/pages/login/login'
				})
			}

		},
		methods: {
			jiequ(num, decimal) {
				num = num.toString()
				let index = num.indexOf('.')
				if (index !== -1) {
					num = num.substring(0, decimal + index + 1)
				} else {
					num = num.substring(0)
				}
				return parseFloat(num).toFixed(decimal)
			},
			// 初始化方法
			async systemnotice() {
				let data = {

				}
				const res = await this.$appserve.systemnotice(data);
				//console.log(res)
				this.list.push(res.data.system_notice)

			},
			// 初始化方法
			async userwallet() {
				// this.yueinfo1 = {}
				// this.yueinfo2 = []
				const json = []
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.userwallet(data);
				//console.log(res)
				res.data.forEach((item) => {
					item.coin_value = this.jiequ(item.coin_value, 2)
					if (item.coin_name == 'USDT') {
						this.yueinfo1 = item
					} else {
						json.push(item)
					}
				})
				this.yueinfo2 = json
				this.yueinfo = res.data

			},
			// 初始化方法
			async myteamcount() {
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.myteamcount(data);
				//console.log(res)
				this.teamCount = res.data.teamCount

			},
			tiaozhuan() {
				uni.switchTab({
					url: '../zixun/index'
				})
			},
			clickMenu(url) {
				uni.navigateTo({
					url: url
				})
			},
			// 初始化方法
			async news() {
				let data = {

				}
				const res = await this.$appserve.news(data);
				//console.log(res)
				this.newsList = res.data.slice(0, 2)

			},
			navgopages(i) {
				uni.setStorageSync("xinwen", i)
				uni.navigateTo({
					url: "../news/newdel/newdel"
				})
			},

			// 用户详情
			async userdetail() {
				console.log(1)
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.userdetail(data);
				this.userinfo = res.data
				if (res.code == 0) {
					this.myteamcount()
					this.userwallet()
					this.systemnotice()
					// this.news()
				}


			},

		}
	}
</script>
<style>
	page {
		background-color: #fff !important;
	}
</style>
<style lang="less" scoped>
	.bordersssview {
		width: calc(100% / 3);
	}

	.box {
		width: 100%;
		background: #FFFFFF;
		border-radius: 3px;
		padding: 10upx 0;
		margin: 20upx auto;
		border-top: 2upx solid #eee;
	}

	.box view {
		line-height: 60upx;
	}

	.biaoti {
		font-weight: 600;
	}

	.yasen {
		border-left: 8upx solid #0046AE;
		height: 30upx;
		line-height: 30upx;
		padding-left: 10upx;

	}

	.yasen1 {
		height: 30upx;
		line-height: 30upx;
		padding-left: 10upx;
	}

	.chongzhi {
		/* 4C00AF  4C00AF  */
		background: linear-gradient(10deg, #4C00AF 0%, #4C00AF 100%);
		border-radius: 30upx;
		color: #ffffff;
		font-size: 30upx;
		font-weight: 500;
		text-align: center;
		box-shadow: 5upx 5upx 10upx #4C00AF;
		margin-right: 20upx;
		padding: 10upx 30upx;
		height: 60upx;
		position: relative;
		top: 20upx;
	}

	.tixian {
		background: linear-gradient(10deg, #0046AE 0%, #0046AE 100%);
		border-radius: 30upx;
		color: #ffffff;
		font-size: 30upx;
		font-weight: 500;
		text-align: center;
		box-shadow: 5upx 5upx 10upx #0046AE;
		padding: 10upx 30upx;
		height: 60upx;
		position: relative;
		top: 20upx;
	}

	.juanzeng {
		width: 92%;
		margin: 30upx auto;
		padding: 20upx;
		background-color: #ffff;
		box-shadow: 5upx 5upx 10upx #f5f5f5;
		border-radius: 10upx;

	}

	.tuandui {
		color: #fff;
		padding-top: 60upx;

		image {
			width: 28upx;
			height: 30upx;
		}
	}

	.touxiang {
		width: 128upx;
		height: 128upx;
		padding: 60upx 30upx 0 60upx;
	}

	.touxiang1 {
		width: 100upx;
		height: 100upx;
	}

	.tudndui {
		background: url("data:image/png;base64,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") no-repeat;
		background-size: 100%;
		height: 280upx;
		padding: 0.1px;
		position: relative;
		margin: 0 auto;
		text-align: center;
	}

	.jiange {
		width: 100%;
		height: 20upx;
		background-color: #F7F7F7;
		margin-top: -2upx;
	}

	.bordersss {
		position: absolute;
		bottom: 0;
		width: 100%;
		padding: 20upx;
		color: #fff;
		// border-top: 2upx solid #FFFFFF;
	}


	.jibie {
		font-size: 36upx;
		font-family: Helvetica;
		color: #FFFFFF;
		padding-top: 60upx;
	}

	.jine {
		font-size: 92upx;
		font-family: LiGothicMed;
		color: #FFFFFF;
	}

	.houjia_dengji {
		width: 100upx;
		height: 50upx;
		margin-left: 20upx;
	}

	.mine-main-head {
		background: url("data:image/png;base64,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") no-repeat;
		width: 90%;
		background-size: 115% 150%;
		background-position: center;
		height: 400upx;
		padding: 0.1px;
		position: relative;
		margin: 0 auto;
		text-align: center;
	}
</style>
