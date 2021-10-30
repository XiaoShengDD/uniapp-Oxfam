import Vue from 'vue'
import App from './App'
// vuex
import store from '@/store';
Vue.prototype.$store = store
// uview
import uView from "uview-ui";
import 'uview-ui/theme.scss';
Vue.use(uView);
// 公共方法
import utils from "@/common/utils.js";
Vue.prototype.$utils = utils
import nodata from '@/components/nodata.vue'
Vue.use(nodata)
Vue.component('nodata', nodata);

// 国际化方法
import VueI18n from "vue-i18n";
import messages from "@/common/lang.js"
Vue.use(VueI18n)

const i18n = new VueI18n({
	locale: uni.getStorageSync("language") || "en-CN",
	messages,
})
Vue.prototype._i18n = i18n;

// 请求
import {
	AppServices,
} from "@/services";
Vue.prototype.$appserve = AppServices;
// 上传图片地址
import config from "@/config/index.js";
Vue.prototype.$up_img = config.up_img;
// 是否连接网络
import lib from "@/common/lib.js";
Vue.prototype.$lib = lib

//  混入
Vue.mixin({
	computed: {
		i18n(){
			let pages = getCurrentPages();
			if (pages) {
				let page = pages[pages.length - 1];
				if (page) {
					let name = page.$route.meta.name
					uni.setNavigationBarTitle({
						title: tabBar[name]
					})
				}
			}
			
			return this.$t('index')
		},
	},
	
	
	
	onShow() {
		let locale = this._i18n.locale
		let tabBar = this._i18n.messages[locale].index
		uni.setTabBarItem({
			index: 0,
			text: tabBar.home
		})
		uni.setTabBarItem({
			index: 1,
			text: tabBar.trade
		})
		uni.setTabBarItem({
			index: 2,
			text: tabBar.consult
		})
		uni.setTabBarItem({
			index: 3,
			text: tabBar.mine
		})

		let pages = getCurrentPages();
		if (pages) {
			let page = pages[pages.length - 1];
			if (page) {
				let name = page.$route.meta.name
				uni.setNavigationBarTitle({
					title: tabBar[name]
				})
			}
		}

	}
})



Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
