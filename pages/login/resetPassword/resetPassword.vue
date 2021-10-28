<template>
	<view class="content">

		<view class="uni-form-item uni-column">
			<input class="uni-input" @input="aaa" placeholder="请输入邮箱" v-model="formdata.phone" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="text" class="uni-input" v-show="!show" name="" placeholder="选择账号" disabled="" @click="xuanze"
				v-model="shenfen" />
			<u-select v-show="show" :list="list" @confirm="confirm"></u-select>
		</view>

		<view class="uni-form-item uni-column">
			<input v-model="formdata.code" type="text" class="uni-input" maxlength="8" placeholder="请输入验证码"
				:border="false" />
			<view style="margin-left: 20upx;" class="reset-phone-from-btn" v-if="nums == 60" @click="getVerCode">
				{{ codeText }}
			</view>
			<view class="reset-phone-from-btn" v-else>{{ codeText }}</view>
		</view>

		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" placeholder="新的密码" v-model="formdata.password" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" placeholder="重复密码" v-model="formdata.repeatPassword" />
		</view>
		
		<u-checkbox-group>
			<u-checkbox v-model="checked" active-color="#6BCF01">
			</u-checkbox>
			已阅读并同意
			<span @click="open(1)">《用户协议》</span>
		</u-checkbox-group>
		
		<view class="btnss" @click="submit">
			重置密码
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				show: false,
				isGet: true,
				checked: false,
				codeText: "获取验证码",
				shenfen: '',
				nums: 60,
				formdata: {
					"phone": "",
					"password": "",
					"type": '',
					"code": ''
				},
			}
		},
		onShow() {
			this.formdata = {
				phone: "",
				password: "",
				type: ''
			}
		},
		methods: {

			aaa(e) {
				if (/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(e.detail.value)) {
					this.userList()
				}
			},
			
			getVerCode() {

				//获取验证码
				if (!this.formdata.phone) {
					this.$utils.toast('邮箱地址不得为空', 'top');
					return false;
				}

				if (!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.formdata.phone)) {
					this.$utils.toast('请输入正确的邮箱地址', 'top');
					return;
				}

				//console.log("获取验证码")
				this.Captcha()
			},


			async Captcha() {
				this.$utils.toast('短信发送成功', 'top');
				this.getCode()
			},

			async getCode() {
				////console.log('fa')
				//、短信类型（0注册/1重置密码/2快捷登录）

				if (this.isGet) {
					this.isGet = false;
					this.timer = setInterval(this.doLoop, 1000);
				}
				// Register 忘记登录密码：ResetPwd 修改登录密码：ModifyPwd 忘记交易密码：ResetTranPwd 修改交易密码：ModifyTranPwd
				let data = {
					user_mobile_phone: this.mobile,
					sms_biz_type: "Register",
				};
				const res = await this.$appserve.smscode(data);
			},
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
			},
			xuanze() {

				if (this.formdata.phone == "") {
					this.$utils.toast('请输入邮箱')
				} else {

					if (this.list.length > 0) {
						this.show = true
					} else {
						this.$utils.toast('您还未注册，请前往注册')
					}

				}
			},
			// 获取账号列表
			async userList() {
				let data = {
					user_mobile_phone: this.formdata.phone
				}
				const res = await this.$appserve.userList(data);
				if (res.data.length > 0) {
					this.show = true
					res.data.forEach((item) => {
						item.value = item.user_id
						item.label = item.user_nick_name
					})
					this.list = res.data.map((item) => {
						delete item.user_id
						delete item.user_nick_name
						return item
					})

				} else {

				}


			},
			confirm(e) {
				//console.log(e);
				this.shenfen = e[0].label
				this.formdata.type = e[0].value


			},
			// 初始化方法
			async submit() {
				
				
				if (this.formdata.phone == "") {
					this.$utils.toast('请输入邮箱')
					return false
				} else {
					let re = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
					if (!re.test(this.formdata.phone)) {
						this.$utils.toast('请输入正确的邮箱地址')
						return false
					}
				}


				if (this.formdata.password == "") {
					this.$utils.toast('请输入密码')
					return false
				}
				if (this.shenfen == "") {
					this.$utils.toast('请输入选择登录账号')
					return false
				}
				
				if (this.checked == false) {
					this.$utils.toast('请阅读用户协议', 'top');
					return
				}
				
				let data = {
					user_mobile_phone: this.formdata.phone,
					user_id: this.formdata.type,
					user_login_password: this.formdata.password
				}

				const res = await this.$appserve.userlogin(data);
				if (res.code == 0) {
					this.$utils.toast('密码修改修改成功')
					uni.setStorageSync('rescodeUserInfo', res.data)
					setTimeout(() => {
						uni.switchTab({
							url: '/pages/index/index'
						})
					}, 1000)
				}


			},
			gotoRegistration() {
				uni.navigateTo({
					url: 'reg/reg'
				});
			},

		}
	}
</script>
<style>
	page {
		background-color: #fff !important;
	}
</style>
<style lang="scss" scoped>
	$color-primary: #007AFF;

	.btnss {
		margin-top: 130upx;
	}

	.content {
		padding: 100upx 50upx;
	}

	.logo {
		text-align: center;

		image {
			height: 200upx;
			width: 200upx;
			margin: 0 0 20upx;
		}

		view {
			font-size: 50upx;
			margin-bottom: 30upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0 40upx;
		border-radius: 30upx;
		background-color: #fbfbfb;
		position: relative;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: #C2C2C2;
			margin-top: 30upx;
		}
	}

	.reset-phone-from-btn {
		height: 56upx;
		font-size: 26upx;
		font-family: PingFangSC-Regular, PingFangSC;
		font-weight: 400;
		color: #fff;
		line-height: 36upx;
		background-color: #6BCF01;
		padding: 10upx 20upx;
		border-radius: 6upx;
		box-shadow: 5upx 5upx 10upx #73DE00;
		text-align: center;
		position: absolute;
		right: 0;
		top: 5upx;
	}
	
	.u-checkbox-group {
		margin: 22rpx 0 0 30rpx;
		font-size: 24rpx !important;
	}
	
	.u-checkbox-group span {
		color: #6BCF01;
		margin-left: 5rpx;
	}
	
	/deep/.u-checkbox__icon-wrap {
		width: 22rpx !important;
		height: 22rpx !important;
	}

	
</style>
