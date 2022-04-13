import Vue from 'vue';
import axios from 'axios';
import store from '../store';``
import router from '../router';
import { noRepeat } from '../common/noRepeat';
import { seq_create } from '../apis/common'
import MyPromise from 'promise';// 兼容ie10，promise resolve之后 then不执行的问题
import { storageLoginStatus } from './index';
import { MessageBox } from 'element-ui';
import appInfo from '../../package.json'
const isDev = process.env.NODE_ENV;
let ajaxCounter = 0;
let noRepeatLoading = false;
// 获取vue链
const $$context = Vue.prototype;

/**
 * 处理生产环境和开发环境接口请求地址
 * @param config
 * @returns {any}
 */
function handlePreUrl(config = {}) {
  const {
    url = '',  // 接口地址
    devPreUrl = config.devPreUrl ? (config.devPreUrl == '/api' ? ENV_CONFIG.base_url : config.devPreUrl) : '', // 开发环境url前缀地址
    demoPreUrl = '',
    prodPreUrl = '', // 生产环境url前缀地址
    prodServer = ENV_CONFIG.base_url, // 生产的服务地址
    data = "", //请求参数
  } = config;
  let fixUrl = url; // 拼接的url
  const prodServerReg = new RegExp(prodServer); // 生产接口地址正则
  const routeInfo = store.getters.getRouteInfo; // 获取路由信息
  if (config.url !== '/upload' && config.url !== '/intranetUpload') {
    // if (config.url !== '/upload') {
    let bizMenuNo = '';
    let breadcrumb = [...store.state.app.breadcrumb];
    if (breadcrumb) {
      let menuNoObj = breadcrumb.reverse().find(ele => {
        return ele.menuNo.length == 10
      })
      if (menuNoObj) {
        bizMenuNo = menuNoObj.menuNo
      }
    }
    config.data = {
      header: {
        channelNo: 'CB',
        verison: appInfo.version,
        macCode: "111",  //MAC 地址
        equipId: window.localStorage.getItem('uuid'),  //设备唯一ID
        subTerminalType: "Web",
        "iCIFID": store.state.app.token ? store.state.app.token : '',
        bizTypNm: data.serveCodeTitle || routeInfo.serveCodeTitle || routeInfo.title,//日志交易码
        bizTypCd: data.serveCode || routeInfo.serveCode,//日志交易名称
        bizMenuNo: bizMenuNo //业务服务时间编号
      },
      body: { ...data, randowuuid: window.sessionStorage.getItem('randow') || '' }
    }
    //添加重复因子
    let tranSn = window.sessionStorage.getItem('tranSn')
    if (noRepeat.indexOf(config.url) > -1 && tranSn) {
      config.data.body.tranSn = tranSn
      if (!noRepeatLoading) {
        noRepeatLoading = true;
      } else {
        return new MyPromise((resolve, reject) => reject({}));
      }
    }

  } else {
    config.data = data;
  }
  // dev环境
  if (isDev === 'development') {
    // fixUrl = `${devPreUrl}${url}`;
    fixUrl = `${demoPreUrl}${url}`;
  } else if (isDev === 'demo') {
    fixUrl = `${demoPreUrl}${url}`;
  } else if (!(prodServerReg.test(prodPreUrl) || prodServerReg.test(url))) {
    // 生产环境或配置的地址以配置的接口地址开始
    fixUrl = `${prodServer}${prodPreUrl}${url}`;
  }
  return Object.assign(config, { url: fixUrl });
}
let LogintimeStatus = true;
const ajax = axios.create({
  baseURL: '',
  timeout: 30000,
  // transformRequest: [rqs],
  headers: {
    "Accept": "application/json",
    'Content-Type': 'application/json',
    'X-origin': ''
  },
});

ajax.interceptors.request.use(
  (config) => {
    if (!config['noLoading']) {
      ajaxCounter++;
      store.commit('setLoading', true);
    }
    // 请求头设置token
    // config.headers.iCIFID = store.state.app.token ? store.state.app.token : '';
    // 允许get请求下，可设置请求头
    if (config.method === 'get') {
      config.data = true;
    }
    return handlePreUrl(config);
  },
  (err) => {
    ajaxCounter = 0;
    store.commit('setLoading', false);
    $$context.$MessageWarn.error('网络请求超时');
    return new MyPromise((resolve, reject) => reject(err));
  }
);

ajax.interceptors.response.use(
  (response) => {
    if (!response.config['noLoading'] && ajaxCounter > 0) {
      ajaxCounter--;
    }
    if (ajaxCounter <= 0) {
      ajaxCounter = 0;
      store.commit('setLoading', false);
    }
    // console.log(response.config.url);
    if (noRepeat.find(ele => {
      return response.config.url.indexOf(ele) > -1
    })) {
      seq_create(data => {
        noRepeatLoading = false;
      })
    }

    // 重映射返回信息
    if (response.data.header) {
      response.data.header.errorMessage = response.data.header.errorMsg;
      // delete response.data.errorMsg;
    }
    let result = response.data;
    //登录超时
    if (result.header) {
      if (result.header.errorCode == 'SY000001' || result.header.errorCode == 'OP00000048' || result.header.errorCode == 'ECT004001' || result.header.errorCode == 'ECT004014') {
        if (LogintimeStatus) {
          LogintimeStatus = false;
          store.commit('setMessageWarnStatus', true);
          MessageBox.confirm(((result.header.errorCode == 'ECT004014' || result.header.errorCode == 'ECT004001') ? result.header.errorMsg : '由于长时间未操作，会话已超时，请重新登录'), '会话超时', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
            center: true,
            showClose: false,
            showCancelButton: false,
            closeOnClickModal: false
          })
            .then(() => {
              store.commit('setToken', '');
              store.commit('setUserInfo', {});
              store.commit('setUserMenus', []);
              store.commit('setSliderMenus', []);
              store.commit('setBreadcrumb', []);
              store.commit('setUserMenusAct', '');
              LogintimeStatus = true;
              router.replace({ path: '/login' });
              store.commit('setMessageWarnStatus', false);
              return new MyPromise((resolve, reject) => reject({}));;
            })
            .catch(() => {
              store.commit('setToken', '');
              store.commit('setUserInfo', {});
              store.commit('setUserMenus', []);
              store.commit('setSliderMenus', []);
              store.commit('setBreadcrumb', []);
              store.commit('setUserMenusAct', '');
              LogintimeStatus = true;
              router.replace({ path: '/login' });
              store.commit('setMessageWarnStatus', false);
              return new MyPromise((resolve, reject) => reject({}));;
            });
        }
        return new MyPromise((resolve, reject) => reject({}));;
      }
    }
    // 获取登录标识
    const sessionLoginStatus = storageLoginStatus('', 'get');
    // EBCBLOGOUT 已经没有了这个错误码，用401替代
    if (result.resultCode === 401 && !isMockEnv) {
      if (
        sessionLoginStatus &&
        +sessionLoginStatus &&
        !excludeUrl.includes(response.config.url)
      ) {
        store.commit('setLoginTimeOutVisible', true);
        localStorage.setItem('loginUrl', result.data);
      } else {
        window.noPopBeforeUnload = true;
        window.location.href = result.data;
      }
      return new MyPromise((resolve) => resolve(result));
    }
    // 给errorMessage加个默认值，避免提示信息为空
    // if (result.header.errorCode !== '0') {
    //   result.errorMessage = !result.errorMessage
    //     ? '服务繁忙'
    //     : result.errorMessage;
    // } else if (!sessionLoginStatus && result.header.errorCode === '0') {
    //   storageLoginStatus('1'); // 接口成功且登录标识不存在时写入登录标识
    // }

    if (response.config.responseType === 'blob') {
      result = {
        headers: response.headers,
        data: response.data,
      };
    }
    return new MyPromise((resolve) => resolve(result));
  },
  (err) => {
    $$context.$MessageWarn.error('系统错误，请稍后重试');
    ajaxCounter = 0;
    store.commit('setLoading', false);
    if (err.response) {
      if (noRepeat.find(ele => {
        return err.response.config.url.indexOf(ele) > -1
      })) {
        seq_create(data => {
          noRepeatLoading = false;
        })
      }
    }
    console.log('network error', err.msg);
    return new MyPromise((resolve, reject) => reject(err));
  }
);

export default ajax;
