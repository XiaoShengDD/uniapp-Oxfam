<template>
	<view class="">
		<view class="login_phone">
			<u-no-network></u-no-network>
			<view class="login-phone-main">
				<view class="login-phone-from display_flex align_item">
					<view class="phone">{{ $t('usual_address') }}：</view>
					<input class="login-phone-from-input" type="text"  placeholder="请输入常用地址" v-model="password" />
				</view>
			</view>
			<view class="login-phone-btns" @click="userdetail">
				<view class="login-phone-btn">{{ $t('save') }}</view>
			</view>
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				password: '',
				title: '',
				transactionPasswordFlag:0
			};
		},
		onLoad() {
			// transactionPasswordFlag 1的话是设置了，0是没设置
		},
		
		
		methods: {
			// 用户详情
			async userdetail() {
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id,
					withdrawal_address_value:this.password
				}
				const res = await this.$appserve.withdrawaladdressadd(data);
				this.$utils.toast(this._i18n.t('Added_successfully'));
				setTimeout(() => {
					uni.navigateBack({
						delta:1
					})
				}, 1000)
			
			},
			
			
			// 初始化方法
			async resetPassword() {
				
				if (this.password =='') {
					this.$utils.toast(this._i18n.t('transaction_password'), 'top');
					return
				}
				let data = {
					user_transaction_password: this.password,
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.settransactionpassword(data);
				this.$utils.toast(res.msg);
				setTimeout(() => {
					this.userdetail()
				}, 1000)
			},
			gengai(){
				uni.redirectTo({
					url:'/pages/mine/ChangePassword/ChangePassword?openId=1'
				})
			}
		}
	};
</script>

<style>
	page {
		background: #ffffff !important;
	}
	.slot-content {
		height: 450rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		margin: 30rpx 0;
	}
</style>
<style scoped >
	.btnss{
		width: 80%;
		margin: 60upx auto;
	}
	.bosxImg{
		width: 200upx;
		height: 200upx;
		
	}
	.boxs{
		width: 100%;
		text-align: center;
		padding: 30upx 0;
	}
	.login_phone {
		width: 100%;
		background: #ffffff !important;
	}

	.login-phone-main {
		background-color: rgba(255, 255, 255, 1);
		width: 90%;
		margin: 0 auto;
	}

	.login-phone-from {
		width: 100%;
		height: 106rpx;
		border-bottom: 2upx solid #eeeeee;
		padding: 0 30upx;
	}



	.login-phone-from-input {
		flex: 1;
		height: 36upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFangSC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		line-height: 36upx;
	}

	.login-phone-from-btn {
		height: 56upx;
		font-size: 26upx;
		font-family: PingFangSC-Regular, PingFangSC;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 36upx;
		background-color:#0046AE;
		padding: 10upx 20upx;
	}

	.login-phone-btns {
		width: 100%;
		height: 74rpx;
	}

	.login-phone-btn {
		margin: 206rpx auto 0;
		height: 80rpx;
		width: 584rpx;
		background: linear-gradient(10deg,#0046AE 0%,#0046AE 100%);
		border-radius: 44upx;
		color: #ffffff;
		font-size: 34upx;
		font-weight: 500;
		text-align: center;
		line-height: 80upx;
	}

	.u-checkbox-group {
		margin: 22rpx 0 0 30rpx;
		font-size: 24rpx !important;
	}

	.u-checkbox-group span {
		color: #464ed9;
		margin-left: 5rpx;
	}

	>>>.u-checkbox__icon-wrap {
		width: 22rpx !important;
		height: 22rpx !important;
	}

	>>>.u-model__content__message {
		text-align: left;
	}

	>>>.u-model__footer {
		width: 484rpx;
		height: 150rpx;
		margin: auto;
	}

	>>>.u-model__footer__button {
		height: 74rpx;
		background: #464ed9;
		color: #FFFFFF !important;
		font-size: 24rpx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
