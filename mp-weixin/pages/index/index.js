(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1794:function(n,t,e){"use strict";e.r(t);var i=e("d854"),r=e("2950");for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);e("99f0");var u,o=e("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);t["default"]=c.exports},2950:function(n,t,e){"use strict";e.r(t);var i=e("9948"),r=e.n(i);for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);t["default"]=r.a},6200:function(n,t,e){"use strict";(function(n){e("6fc7"),e("921b");i(e("66fd"));var t=i(e("1794"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},8499:function(n,t,e){},9948:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,t,e,i,r,a,u){try{var o=n[a](u),c=o.value}catch(s){return void e(s)}o.done?t(c):Promise.resolve(c).then(i,r)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(i,r){var u=n.apply(t,e);function o(n){a(u,i,r,o,c,"next",n)}function c(n){a(u,i,r,o,c,"throw",n)}o(void 0)}))}}e("199e");var o=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("2648"))}.bind(null,e)).catch(e.oe)},c={components:{uniIcons:o},data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[{img:"/static/test/swiper-img/2.jpg"},{img:"/static/test/swiper-img/3.jpg"}],homeshuchenglist:[],news:[]}},onShow:function(){var n=u(i.default.mark((function n(){var t,e,r,a,u,o,c,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=[],n.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=n.sent,r=!0,a=!1,u=void 0,n.prev=7,o=e.data.list[Symbol.iterator]();!(r=(c=o.next()).done);r=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&(console.log(s),t.push({img:s.value}));n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](7),a=!0,u=n.t0;case 15:n.prev=15,n.prev=16,r||null==o.return||o.return();case 18:if(n.prev=18,!a){n.next=21;break}throw u;case 21:return n.finish(18);case 22:return n.finish(15);case 23:return t&&(this.swiperList=t),n.next=26,this.$api.list("shucheng",{page:1,limit:6});case 26:e=n.sent,this.homeshuchenglist=e.data.list;case 28:case"end":return n.stop()}}),n,this,[[7,11,15,23],[16,,18,22]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=c}).call(this,e("543d")["default"])},"99f0":function(n,t,e){"use strict";var i=e("8499"),r=e.n(i);r.a},d854:function(n,t,e){"use strict";var i,r=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.homeshuchenglist,(function(t,e){var i=t.fengmian.split(",");return{$orig:n.__get_orig(t),g0:i}}))),i=n.__map(n.homeshuchenglist,(function(t,e){var i=t.fengmian.split(",");return{$orig:n.__get_orig(t),g1:i}}));n.$mp.data=Object.assign({},{$root:{l0:e,l1:i}})},a=[];e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return i}))}},[["6200","common/runtime","common/vendor"]]]);