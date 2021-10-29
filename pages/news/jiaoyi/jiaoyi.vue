<template>
	<view class="borderTop wallet-flash-record">
		<!-- `wallet_record_type` varchar(32) NOT NULL COMMENT '记录类型 
		充值：Recharge\n
		提现：Withdrawal\n
		日送：DailyDelivery\n
		直推奖励：DirectReward\n
		团队奖励：TeamReward',
		  `wallet_record_status` varchar(32) NOT NULL COMMENT '记录状态 
		  等待审核：Pending\n
		  已审核:Approved\n
		  拒绝：Refused', -->
		<view class="" v-if="record_arr.length > 0">
			<view class="wallet-flash-record-cell display_flex flex_between align_item" v-for="(item, index) in record_arr" :key="index">
				<view class="">
					<view class="wallet-flash-record-cell-title font_size_28 color_222" v-if="item.wallet_record_type=='Recharge'">
						充值
					</view>
					<view class="wallet-flash-record-cell-title font_size_28 color_222" v-if="item.wallet_record_type=='Withdrawal'">
						提现
					</view>
					<view class="wallet-flash-record-cell-title font_size_28 color_222" v-if="item.wallet_record_type=='DailyDelivery'">
						日送
					</view>
					<view class="wallet-flash-record-cell-title font_size_28 color_222" v-if="item.wallet_record_type=='DirectReward'">
						直推奖励
					</view>
					<view class="wallet-flash-record-cell-title font_size_28 color_222" v-if="item.wallet_record_type=='TeamReward'">
						团队奖励
					</view>
					<view class="wallet-flash-record-cell-foot font_size_26" style="margin: 10upx 0;">
						<text style="color: #FF0F00;" v-if="item.wallet_record_status == 'Pending'">等待审核</text>
						<text style="color: #64C100;" v-if="item.wallet_record_status == 'Approved'">已审核</text>
						<text style="color: #FF0F00;" v-if="item.wallet_record_status == 'Refused'">拒绝</text>
					</view>
					<view class="wallet-flash-record-cell-date color_9B9B9B">
						{{item.update_time}}
					</view>
					<view class="wallet-flash-record-cell-date color_9B9B9B" v-if="item.wallet_record_type=='Withdrawal'">
						手续费：{{item.wallet_withdrawal_fee}}
					</view>
				</view>
				<view class="">
					<text style="color: #4300A9;" v-if="item.wallet_record_type == 'Withdrawal'">-{{item.wallet_record_value}}{{item.coin_name}}</text>
					<text style="color: #64C100;" v-else>+{{item.wallet_record_value}}{{item.coin_name}}</text>
				</view>


			</view>
		</view>
		<nodata v-if="record_arr.length == 0" title="暂无记录"></nodata>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				record_arr: [],
				page: 1,
				Bid: '',
			}
		},
		// 离开页面关闭软键盘
		onUnload() {
			// //console.log('离开了当前页面');
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		},
		onPullDownRefresh() {
			this.getExchangeList()
		},
		// // 上拉加载
		// onReachBottom() {
		// 	// //console.log('onReachBottom');
		// 	this.page++;
		// 	this.getExchangeList(this.page)
		// },
		onLoad(e) {
			this.Bid = JSON.parse(e.id)
			this.getExchangeList()
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
			// 获取记录
			async getExchangeList(page) {
				let data = {
					"user_id": uni.getStorageSync('rescodeUserInfo').user_id,
					"coin_id": this.Bid.coin_id,
				}
				const res = await this.$appserve.walletrecord(data);
				//console.log(res)
				res.data.forEach((item)=>{
					item.wallet_record_value = this.jiequ(item.wallet_record_value,2)
					item.wallet_withdrawal_fee = this.jiequ(item.wallet_withdrawal_fee,2)
				})
				this.record_arr = res.data
				// //console.log(data)
				// if (page == 1) {
				// 	this.record_arr = data
				// } else {
				// 	this.record_arr = this.record_arr.concat(data)
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
<style lang="less" scoped>
	.wallet-flash-record {
		width: 100%;
		padding: 0.1px 30upx;
	}

	.wallet-flash-record-cell {
		width: 100%;
		border-bottom: 2upx solid rgba(238, 238, 238, 1);
		background-color: #fff;
		padding: 20upx 0;
	}

	.wallet-flash-record-cell-title {
		height: 40upx;
		font-size: 32upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		line-height: 40upx;
	}

	.wallet-flash-record-cell-foot {
		width: 100%;
		margin-top: 6upx;
	}

	.wallet-flash-record-cell-date {
		height: 40upx;
		font-size: 24upx;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
		line-height: 40upx;
	}
</style>
