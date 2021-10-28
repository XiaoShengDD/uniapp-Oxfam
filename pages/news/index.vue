<template>
	<view class="container">
		<u-no-network></u-no-network>
		<view class="box"  v-for="(item,index) in boxList" :key="index">
			<view class="shang display_flex flex_between">
				<view class="shangconteny display_flex flex_start">
					<image src="/static/img/usdt.png" mode=""></image>
					<text>{{item.coin_name}}</text>
				</view>
				<view class="jiayi font_size_26" @click="navgopages(item,1)">
					交易记录
				</view>
			</view>
			<!-- FF775F  FF5050 -->
			<view class="xia display_flex flex_between">
				<view class="zongshu font_size_28" >
					 <u-count-to color="#FF2626" :start-val="30" :end-val="item.coin_value" :decimals="2"></u-count-to>
					{{item.coin_name}}
				</view>
			</view>
			
			<view class="xia display_flex flex_between">
				<view class=" font_size_22 color_666" >
					<text style="margin-right: 10upx;">冻结</text> <u-count-to font-size="30" color="#666" :start-val="30" :end-val="item.coin_freeze_value" :decimals="2"></u-count-to> 
					<text style="margin-left: 10upx;">{{item.coin_name}}</text>
				</view>
				
				<view class="display_flex flex_start">
					<view class="chongzhi" v-if="item.coin_name =='USDT'" @click="navgopages(item,2)">充值</view>
					<view class="tixian" @click="navgopages(item,3)">提现</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				boxList:[],
			}
		},
		onShow() {
			this.userwallet()
		},
		methods: {
			jiequ(num, decimal) {
				num = num.toString()
				let index = num.indexOf('.')
				if (index !== -1) {
					num = num.substring(0, decimal + index + 1)
				} else {
					num = num.substring(0)
				}
				return parseFloat(num).toFixed(decimal)
			},
			// 初始化方法
			async userwallet (){
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.userwallet(data);
				res.data.forEach((item)=>{
					item.coin_value = this.jiequ(item.coin_value,2)
				})
					this.boxList = res.data
				
			},
			
			navgopages(id,type){
				if(type == 1){
					uni.navigateTo({
						url:"./jiaoyi/jiaoyi?id="+JSON.stringify(id) 
					})
				}else if(type == 2){
					uni.navigateTo({
						url:"./chongzhi/chongzhi?id="+JSON.stringify(id) 
					})
				}else{
					uni.navigateTo({
						url:"./tixian/tixian?id="+JSON.stringify(id) 
					})
				}
				
			},
		}
	}
</script>

<style scoped>
	.chongzhi{
		/* FF775F  FF5050  */
		background: linear-gradient(10deg,#FF775F 0%,#FF5050 100%);
		border-radius: 14upx;
		color: #ffffff;
		font-size: 30upx;
		font-weight: 500;
		text-align: center;
		box-shadow: 5upx 5upx 10upx #FF775F;
		margin-right: 20upx;
		padding: 0 30upx;
	}
	.tixian{
		background: linear-gradient(10deg,#6BCF00 0%,#73DE00 100%);
		border-radius: 14upx;
		color: #ffffff;
		font-size: 30upx;
		font-weight: 500;
		text-align: center;
		box-shadow: 5upx 5upx 10upx #73DE00;
		padding: 0 30upx;
	}
	.zongshu{
		color: #FF2626;
		font-weight: 600;
	}
	.box{
		width: 92%;
		background: #FFFFFF;
		border-radius: 12px;
		padding: 20upx 30upx;
		margin: 40upx auto;
	}
	.box view{
		line-height: 60upx;
	}
	.biaoti{
		font-weight: 600;
	}
	.shang{
		border-bottom: 2upx solid #EDEDED;
		padding-bottom: 20upx;
	}
	.shangconteny{
		line-height: 50upx;
	}
	
	.shangconteny image{
		width: 50upx;
		height: 50upx;
		line-height: 50upx;
		margin-right: 20upx;
		
	}
	.jiayi{
		color: #FF2626;
	}
	.xia{
		padding-top: 30upx;
	}
</style>
