<template>
	<view class="index">
		<!-- 标题 -->
		<navBar title="我的邀请码" color="#fff" v-if="navShow"></navBar>
		<view class="mine-code">
			<image class="mine-codeimg" src="/static/img/bg1.png" mode="scaleToFill"></image>
			<view class="mine-code-qr-bg">
				<view class="mine-code-top-box">
					<view class="mine-code-num">
						<image src="/static/img/hader.png" style="" mode=""></image>
						<view>{{userinfo.user_nick_name}}</view>
					</view>
					<view class="mine-code-img-box">
						<image :src="qrImg" class="mine-code-qrcode" />
					</view>
					
					<view class="mine-code-share">
						<!-- @tap="download" 保存二维码 -->
						<view class="mine-code-share1">乐施会</view>
						我的邀请码:{{userinfo.user_invitation_code}}
					</view>
				</view>
			</view>
		</view>
		<canvas canvas-id="myCanvas" :style="
        'width:' +
        windowWidth +
        'px;height:' +
        windowHeight +
        'px;position:absolute;top:-9999px;left:-9999px;'
      " />
	</view>
</template>

<script>
	import navBar from "@/components/navBar/index.vue";
	import QR from "@/common/wxqrcode.js";
	export default {
		components: {
			navBar,
		},
		data() {
			return {
				qrCode: "", // 二维码
				qrImg: "", // 二维码图片
				windowHeight: "",
				windowWidth: "",
				navShow: true,
				userinfo:'',
				
			};
		},
		onLoad() {
			this.userdetail()
		},
		onPullDownRefresh() {
			this.myInvitationCode();
		},
		// 上拉加载
		onReachBottom() {
			// //console.log('onReachBottom');
		},
		onShow() {
			
			// this.qrCodeImg('onReachBottom');
		},
		mounted() {
			var _me = this;
			uni.getSystemInfo({
				//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高
				success: function(res) {
					_me.windowHeight = res.windowHeight;
					_me.windowWidth = res.windowWidth;
					// //console.log('手机屏幕高度为' + _me.windowHeight);
					// //console.log('手机屏幕高度为' + _me.windowWidth);
				},
			});
		},
		// 离开页面关闭软键盘
		onUnload() {
			// //console.log('离开了当前页面');
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		},
		methods: {
			// 用户详情
			async userdetail() {
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.userdetail(data);
				//console.log(res)
				this.userinfo = res.data
				this.qrCodeImg('http://yaoqing.leshichina.net/#/?cordNum='+this.userinfo.user_invitation_code);
			
			},
			// 分享注册网址
			async sharelogin(inviteCode) {
				// const data = await this.$mineServices.sharelogin({
				// 	inviteCode
				// })
				// // //console.log(data)
				// this.qrCodeImg(data)
			},
			// 我的邀请码
			async myInvitationCode() {
				const data = await this.$mineServices.myInvitationCode();
				this.qrCode = data.invite;


				// this.$imgUrl + "h5/#/?cordNum=" + this.qrCode
				this.qrCodeImg('http://yaoqing.leshichina.net/#/?cordNum='+this.userinfo.user_invitation_code);
				// this.sharelogin(this.qrCode);
			},
			clickCopy() {
				this.copyTap(this.qrCode);
			},
			qrCodeImg(code) {
				this.qrImg = QR.createQrCodeImg(code, {
					typeNumber: 4,
					size: parseInt(300),
				});
			},
			// 复制hash
			copyTap(hash) {
				this.$preventReClick("copyTap", () => {
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
				});
			},
			download() {
				// const _me = this;
				uni.showLoading({
					title: "保存中",
					mask: true,
				});
				this.navShow = false;
				let that = this;
				setTimeout(() => {
					let pages = getCurrentPages();
					let page = pages[pages.length - 1];
					let bitmap = null;
					let currentWebview = page.$getAppWebview();
					bitmap = new plus.nativeObj.Bitmap("amway_img");
					// 将webview内容绘制到Bitmap对象中
					currentWebview.draw(
						bitmap,
						function() {
							bitmap.save(
								"_doc/a.jpg", {},
								function(i) {
									uni.hideLoading();
									that.image = i.target;
									//console.log(that.image, "------------");
									uni.saveImageToPhotosAlbum({
										filePath: i.target,
										success: function(ress) {
											that.navShow = true;
											bitmap.clear(); //销毁Bitmap图片
											that.$utils.toast("保存邀请码至相册成功");
										},
									});
								},
								function(e) {
									that.$utils.toast("保存二维码失败");
									//console.log("保存图片失败：" + JSON.stringify(e));
								}
							);
						},
						function(e) {
							that.$utils.toast("截屏绘制图片失败");
							//console.log("截屏绘制图片失败：" + JSON.stringify(e));
						}
					);
				}, 1000);

			},
		},
	};
</script>

<style lang="less" scoped>
	.mine-code-num {
		image {
			width: 150upx;
			height: 150upx;
			padding-top: 30upx;
		}

		view {
			font-size: 28upx;
			color: #3e3e3e;
			line-height: 60upx;
		}
	}

	.mine-code {
		width: 100%;
		height: 100vh;
		position: relative;
	}

	.mine-codeimg {
		width: 100%;
		height: 100vh;
	}

	.mine-code-bg {
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
	}

	.mine-code-qr-bg {
		background-size: 100%;
		width: 630upx;
		height: 888upx;
		margin: 310upx auto 0;
		position: absolute;
		top: 0;
		left: calc((100% - 630upx) / 2);
		background-color: #fff;
		border-radius: 40upx;
	}

	.mine-code-top-box {
		text-align: center;
	}

	.mine-code-num {
		font-size: 52upx !important;
	}

	.mine-code-copy {
		margin-left: 40upx;
		font-size: 32upx;
		color: #7a73ff;
	}

	.mine-code-img-box {
		text-align: center;
		position: relative;
	}

	.mine-code-qrcode {
		width: 400upx;
		height: 400upx;
		margin: 30upx auto;
		position: absolute;
		left: calc((100% - 400upx) / 2);
		top: 200upx;
	}
	.mine-code-share1 {
		width: 480upx;
		height: 88upx;
		line-height: 88upx;
		color: #3e3e3e;
		text-align: center;
		font-size: 30upx;
		
	}
	.mine-code-share {
		width: 480upx;
		height: 88upx;
		margin: 640upx auto 0;
		line-height: 88upx;
		font-size: 40upx;
		color: #fff;
		text-align: center;
		color: #0046AE;
		
	}


	.mine-code-num {
		height: 40upx;
		font-size: 28upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(50, 51, 0, 1);
		line-height: 40upx;
		margin-top: 4upx;
	}
</style>
