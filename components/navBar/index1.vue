<template>
	<view class="mill-index-navBar">
		<uni-nav-bar left-icon="back" :left-icon="leftIcon"  :right-text="rightText" :title="title" :right-icon="rightIcon" :color="color" background-color="rgba(255,255,255,0)"
		 @clickLeft="clickLeft" @clickRight="clickRight"></uni-nav-bar>
	</view>
</template>

<script>
	import uniNavBar from "@/components/uni-nav-bar/uni-nav-bar.vue"
	export default {
		components: {
			uniNavBar
		},
		props: {
			title: String,
			color: String,
			rightText: {
				type: String,
				default: ''
			},
			barType: {
				type: String,
				default: ''
			},
			rightIcon: {
				type: String,
				default: ''
			},
			leftIcon:{
				type: String,
				default: ''
			}
		},
		data() {
			return {

			}
		},
		onLoad() {

		},
		methods: {
			// 返回
			clickLeft() {
				if(this.barType){
					uni.navigateBack({
						delta: 2
					})
				}else{
					uni.navigateBack({
						delta: 1
					})
				}
			},
			//右侧按钮
			clickRight() {
				this.$emit('clickRight')
			}
		}
	}
</script>

<style lang="less" scoped>
	// 头部导航
	.mill-index-navBar {
		width: 100%;
		height: 88upx;
		position: absolute;
		top: 34upx;
		left: 0;
		z-index: 9999999;
	}
	
</style>
