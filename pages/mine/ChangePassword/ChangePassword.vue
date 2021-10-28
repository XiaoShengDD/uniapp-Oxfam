<template>
	<view class="login_phone">
		<u-no-network></u-no-network>
		<view class="login-phone-main">
			<view class="login-phone-from display_flex align_item">
				<view class="phone">手机号：</view>
				<input class="login-phone-from-input" disabled="" type="number" maxlength="11" placeholder="请输入手机号" v-model="mobile" />
			</view>
			<view class="login-phone-from display_flex align_item">
				<view class="pas">验证码：</view>
				<input class="login-phone-from-input" type="text" maxlength="8" placeholder="请输入验证码" v-model="code" />
				<view class="login-phone-from-btn" v-if="nums == 60" @click="getVerCode">{{ codeText }}</view>
				<view class="login-phone-from-btn" v-else>{{ codeText }}</view>
			</view>
			<view class="login-phone-from display_flex align_item">
				<view class="phone">新密码：</view>
				<input class="login-phone-from-input" type="password" maxlength="8" placeholder="请输入新密码" v-model="password" />
			</view>
			<view class="login-phone-from display_flex align_item">
				<view class="phone">确认密码：</view>
				<input class="login-phone-from-input" type="password" maxlength="8" placeholder="请再次输入密码" v-model="newpassword" />
			</view>

		</view>
		<view class="login-phone-btns" v-if="openId == 1" @click="resetPassword(1)">
			<view class="login-phone-btn">保存</view>
		</view>
		<view class="login-phone-btns" v-else @click="resetPassword(2)">
			<view class="login-phone-btn">保存</view>
		</view>




	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneDataLength: false,
				isDuanxinShow: false,
				verCode: '',
				checked: false,
				password: '',
				newpassword: '',
				mobile: '',
				code: '',
				codeText: '获取验证码',
				nums: 60,
				timer: null,
				openId: '',
				isGet: true,
				show: false,
				content: '',
				title: '',
				userinfo: '',
				task_id:'',
				

			};
		},
		onLoad(e) {
			this.openId = e.openId;
			this.userdetail()
			if (e.openId == 1) {
				uni.setNavigationBarTitle({
					title: '修改交易密码'
				})
			} else {
				uni.setNavigationBarTitle({
					title: '修改登录密码'
				})
			}
		},
		methods: {
			// 用户详情
			async userdetail() {
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.userdetail(data);
				//console.log(res)
				this.mobile = res.data.user_mobile_phone
				this.userinfo = res.data

			},
			getVerCode() {
				//获取验证码
				if (this.mobile.length != 11) {
					this.$utils.toast('手机号不正确', 'top');
					return false;
				}
				this.Captcha()
			},
			// 验证码子组件返回
			async Captcha() {
				this.$utils.toast('短信发送成功', 'top');
				this.getCode()
			},


			// 初始化方法
			async resetPassword(type) {

				if (this.password != this.newpassword) {
					this.$utils.toast('两次密码不一致', 'top');
					return
				}
				if (type == 1) {
					let data = {
						"user_mobile_phone": this.mobile,
						"task_id": this.task_id,
						"sms_code": this.code,
						"user_id": uni.getStorageSync('rescodeUserInfo').user_id,
						"user_transaction_password": this.password
					}

					const res = await this.$appserve.transactionpassword(data);
					this.$utils.toast('修改成功');
					setTimeout(() => {
						uni.navigateBack({
							delta:1
						})
					}, 1000)
				} else {
					let data = {
						"user_mobile_phone": this.mobile,
						"task_id": this.task_id,
						"sms_code": this.code,
						"user_id": uni.getStorageSync('rescodeUserInfo').user_id,
						"user_login_password": this.password
					}

					const res = await this.$appserve.loginpassword(data);
					this.$utils.toast('修改成功');
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/login/login'
						})
					}, 1000)
				}

			},

			async getCode() {
				//、短信类型（0注册/1重置密码/2快捷登录）
				if (this.mobile == '') {
					this.$utils.toast('请输入手机号', 'top');
					return;
				}
				if (!/^1[3456789]\d{9}$/.test(this.mobile)) {
					this.$utils.toast('手机号码有误，请重填', 'top');
					return;
				}
				if (this.isGet) {
					this.isGet = false;
					this.timer = setInterval(this.doLoop, 1000);
				}
				if (this.openId == 1) {
					let data = {
						user_mobile_phone: this.mobile,
						sms_biz_type: "ModifyPwd",
					};
					const res = await this.$appserve.smscode(data);
					this.task_id = res.data.task_id
					//console.log(123,res.data.task_id)
				} else {
					let data = {
						user_mobile_phone: this.mobile,
						sms_biz_type: "ResetPwd",
					};
					const res = await this.$appserve.smscode(data);
					this.task_id = res.data.task_id
					//console.log(123456,res.data.task_id)
				}
				//忘记登录密码：ResetPwd 修改登录密码：ModifyPwd 忘记交易密码：ResetTranPwd 修改交易密码：ModifyTranPwd

			},
			// 初始化方法

			doLoop() {
				this.nums--;
				if (this.nums > 0) {
					this.codeText = '重新获取(' + this.nums + 's)';
				} else {
					clearInterval(this.timer); //清除js定时器
					this.codeText = '发送验证码';
					this.nums = 60; //重置时间
					this.isGet = true;
				}
			}
		}
	};
</script>

<style>
	page {
		background: #ffffff !important;
	}

	/* /deep/ .u-model__content{
	height: 600rpx;
	overflow-y: scroll !important;
	background: red;
} */
	.slot-content {
		height: 450rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		margin: 30rpx 0;
	}
</style>
<style scoped>
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
		background-color: #6BCF00;
		padding: 10upx 20upx;
		box-shadow: 5upx 5upx 10upx #73DE00;
	}

	.login-phone-btns {
		width: 100%;
		height: 74rpx;
	}

	.login-phone-btn {
		margin: 206rpx auto 0;
		height: 80rpx;
		width: 584rpx;
		background: linear-gradient(10deg, #6BCF00 0%, #73DE00 100%);
		border-radius: 44upx;
		color: #ffffff;
		font-size: 34upx;
		font-weight: 500;
		text-align: center;
		line-height: 80upx;
		box-shadow: 5upx 5upx 10upx #73DE00;
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
