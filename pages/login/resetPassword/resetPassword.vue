<template>
	<view class="content">

		<view class="uni-form-item uni-column">
			<input class="uni-input" @input="aaa" :placeholder="$t('P_Email')" v-model="formdata.phone" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="text" class="uni-input" name="" :placeholder="$t('Select_account')" disabled="" @click="xuanze"
				v-model="shenfen" />
			<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
		</view>

		<view class="uni-form-item uni-column">
			<input v-model="formdata.code" type="text" class="uni-input" maxlength="8" :placeholder="$t('P_Code')"
				:border="false" />
			<view style="margin-left: 20upx;" class="reset-phone-from-btn" v-if="nums == 60" @click="getVerCode">
				{{ codeText }}
			</view>
			<view class="reset-phone-from-btn" v-else>{{ codeText }}</view>
		</view>

		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" :placeholder="$t('New_password')" v-model="formdata.password" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" :placeholder="$t('Repeat_password')" v-model="formdata.repeatPassword" />
		</view>
		
		<u-checkbox-group>
			<u-checkbox v-model="checked" active-color="#0046AE">
			</u-checkbox>
			{{ $t('Read') }}
			<span @click="open(1)">《{{ $t('Agreement') }}》</span>
		</u-checkbox-group>
		
		<view class="btnss" @click="submit">
			{{ $t('Reset_password') }}
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
				codeText: this._i18n.t('getCode'),
				shenfen: '',
				nums: 60,
				formdata: {
					"phone": "",
					"password": "",
					"type": '',
					"code": '',
					"task_id":''
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
					this.$utils.toast(this._i18n.t('P_Email'), 'top');
					return false;
				}

				if (!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.formdata.phone)) {
					this.$utils.toast(this._i18n.t('L_t_Email'), 'top');
					return;
				}

				//console.log("获取验证码")
				this.Captcha()
			},


			async Captcha() {
				this.$utils.toast(this._i18n.t('send_success'), 'top');
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
					user_mobile_phone: this.formdata.phone,
					sms_biz_type: "ResetPwd",
				};
				const res = await this.$appserve.smscode(data);
				this.formdata.task_id = res.data.task_id
			},
			doLoop() {
				this.nums--;
				if (this.nums > 0) {
					this.codeText = this._i18n.t('Recapture') + '(' + this.nums + 's)';
				} else {
					clearInterval(this.timer); //清除js定时器
					this.codeText = this._i18n.t('getCode');
					this.nums = 60; //重置时间
					this.isGet = true;
				}
			},
			xuanze() {

				if (this.formdata.phone == "") {
					this.$utils.toast(this._i18n.t('P_Email'))
				} else {
					if(!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.formdata.phone)){
						this.$utils.toast(this._i18n.t('L_t_Email'))
						return false
					}else{
						if (this.list.length > 0) {
							this.show = true
						} else {
							this.$utils.toast(this._i18n.t('go_Register'))
						}
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
					this.$utils.toast(this._i18n.t('P_Email'))
					return false
				} else {
					let re = /^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
					if (!re.test(this.formdata.phone)) {
						this.$utils.toast(this._i18n.t('L_t_Email'))
						return false
					}
				}


				if (this.formdata.password == "") {
					this.$utils.toast(this._i18n.t('T_passsword'))
					return false
				}
				if (this.shenfen == "") {
					this.$utils.toast(this._i18n.t('T_select_login'))
					return false
				}
				
				if (this.checked == false) {
					this.$utils.toast(this._i18n.t('Read') + this._i18n.t('Agreement'), 'top');
					return
				}
				
				
				let data = {
					"user_mobile_phone": this.formdata.phone,
					"task_id": this.formdata.task_id,
					"sms_code": this.formdata.code,
					"user_id": this.formdata.type,
					"user_login_password": this.formdata.password
				}
				
				const res = await this.$appserve.loginpassword(data);
				this.$utils.toast(this._i18n.t('P_R_S'));
				setTimeout(() => {
					uni.reLaunch({
						url: '/pages/login/login'
					})
				}, 1000)
				
				// let data = {
				// 	user_mobile_phone: this.formdata.phone,
				// 	user_id: this.formdata.type,
				// 	user_login_password: this.formdata.password
				// }

				// const res = await this.$appserve.userlogin(data);
				// if (res.code == 0) {
				// 	this.$utils.toast('密码修改修改成功')
				// 	uni.setStorageSync('rescodeUserInfo', res.data)
				// 	setTimeout(() => {
				// 		uni.switchTab({
				// 			url: '/pages/index/index'
				// 		})
				// 	}, 1000)
				// }


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
		background-color: #0046AE;
		padding: 10upx 20upx;
		border-radius: 6upx;
		box-shadow: 5upx 5upx 10upx #0046AE;
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
		color: 1#0046AE;
		margin-left: 5rpx;
	}
	
	/deep/.u-checkbox__icon-wrap {
		width: 22rpx !important;
		height: 22rpx !important;
	}

	
</style>
