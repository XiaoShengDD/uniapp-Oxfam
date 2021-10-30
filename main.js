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
import i18n from '@/common/i18n.js'
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

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
