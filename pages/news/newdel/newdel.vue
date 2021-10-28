<template>
	<view class="container">
		<u-no-network></u-no-network>
		<!-- <view class="title color_222 font_size_30">
			{{infolist.news_title}}
		</view>
		<view class="time color_9B9B9B font_size_26">
			2021-01-02 14:21:45
		</view>
		<view class="content color_9B9B9B font_size_28" >
			{{infolist.news_text}}
		</view> -->
		<web-view :src="infolist.url"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				infolist:{},
			}
		},
		onBackPress() {
			this.$scope.$getAppWebview().children()[0].back()
		},
		onShow() {
			this.infolist=uni.getStorageSync('xinwen')
		},
		
		
		methods: {

		}
	}
</script>
<style>
	page{
		background-color: #fff!important;
	}
</style>
<style scoped>
	.container{
		padding: 60upx;
	}
	.title{
		font-weight: 600;
	}
	.title,.time{
		text-align: center;
		margin: 0 0 30upx;
	}
	.content{
		line-height: 50upx;
		font-family: PingFangSC-Regular, PingFang SC;
	}
</style>
