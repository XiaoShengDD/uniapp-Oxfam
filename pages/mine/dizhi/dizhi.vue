<template>
	<view class="container">
		<u-no-network></u-no-network>
		<nodata title="暂无" v-if="list.length == 0"></nodata>
		<view class="boxe" v-for="(i,index) in list" v-if="list.length>0" :key="index">
			{{i.withdrawal_address_value}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[]
			}
		},
		onNavigationBarButtonTap() {
			uni.navigateTo({
				url:"/pages/mine/dizhi/tianjia/tianjia"
			})
		},
		onShow() {
			this.withdrawaladdressadd()
		},
		methods: {
			
			// 初始化方法
			async withdrawaladdressadd (){
				let data = {
					user_id: uni.getStorageSync('rescodeUserInfo').user_id
				}
				const res = await this.$appserve.withdrawaladdress(data);
				//console.log(res)
				this.list = res.data
				
			},

		}
	}
</script>

<style scoped>
	.boxe{
		word-wrap: break-word;
		padding: 30upx;
		background-color: #fff;
		border: 2upx solid #f5f5f5;
	}
</style>
