<template>
	<view class="container">
		<u-no-network></u-no-network>
		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				募捐币种
			</view>
			<view class="czsl display_flex flex_wrap ">
				<view class="activeclass">USDT</view>
			</view>
		</view>
		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				募捐数值
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
				募捐二维码
			</view>
			<!-- @click="yulan(url)" -->
			<image class="erweima" :src="listss.donation_image_url" @click="saveImgToLocal(listss.donation_image_url)" mode=""></image>
			<view class="display_flex flex_start">
				<view class="color_222 font_size_28 over_one" style="max-width: 80%;margin-right: 20upx;">{{listss.donation_address}}</view>
				<view class="" style="color: #0046ae;" @click="copyTap(listss.donation_address)">复制</view>
			</view>
		</view>

		<view class="box">
			<view class="shangchaun font_size_32 color_222">
				上传凭证
			</view>
			<u-toast ref="uToast" />
			<u-upload ref="uUpload" name="image" max-count="1" :action="action"  @on-progress="imgprogress" :auto-upload="true" @on-success="success" @on-uploaded="imguploaded"></u-upload>
		</view>

		<view class="zhuyi">
			<view>募捐注意事项 </view>
			<view>1.请确认充币地址是TRC20型T开头的地址。 </view>
			<view>2.最小募捐金额5U。小于最小充币金额的将不会到账且无法退回。 </view>
			<view>3.请勿向上述地址募捐任何非USDT资产（链类型：TRC20）,
				否则资产不可找回。 </view>
			<view>4.您的募捐地址不会经常改变，可以重复募捐，如有改变，将会在
				募捐页面给予通知。 </view>
			<view>5.请务必确认您的电脑，手机及浏览器安全，防止信息泄露或被
				篡改。</view>
			<view>6.感谢您的善举，愿您一生平安。</view>
		</view>
		<view class="btnss" @click="mujuan">
			立即募捐
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
					title: `已上传${res.progress}%`,
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
					this.$utils.toast('请输入金额')
					return false
				}
				if (Math.floor(this.value1) < 5) {
					this.$utils.toast('最小募捐金额5U')
					return false
				}
				if(this.imgurls == ''){
					this.$utils.toast("请上传凭证");
					return false
				}

				let data = {
					image_path: this.imgurls,
					donation_value: this.value1,
					user_id: uni.getStorageSync('rescodeUserInfo').user_id,
					donation_address: this.listss.donation_address,
				}
				const res = await this.$appserve.donation(data);
				this.$utils.toast("交易成功");
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
					title: '提示',
					content: '确定保存到相册吗',
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
