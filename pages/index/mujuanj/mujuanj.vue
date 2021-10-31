<template>
	<view class="container">
		<u-no-network></u-no-network>
		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				{{ $t('recharge_currency') }}
			</view>
			<view class="czsl display_flex flex_wrap ">
				<view class="activeclass">USDT</view>
			</view>
		</view>
		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				{{ $t('recharge_quantity') }}
			</view>
			<view class="inputbox display_flex flex_between">
				<u-input style="width: 70%;" v-model="value1" type="number" :border="false" placeholder="请输入" />
				<view style="margin-left: 50upx;">
					USDT
				</view>
			</view>

		</view>



		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				{{ $t('recharge_QRcode') }}
			</view>
			<!-- @click="yulan(url)" -->
			<image class="erweima" :src="listss.donation_image_url" @click="saveImgToLocal(listss.donation_image_url)" mode=""></image>
			<view class="display_flex flex_start">
				<view class="color_222 font_size_28 over_one" style="max-width: 80%;margin-right: 20upx;">{{listss.donation_address}}</view>
				<view class="" style="color: #0046ae;" @click="copyTap(listss.donation_address)">{{ $t('copy') }}</view>
			</view>
		</view>

		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				{{ $t('upload_voucher') }}
			</view>
			<u-toast ref="uToast" />
			<u-upload ref="uUpload" name="image" max-count="1" :action="action"  @on-progress="imgprogress" :auto-upload="true" @on-success="success" @on-uploaded="imguploaded"></u-upload>
		</view>

		<view class="zhuyi">
			<view>{{ $t('donation_notes') }} </view>
			<view>{{ $t('donation_notes1') }} </view>
			<view>{{ $t('donation_notes2') }} </view>
			<view>{{ $t('donation_notes3') }} </view>
			<view>{{ $t('donation_notes4') }} </view>
			<view>{{ $t('donation_notes5') }} </view>
			<view>{{ $t('donation_notes6') }} </view>
			
		</view>
		<view class="btnss" @click="mujuan">
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
				value1: "",
				listss: '',
				imgurls: '',
			}
		},
		onShow() {
			this.withdrawaladdressadd()
		},
		methods: {
			imgprogress(res, index, lists, name) {
				this.$refs.uToast.show({
					title: this._i18n.t('Uploaded') + `${res.progress}%`,
					type: 'success',
				})
			},
			imguploaded(lists, name){
				console.log(lists, name)
			},
			success(data, index, lists, name) {
				console.log(data, index, lists, name)
				this.imgurls = data.data.image_path
			},
			async mujuan() {
				if (this.value1 == '') {
					this.$utils.toast(this._i18n.t('amount'))
					return false
				}
				if (Math.floor(this.value1) < 5) {
					this.$utils.toast(this._i18n.t('Minimum') + '5U')
					return false
				}
				if(this.imgurls == ''){
					this.$utils.toast(this._i18n.t('vouchers'));
					return false
				}

				let data = {
					image_path: this.imgurls,
					donation_value: this.value1,
					user_id: uni.getStorageSync('rescodeUserInfo').user_id,
					donation_address: this.listss.donation_address,
				}
				const res = await this.$appserve.donation(data);
				this.$utils.toast(this._i18n.t('Successful_transaction'));
				setTimeout(() => {
					uni.navigateBack({
						delta: 1
					})
				}, 1000)
			},

			async withdrawaladdressadd() {
				let data = {}
				const res = await this.$appserve.donationinfo(data);
				//console.log(res)
				this.listss = res.data

			},

			saveImgToLocal(e) {
				let _self = this
				uni.showModal({
					title: _self._i18n.t('Tips'),
					content: _self._i18n.t('save_album'),
					success: function(res) {
						if (res.confirm) {
							uni.downloadFile({
								url: e, //图片地址
								success: (res) => {
									if (res.statusCode === 200) {
										uni.saveImageToPhotosAlbum({
											filePath: res.tempFilePath,
											success: function() {
												uni.showToast({
													title: _self._i18n.t('save_album'),
													icon: "none"
												});
											},
											fail: function() {
												uni.showToast({
													title:  _self._i18n.t('Failed_to_save'),
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
				var _self = this
				uni.setClipboardData({
					data: hash,
					success() {
						uni.showToast({
							title: _self._i18n.t('Reproduction_success'),
						});
					},
					fail() {
						uni.showToast({
							title: _self._i18n.t('Copy_failure'),
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
