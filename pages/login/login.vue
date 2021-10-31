<template>
	<view class="content">
		<a @click="changeLanguage" class="changeLanguage" href="javascript:void(0)">{{lang}}</a>
		<view class="logo">
			<image src="/static/img/images/logo.png" mode=""></image>
			<view class="" style="color:#0046AE ;">乐施会</view>
		</view>
		<view class="uni-form-item uni-column">
			<input class="uni-input" :placeholder="$t('P_Email')" @input="aaa" v-model="formdata.phone" />
		</view>
		<view class="uni-form-item uni-column">
			<input type="text" class="uni-input" name="" :placeholder="$t('P_Account')" disabled="" @click="xuanze"
				v-model="shenfen" />
			<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" :placeholder="$t('P_Password')" v-model="formdata.password" />
		</view>

		<view class="btnss" @click="submit">
			{{ $t("pages-login-login") }}
		</view>
		<view class="links">
			<view class="link-highlight" @tap="gotoRegistration">{{ $t('L_Register') }}</view>
			<view class="link-highlight" @tap="gotoResetPassword">{{ $t('L_Forgotten') }}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				show: false,
				shenfen: '',
				lang:"",
				formdata: {
					"phone": "",
					"password": "",
					"type": ''
				},
				messages:{
					P_Email:"",
					P_Account:""
				}
			}
		},

		onShow() {
			if(uni.getStorageSync("language") == "en-CN"){
				this.lang = "English"
			}else{
				this.lang = "中文"
			}
			this.formdata = {
				phone: "",
				password: "",
				type: ''
			}
		},
		methods: {
			// 语言切换
			changeLanguage(){
				if(uni.getStorageSync("language") == "en-CN"){
					uni.setStorageSync('language','en-US')
					this.lang = "中文"
					this._i18n.locale = 'en-US'
				}else{
					uni.setStorageSync('language','en-CN')
					this.lang = "English"
					this._i18n.locale = 'en-CN'
				}
				this.$router.go(0)
			},
			aaa(e){
				if(/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(e.detail.value)){
					this.userList()
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
							this.$utils.toast(this._i18n.t('Unregistered'))
						}
					}

				}
			},
			// 初始化方法
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
					if (!/^\w+@[a-z0-9]+\.[a-z]{2,4}$/.test(this.formdata.phone)) {
						this.$utils.toast(this._i18n.t('L_t_Email'))
						return false
					}
				}


				if (this.formdata.password == "") {
					this.$utils.toast(this._i18n.t('P_Password'))
					return false
				}
				if (this.shenfen == "") {
					this.$utils.toast(this._i18n.t('L_T_Account'))
					return false
				}
				let data = {
					user_mobile_phone: this.formdata.phone,
					user_id: this.formdata.type,
					user_login_password: this.formdata.password
				}

				const res = await this.$appserve.userlogin(data);
				if (res.code == 0) {
					this.$utils.toast(this._i18n.t('L_T_Success'))
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
			gotoResetPassword(){
				uni.navigateTo({
					url: 'resetPassword/resetPassword'
				});
			}

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

	.changeLanguage{
		text-decoration: none;
		position: absolute;
		top:0;
		right: 50upx;
	}
	
	.changeLanguage:hover:active{
		color: #007AFF;
	}

	.btnss {
		margin-top: 130upx;
	}

	.content {
		padding: 100upx 50upx;
	}

	.logo {
		text-align: center;

		image {
			height: 120upx;
			width: 120upx;
			margin: 0 0 20upx;
		}
		view{
			font-size: 32upx;
			margin-bottom: 88upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0 40upx;
		border-radius: 30upx;
		background-color: #fbfbfb;

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
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;
		display: flex;
		justify-content: space-between;
		align-items: center;
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
</style>
