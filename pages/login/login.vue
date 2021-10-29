<template>
	<view class="content">
		<view class="logo">
			<image src="/static/img/images/logo.png" mode=""></image>
			<view class="" style="color:#0046AE ;">乐施会</view>
		</view>
		<view class="uni-form-item uni-column">
			<input type="tel" class="uni-input" maxlength="11" placeholder="请输入手机号" @input="aaa" v-model="formdata.phone"/>
		</view>
		<view class="uni-form-item uni-column">
			<input type="text" class="uni-input" name="" placeholder="选择账号" disabled="" @click="xuanze" v-model="shenfen" />
			<u-select v-model="show" :list="list" @confirm="confirm"></u-select>
		</view>
		<view class="uni-form-item uni-column">
			<input type="password" class="uni-input" name="" placeholder="请输入密码"  v-model="formdata.password"/>
		</view>
		
		<view class="btnss" @click="submit">
			登录
		</view>
		<view class="links">
			<view class="link-highlight" @tap="gotoRegistration">还没账号，去注册</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				show:false,
				shenfen:'',
				formdata: {
					"phone": "",
					"password": "",
					"type": ''
				},
			}
		},
		onShow() {
			this.formdata={
				phone: "",
				password: "",
				type: ''
			}
		},
		methods: {
			aaa(e){
				if(e.detail.value.length==11){
					this.userList()
				}
			},
			xuanze(){
				
				if(this.formdata.phone == ""){
					this.$utils.toast('请输入手机号')
				}else{
					if(this.list.length>0){
						this.show = true
					}else{
						this.$utils.toast('您还未注册，请前往注册')
					}
						
				}
			},
			// 初始化方法
			async userList(){
				let data = {
					user_mobile_phone:this.formdata.phone
				}
				const res = await this.$appserve.userList(data);
				if(res.data.length>0){
					res.data.forEach((item)=>{
						item.value=item.user_id
						item.label= item.user_nick_name
					})
					this.list = res.data.map((item)=>{
						delete item.user_id
						delete item.user_nick_name
						return item
					})
					
				}else{
					
				}
				
				
			},
			confirm(e){
				//console.log(e);
				this.shenfen = e[0].label
				this.formdata.type = e[0].value
				
				
			},
			// 初始化方法
			async submit (){
				if(this.formdata.phone == ""){
					this.$utils.toast('请输入手机号')
					return false
				}
				if(this.formdata.password == ""){
					this.$utils.toast('请输入密码')
					return false
				}
				if(this.shenfen == ""){
					this.$utils.toast('请输入选择登录账号')
					return false
				}
				let data = {
					user_mobile_phone:this.formdata.phone,
					user_id:this.formdata.type,
					user_login_password:this.formdata.password
				}
				
				const res = await this.$appserve.userlogin(data);
				if(res.code==0){
					this.$utils.toast('登录成功')
					uni.setStorageSync('rescodeUserInfo',res.data)
					setTimeout(()=>{
						uni.switchTab({
							url:'/pages/index/index'
						})
					},1000)
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
	page{
		background-color: #fff!important;
	}
</style>
<style lang="scss" scoped>
	$color-primary: #007AFF;
	.btnss{
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
</style>
