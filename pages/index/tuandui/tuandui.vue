<template>
	<view class="container">
		<u-no-network></u-no-network>
		<view class="tudndui display_flex flex_start">
			<view class="">
				<image class="touxiang" src="/static/img/s14.png" mode=""></image>
			</view>
			<view class="tuandui">
				<view class="" style="text-align: left;">{{name}} {{ $t("team_name") }}</view>
				<view class="" style="padding-top: 20upx;text-align: left;">
					<view class="">{{ $t("team_size") }}: {{tameinfo.teamCount}}</view>
					
					<view v-for="(item,index) in tameinfo.teamCoin" :key='index'>
						{{ $t("team_total") }}{{item.coin_name}} : {{item.coin_value}}
					</view>
					
					
					<!-- <view class="" v-if="tameinfo.teamCoin">{{ $t("team_total") }}{{tameinfo.teamCoin[0].coin_name}} : {{tameinfo.teamCoin[0].coin_value}}</view> -->
					<!-- <view class="" v-if="tameinfo.teamCoin">{{ $t("team_total") }}{{tameinfo.teamCoin[1].coin_name}} : {{tameinfo.teamCoin[1].coin_value}}</view> -->
				</view>
			</view>
		</view>
		<view class="jiange"></view>
		<view class="xiaji" style="color: #555555;" v-if="tameinfo.childList">
			{{ $t("sub_user") }}({{tameinfo.childList.length}})
			<view class="box"  v-for="(item,index) in tameinfo.childList" :key="index">
				<view class="shang display_flex flex_between">
					<view class="shangconteny display_flex flex_start">
						<image src="/static/img/hader.png" mode=""></image>
						<text style="position: relative;top: -6upx;">{{item.user_nick_name}}</text>
					</view>
					<view class="jiayi font_size_26" style="color: #0046AE;">
						{{item.wallet[0].coin_value}} {{tameinfo.teamCoin[0].coin_name}}
					</view>
				</view>
				<!-- 4C00AF  4C00AF -->
				<view class="xia display_flex flex_between">
					<view class="zongshu font_size_28" >
						{{item.wallet[0].create_time}}
					</view>
					<view class="display_flex flex_start" style="color: #0046AE;">
						{{item.wallet[1].coin_value}} {{tameinfo.teamCoin[1].coin_name}}
					</view>
				</view>
				
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'',
				tameinfo:'',
				boxList:[
					{icon:'',id:"USDT",yue:'1521.00'},
					{icon:'',id:"DOGZ",yue:'1522.00'},
					{icon:'',id:"SHIB",yue:'1523.00'},
					{icon:'',id:"AKITA",yue:'1524.00'},
				],
			}
		},
		onLoad(e) {
			this.name = e.name
		},
		onShow() {
			this.myteam()
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
			async myteam (){
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.myteam(data);
				//console.log(res)
				res.data.teamCoin.forEach((item)=>{
					item.coin_value = this.jiequ(item.coin_value,2)
				})
				res.data.childList.forEach((item)=>{
					if(item.wallet.length>0){
						item.wallet.forEach((i)=>{
							i.coin_value = this.jiequ(i.coin_value,2)
						})
					}
				})
				this.tameinfo= res.data
				
			},
		}
	}
</script>
<style>
	page {
		background-color: #fff !important;
	}
</style>
<style scoped lang="less">
	.xiaji{
		padding: 30upx;
		
	}
	.tuandui {
		color: #fff;
		padding-top: 60upx;

		image {
			width: 28upx;
			height: 30upx;
		}
	}

	.touxiang {
		width: 128upx;
		height: 128upx;
		padding: 60upx 30upx 0 60upx;
	}

	.tudndui {
		background: url("data:image/png;base64,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") no-repeat;
		background-size: 100% 100%;
		height: 400upx;
		padding: 0.1px;
		position: relative;
		margin: 0 auto;
		text-align: center;
	}

	.jiange {
		width: 100%;
		height: 20upx;
		background-color: #F7F7F7;
		margin-top: -2upx;
	}
	
	.zongshu{
		color: #A4A4A4 ;
	}
	.box{
		background: #FFFFFF;
		border-radius: 12px;
		padding: 20upx;
		margin: 0 auto;
		border-bottom: 2upx solid #EDEDED;
	}
	.box view{
		line-height: 60upx;
	}
	.biaoti{
		font-weight: 600;
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
		color: #A4A4A4;
	}
</style>
