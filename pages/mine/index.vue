<template>
	<view class="">
		<!-- 个人信息 -->
		<view class="mine-main-head">
			<view class="mine-main-title">
			</view>
			<view class="mine-main-head-info">
				<image class="mine-main-head-img" src="/static/img/hader.png" />
				<view class="mine-main-head-info-box">
					<view>
						<text class="mine-main-head-info-name">{{userinfo?(userinfo.user_nick_name?userinfo.user_nick_name:'暂无昵称'):'暂无昵称'}}</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 菜单 -->
		<view class="" style="height: 450upx;">
			<view class="mine-main-menu-list">
				<view class="mine-main-menu-box">
					<view class="mine-main-menu-item" v-for="(item,index) in menuList" :key="index" @tap="clickMenu(item.url)">
						<image class="mine-main-menu-icon" :src="item.icon" />
						<text class="mine-main-menu-content">{{item.name}}</text>
						<view class="uni-flex uni-flex-end uni-align-center">
							<image class="mine-main-menu-back" src="/static/img/images/aa.png" />
						</view>
					</view>

				</view>
			</view>
		</view>

		<view class="tuichus" @click="tui">
			退出登录
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuList: [{
						"id": 1,
						"icon": "/static/img/w1.png",
						"name": "邀请好友",
						"url": "/pages/mine/InviteFriends/InviteFriends",
					},
					{
						"id": 2,
						"icon": "/static/img/w2.png",
						"name": "修改密码",
						"url": "/pages/mine/ChangePassword/ChangePassword",
					},
					{
						"id": 3,
						"icon": "/static/img/w3.png",
						"name": "交易密码",
						"url": "/pages/mine/TransactionCode/TransactionCode",
					},
					{
						"id": 4,
						"icon": "/static/img/w4.png",
						"name": "留言板",
						"url": "/pages/mine/MessageBoard/MessageBoard",
					},
					{
						"id": 5,
						"icon": "/static/img/w5.png",
						"name": "添加常用地址",
						"url": "/pages/mine/dizhi/dizhi",
					},

				],
				userinfo: ''
			}
		},

		onShow() {
			this.userdetail()
		},
		methods: {
			tui() {
				uni.showModal({
					title: '退出登录',
					content: '您确定要退出当前账户的登录吗？',
					cancelColor: '#666',
					confirmColor: '#0046AE',
					success: (res) => {
						if (res.confirm) {
							//console.log('用户点击确定');
							this.userlogout()
							uni.reLaunch({
								url: '/pages/login/login'
							})
						} else if (res.cancel) {
							//console.log('用户点击取消');
						}
					}
				});
			},

			// 初始化方法
			async userlogout() {
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.userlogout(data);

			},
			// 用户详情
			async userdetail() {
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.userdetail(data);
				//console.log(res)
				this.userinfo = res.data

			},

			clickMenu(url) {
				if(url == '/pages/mine/TransactionCode/TransactionCode'){
					if(this.userinfo.transactionPasswordFlag == 1){
						uni.navigateTo({
							url: url
						})
					}else{
						uni.navigateTo({
							url: "/pages/mine/tc2/tc2"
						})
					}
					return false
				}
				uni.navigateTo({
					url: url
				})
			}

		}
	}
</script>
<style>
	page {
		background-color: #fff !important;
	}
</style>
<style lang="less" scoped>
	.tuichus {
		color: #0046AE;
		font-weight: 600;
		width: 80%;
		background-color: #fff;
		line-height: 80upx;
		height: 80upx;
		border: 2upx solid #0046AE;
		border-radius: 40upx;
		text-align: center;
		margin: 200upx auto 0;

	}

	.houjia_dengji {
		width: 100upx;
		height: 50upx;
		margin-left: 20upx;
	}

	.mine-main-head {
		background: url("data:image/png;base64,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") no-repeat;
		width: 100%;
		background-size: 100%;
		height: 400upx;
		padding: 0.1px;
		position: relative;
	}

	.mine-main-head-icon {
		width: 100%;
		height: 384upx;
		position: absolute;
		z-index: -1;
		top: 0;
		left: 0;
		border-bottom-left-radius: 90upx;
	}

	.mine-main-title {
		height: 40upx;
		margin-top: 34upx;
	}

	.mine-main-title-icon {
		height: 30upx;
		width: 44upx;
	}

	.mine-main-head-info {
		padding: 20upx 40upx 0 30upx;
		margin: 0 auto;
		text-align: center;
	}

	.mine-main-head-img {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}

	.mine-main-head-info-box {
		padding-top: 10upx;
	}

	.mine-main-head-info-name {
		font-size: 32upx;
		color: #FFF;
		font-weight: 500;
	}

	.mine-main-head-info-level {
		vertical-align: middle;
		margin-left: 20upx;
		background: #FFF;
		border-radius: 4upx;
		padding: 2upx 8upx;
		font-size: 20upx;
		color: #8972FF;
	}

	.mine-main-head-info-account {
		margin-top: 20upx;
		font-size: 24upx;
		color: #FFFFFF;
	}

	.mine-main-head-info-main {
		width: 100%;
		position: absolute;
		top: 280upx;
		padding: 0 30upx;
	}

	.mine-main-head-info-item {
		padding: 0 30upx;
		width: 100%;
		height: 150upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 8upx 16upx 0px rgba(0, 0, 0, 0.1);
		border-radius: 12upx;
		margin-top: 20upx;
	}

	.mine-main-head-info-item-icon {
		width: 16upx;
		height: 16upx;
		margin-right: 10upx;
	}

	.mine-main-head-info-item>view {
		width: 100%;
		margin-top: 20upx;
	}

	.mine-main-head-info-item>view:first-of-type {
		margin-top: 0;
	}

	.mine-main-head-info-item-name {
		height: 40upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(80, 81, 255, 1);
		line-height: 40upx;
	}

	.mine-main-head-info-item-content {
		height: 40upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(255, 131, 26, 1);
		line-height: 40upx;
	}

	.mine-main-menu-list {
		background: #fff;
		margin-top: -26upx;
		border-top-left-radius: 30upx;
		border-top-right-radius: 30upx;
		z-index: 999;
		position: absolute;
		padding-top: 40upx;
		width: 100%;
	}

	.mine-main-menu-item {
		padding: 0 30upx;
		height: 106upx;
		display: flex;
		align-items: center;
		border-bottom: 1upx solid #EEE;
		background: #FFF;
	}

	// .mine-main-menu-item:first-of-type {
	// 	border-radius: 24upx 24upx 0 0;
	// }
	.mine-main-menu-icon {
		width: 64upx;
		height: 64upx;
	}

	.mine-main-menu-content {
		flex: 1;
		height: 44upx;
		margin: 0 10upx;
		font-size: 32upx;
		color: #333;
		line-height: 44upx;
	}

	.mine-main-menu-content2 {
		color: rgba(153, 153, 153, 1);
	}

	.mine-main-menu-back {
		width: 20upx;
		height: 36upx;
	}

	.mb20 {
		margin-bottom: 20upx;
	}
</style>
