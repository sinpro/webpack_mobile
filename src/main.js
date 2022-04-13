import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from 'src/store';

// 挂在公共组件到全局
import commonComponents from 'src/components';
Vue.use(commonComponents);
import  {initMicrodoneH5}  from 'components/common/microdoneH5';
Vue.prototype.$initMicrodoneH5 = initMicrodoneH5;


// demo环境
if (isMockEnv) {
	const mock = require('../mock');
	mock.mockXHR();
}

const root = document.createElement('div');
document.body.appendChild(root);
new Vue({
	router,
	store,
	render: c => c(App)
}).$mount(root);