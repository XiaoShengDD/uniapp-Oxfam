<template>
	<view class="" style="background-color: #fff;">
		<!-- 选择反馈类型 -->
		<!-- 请填写您的问题与建议 -->
		<view class="leixing">
			<view class="leixing_text">请填写您的问题与建议</view>
			<view class="uni-textarea">
				<textarea placeholder-style="color:#CCCCCC" placeholder="感谢您的支持与帮助，我们期待为您带来更优质的服务。" maxlength='140' v-model="jianyi" />
				</view>
			
		</view>
		<!-- 请填写您的问题与建议 -->
		<!-- 您的联系方式 -->
		<view class="btnss" style="width: 70%;margin: 60upx auto;" @click="submint_fangui">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				jianyi:'',
			};
		},
		methods: {
			goback() {
				uni.navigateBack({
					delta: 1
				})
			},
		
			// 初始化方法
			async submint_fangui (){
				
				if (this.jianyi == '') {
					this.$utils.toast('请填写您的问题与建议','top')
					return
				} 
				
				//提交
				let data = {
					message_board_value:this.jianyi,
					user_id:uni.getStorageSync('rescodeUserInfo').user_id,
				}
				const res = await this.$appserve.messageboard(data);
				this.$utils.toast('反馈成功', 'top')
						setTimeout(()=>{
							uni.navigateBack({
								delta:1
							})
						},1500)
			},
		},
		onNavigationBarButtonTap(e){
			uni.navigateTo({
				url: '/pages/mine/Feedbackrecord/index'
			});
		}
	}
</script>
<style>
	page{
		background-color: #fff!important;
	}
</style>
<style scoped>
	/* 顶部开始 */
	.top {
		width: 100%;
		height: 92rpx;
		padding: 0 30rpx;
		background: #fff;
		border: 2upx solid rgba(238, 238, 238, 1);
	}

	.top image {
		width: 20rpx;
		height: 36rpx;
		position: absolute;
		top: 30rpx;
	}

	.top .geren {
		text-align: center;
		line-height: 92rpx;
		font-size: 36rpx;
		color: #333333;
	}

	.top .img {
		width: 38rpx;
		height: 38rpx;
		/* background: red; */
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	}

	/* 顶部结束 */
	.leixing_text {
		height: 44upx;
		font-size: 32upx;
		font-weight: 600;
		color: rgba(34, 34, 34, 1);
		line-height: 44upx;
	}

	.leixing {
		background: #fff;
		padding: 32upx 30upx;
		text-align: left;
	}
	.gnyc_class{
		margin-top: 32upx;
	}

	.gnyc_class_view {
		width: 40%;
	}

	.gnyc_class image {
		width: 34upx;
		height: 34upx;
		margin-right: 20upx;
	}

	.gnyc_class text {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(155, 155, 155, 1);
		line-height: 40upx;
	}
	.uni-textarea{
		border:2upx solid rgba(204,204,204,1);
		width:calc(100% - 40upx);
		margin: 20upx auto 0;
		height: 310upx;
		padding: 20upx;
		border-radius:16upx;
		background: #fff;
	}
	textarea{
		width:100%;
		height: 280upx;
		background: #fff;
		font-size:28upx;
		color:#222;
		line-height:20px;
	}
	.shojihao{
		width: 100%;
		height:88upx;
		border-radius:8px;
		border:1px solid rgba(204,204,204,1);
		margin-top: 26upx;
		overflow: hidden;
		padding: 0 20upx;
	}
	.shojihao input{
		height:88upx;
		line-height: 88upx;
	}
	.btn_submint{
		width:calc(100% - 60upx);
		margin: 200upx auto 0;
		height:88upx;
		line-height: 88upx;
		background:#073117;
		border-radius:44upx;
		font-size:32upx;
		font-family:PingFangSC;
		font-weight:500;
		color:rgba(255,255,255,1);
		text-align:center;
		
	}
	
	
</style>
