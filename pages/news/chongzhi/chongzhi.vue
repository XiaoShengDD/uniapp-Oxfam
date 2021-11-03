<template>
	<view class="container">
		<u-no-network></u-no-network>
		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				{{ $t('recharge_currency') }}
			</view>
			<view class="czsl display_flex flex_wrap ">
				<view class="activeclass">{{Bid.coin_name}}</view>
			</view>
		</view>
		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				{{ $t('recharge_quantity') }}
			</view>
			<view class="czsl display_flex flex_wrap ">
				<view class="" :class="{'activeclass':actions==100}" @click="actions = 100">100U</view>
				<view :class="{'activeclass':actions==300}" @click="actions = 300">300U</view>
				<view :class="{'activeclass':actions==500}" @click="actions = 500">500U</view>
				<view :class="{'activeclass':actions==1000}" @click="actions = 1000">1000U</view>
				<view :class="{'activeclass':actions==10000}" @click="actions = 10000" v-if="userinfo.user_cion_switch != 'OFF'">10000U</view>
				<view class="zanweikaofang" v-else>您暂无此权益</view>
			</view>

		</view>



		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				{{ $t('recharge_QRcode') }}
			</view>
			<!-- @click="yulan(url)" -->
			<image class="erweima" :src="dizhi.recharge_image_url" @click="saveImgToLocal(dizhi.recharge_image_url)" mode=""></image>
			<view class="display_flex flex_start">
				<view class="color_222 font_size_28 over_one" style="max-width: 80%;margin-right: 20upx;">{{dizhi.recharge_address}}</view>
				<view class="" style="color: #0046ae;" @click="copyTap(dizhi.recharge_address)">复制</view>
			</view>
		</view>

		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				{{ $t('upload_voucher') }}
			</view>
			<u-toast ref="uToast" />
			<u-upload ref="uUpload" name="image" max-count="1" :action="action" :auto-upload="true" @on-progress="imgprogress"
			 @on-uploaded="imguploaded" @on-success="success"></u-upload>
		</view>

		<view class="zhuyi">
		
			<view>{{ $t('recharge_notes') }}</view>
			<view>{{ $t('donation_notes1') }}</view>
			<view>{{ $t('donation_notes2') }}</view>
			<view>{{ $t('donation_notes3') }}</view>
			<view>{{ $t('donation_notes4') }}</view>
			<view>{{ $t('donation_notes5') }}</view>
			<view>{{ $t('donation_notes6') }}</view>
			
		</view>
		<view class="btnss" @click="chongzhi">
				{{ $t('recharge_now') }}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				action: this.$up_img,
				actions: 100,
				userinfo: '',
				dizhi: {},
				imgurls: '',
				Bid: '',
				progress: 0
			}
		},
		onLoad(e) {
			this.Bid = JSON.parse(e.id)
			//console.log(this.Bid)
		},
		onShow() {
			this.userdetail()
			this.rechargeinfo()
		},

		methods: {
			imgprogress(res, index, lists, name) {
				this.progress = res.progress
				this.$refs.uToast.show({
					title: `已上传${res.progress}%`,
					type: 'success',
				})
			},
			async chongzhi() {
				if(this.imgurls == ''){
					this.$utils.toast("请上传凭证");
					return false
				}
				let data = {
					"user_id": uni.getStorageSync('rescodeUserInfo').user_id,
					"coin_id": this.Bid.coin_id,
					"wallet_id": this.Bid.wallet_id,
					"image_path": this.imgurls,
					"recharge_value": this.actions,
					"recharge_address": this.dizhi.recharge_address
				}
				const res = await this.$appserve.usdtrecharge(data);
				this.$utils.toast("交易成功");
				setTimeout(() => {
					uni.navigateBack({
						delta: 1
					})
				}, 1000)
			},

			imguploaded(lists, name) {
				console.log(lists, name)
			},
			success(data, index, lists, name) {
				// console.log(data, index, lists, name)
				this.imgurls = data.data.image_path
			},
			// 初始化方法
			async rechargeinfo() {
				let data = {

				}
				const res = await this.$appserve.rechargeinfo(data);
				//console.log(res)
				this.dizhi = res.data

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

			saveImgToLocal(e) {
				let _self = this
				uni.showModal({
					title: '提示',
					content: '确定保存到相册吗',
					success: function(res) {
						if (res.confirm) {
							uni.downloadFile({
								url: e, //图片地址
								success: (res) => {
									console.log(res)
									if (res.statusCode === 200) {
										uni.saveImageToPhotosAlbum({
											filePath: res.tempFilePath,
											success: function() {
												uni.showToast({
													title: "保存成功",
													icon: "none"
												});
											},
											fail: function() {
												uni.showToast({
													title: "保存失败",
													icon: "none"
												});
											}
										});
									}
								}
							})


						} else if (res.cancel) {

						}
					}
				});
			},
			// 复制
			copyTap(hash) {
				// #ifdef APP-PLUS
				uni.setClipboardData({
					data: hash,
					success() {
						uni.showToast({
							title: "复制成功",
						});
					},
					fail() {
						uni.showToast({
							title: "复制失败",
							icon: "none",
						});
					},
				});
				// #endif
			},
		}
	}
</script>
<style>
	page {
		background-color: #fff !important;
	}
</style>
<style scoped>
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
