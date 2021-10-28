<template>
	<view>
		<view class="nodata">
			<image class="nodata-icon" src="/static/img/images/nodata.png" />
			<view class="nodata-tips">{{title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String
		},
		data() {
			return {
				
			};
		}
		
		
	}
</script>

<style>
.nodata{
		text-align: center;
		padding-top: 190upx;
	}
	.nodata-icon{
		width: 404upx;
		height: 294upx;
	}
	.nodata-tips{
		margin-top: 40upx;
		font-size: 28upx;
		color: #999;
	}
</style>
