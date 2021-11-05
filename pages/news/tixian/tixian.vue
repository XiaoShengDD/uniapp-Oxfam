<template>
	<view class="container">
		<u-no-network></u-no-network>
		<view class="inputbox display_flex flex_between">
			<u-input style="width: 70%;" v-model="value1" :type="type" :border="false" :placeholder="$t('address_placeholder')" />
			<view style="margin-left: 20upx;" @click="changyong(1)" v-if="list.length>0">
				{{ $t('usual_address') }}
			</view>
			<view style="margin-left: 20upx;" @click="changyong(4)" v-if="list.length==0">
				{{ $t('Add_common_address') }}
			</view>
		</view>
		<u-popup v-model="show" mode="center" width="500rpx" height="400upx">
			<u-radio-group v-model="value" width="100%">
				<u-radio active-color="#0046AE" @change="radioChange(item)" v-for="(item, index) in list" :key="index" :name="item.withdrawal_address_id">
					<view style="word-wrap:break-word!important;width: 400upx;" class="over_one">{{item.withdrawal_address_value}}</view>
				</u-radio>
			</u-radio-group>
		</u-popup>
		<view class="inputbox display_flex flex_between">
			<u-input v-model="value2" :type="type" :border="false" :placeholder="$t('quota_placeholder')" />
			<view class="" @click="changyong(2)">
				{{ $t('all') }}
			</view>
		</view>
		<view class="inputbox display_flex flex_between">
			<u-input v-model="value3" type="password" :border="false" :placeholder="$t('password_placeholder')" />
			<view class="" @click="changyong(3)">
				{{ $t('forgot_payment_password') }}
			</view>
		</view>

		<view class="zhuyi" v-if="Bid.coin_name == 'USDT'">
			<view>{{ $t('USDT_notes') }}</view>
			<view>{{ $t('USDT_notes1') }}</view>
			<view>{{ $t('USDT_notes2') }}</view>
			<view>{{ $t('USDT_notes3') }}</view>
			<view>{{ $t('USDT_notes4') }}</view>
			<view>{{ $t('donation_notes5') }}</view>
			<view>{{ $t('USDT_notes6') }}</view>
		</view>
	<!-- 	<view class="zhuyi" v-if="Bid.coin_name == 'DOGZ'">
			<view>DOGZ提现注意事项 </view>
			<view>1.请准确输入您的提现地址。 </view>
			<view>2.无提现手续费。</view>
			<view>3.最少提币金额10万DOGZ。小于最小提币金额的将不会到账且无法退回。 </view>
			<view>4，请务必确认目标地址是否存在且被激活，否则将会导致提币失败,且资产不可找回。 </view>
			<view>5.请务必确认您的电脑，手机及浏览器安全，防止信息泄露或被篡改。</view>
		</view> -->
		<view class="zhuyi" v-if="Bid.coin_name == 'SHIB'">
			<view>{{ $t('SHIB_notes') }}</view>
			<view>{{ $t('SHIB_notes1') }}</view>
			<view>{{ $t('SHIB_notes2') }}</view>
			<view>{{ $t('SHIB_notes3') }}</view>
			<view>{{ $t('USDT_notes4') }}</view>
			<view>{{ $t('donation_notes5') }}</view>
			<view>{{ $t('USDT_notes6') }}</view>

		</view>
		<view class="zhuyi" v-if="Bid.coin_name == 'NFT'">
			<view>{{ $t('NFT_notes') }}</view>
			<view>{{ $t('USDT_notes1') }}</view>
			<view>{{ $t('NFT_notes2') }}</view>
			<view>{{ $t('NFT_notes3') }}</view>
			<view>{{ $t('USDT_notes4') }}</view>
			<view>{{ $t('donation_notes5') }}</view>
			<view>{{ $t('USDT_notes6') }}</view>
		</view>
		<view class="btnss" @click="tixian">
			{{$t('withdraw')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: '',
				Bid: '',
				value1: '',
				value2: '',
				value3: '',
				type: 'text',
				border: true,
				show: false,
				list: [],
			}
		},
		onShow() {
			this.userdetail()
			this.withdrawaladdressadd()
			this.value1= ''
			this.value2= ''
			this.value3= ''
				
		},
		onLoad(e) {
			this.Bid = JSON.parse(e.id)
			//console.log(this.Bid)

		},
		methods: {
			// 初始化方法
			async tixian() {
				
				var d = new Date().getDay();
				
				if(d != 4 && d != 5){
					this.$utils.toast(this._i18n.t('USDT_notes_t'))
					return false
				}
				
				if (this.value1 == "") {
					this.$utils.toast(this._i18n.t('text4'))
					return false
				}
				
				if (this.value2 == "") {
					this.$utils.toast(this._i18n.t('amount'))
					return false
				}
				
				if(this.Bid.coin_name == "USDT"){
					if(this.value2 < 100){
						this.$utils.toast(this._i18n.t('text5'));
						return false
					}		
				}
				
				if(this.Bid.coin_name == "SHIB"){
					if(this.value2 < 1000000){
						this.$utils.toast(this._i18n.t('text6'));
						return false
					}	
				}
				
				if(this.Bid.coin_name == "NFT"){
					if(this.value2 < 100000){
						this.$utils.toast(this._i18n.t('text7'));
						return false
					}	
				}
				
				
				if (this.value3 == "") {
					this.$utils.toast(this._i18n.t('transaction_password'))
					return false
				}
				let data = {
					"user_id": uni.getStorageSync('rescodeUserInfo').user_id,
					"coin_id": this.Bid.coin_id,
					"wallet_id": this.Bid.wallet_id,
					"withdrawal_value": this.value2,
					"withdrawal_address": this.value1,
					"user_transaction_password": this.value3
				}
				const res = await this.$appserve.withdrawal(data);
				this.$utils.toast(this._i18n.t('text9'));
				setTimeout(() => {
					uni.navigateBack({
						delta:1
					})
				}, 1000)

			},



			async userdetail() {
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				var that = this
				const res = await this.$appserve.userdetail(data);
				if (res.data.transactionPasswordFlag == 0) {
					uni.showModal({
						title: that._i18n.t('Tips'),
						content: that._i18n.t('text10'),
						showCancel: false,
						confirmText: that._i18n.t('text11'),
						success: function(res) {
							if (res.confirm) {
								uni.navigateTo({
									url: "/pages/mine/tc2/tc2"
								})
							} else if (res.cancel) {
								// //console.log('用户点击取消');
							}
						}
					});
				}

			},


			radioChange(item) {
				// if (this.list.length == 1) {
				// 	this.value1 = this.list[0].withdrawal_address_value
				// }
				this.show = false
				this.value1 = item.withdrawal_address_value
			},
			// radioGroupChange(e) {
			// 	if (this.list.length == 1) {
			// 		this.value1 = this.list[0].withdrawal_address_value
			// 	}
			// 	this.show = false
			// 	this.value1 = e
			// },
			// 初始化方法
			async withdrawaladdressadd() {
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.withdrawaladdress(data);
				//console.log(res)
				this.list = res.data

			},
			changyong(type) {
				if (type == 1) {
					if (this.list.length == 1) {
						this.value1 = this.list[0].withdrawal_address_value
					} else {
						this.show = true
					}

				} else if (type == 2) {
					this.value2 = this.Bid.coin_value
				} else if (type == 3) {
					uni.navigateTo({
						url: '/pages/mine/ChangePassword/ChangePassword?openId=1'
					})
				} else {
					uni.navigateTo({
						url: '/pages/mine/dizhi/dizhi'
					})
				}

			},
		}

	}
</script>
<style>
	page {
		background-color: #fff !important;
		background: #fff !important;
	}

	.u-radio-group {
		padding: 30upx !important;
	}

	.uni-scroll-view {
		border-radius: 30upx !important;
	}
</style>
<style scoped>
	.inputbox {
		border-bottom: 2upx solid #eee;
		line-height: 70upx;
	}

	.zanweikaofang {
		background-color: rgba(0, 0, 0, .7) !important;
		color: #FFFFFF !important;
	}

	.czsl view {
		width: 190upx;
		height: 80upx;
		background: #F5F5F5;
		border-radius: 4px;
		border: 1px solid #DADADA;
		text-align: center;
		line-height: 80upx;
		color: #666;
		margin: 20upx 30upx 30upx 0;
	}

	.activeclass {
		background: #0046ae !important;
		color: #fff !important;
		border: 1px solid #0046ae !important;
	}

	.container {
		padding: 30upx;
	}

	.erweima {
		width: 220upx;
		height: 220upx;
	}

	.zhuyi {
		font-size: 24upx;
		color: #666666;
		margin-bottom: 30upx;
	}

	.zhuyi view {
		margin-top: 20upx;
	}

	.btnss {
		margin-top: 60upx;
	}

	.box {
		margin: 40upx 0;
	}

	.box .shangchaun {
		margin-bottom: 20upx;
	}
</style>
