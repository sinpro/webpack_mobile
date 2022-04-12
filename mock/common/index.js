const Mock = require('mockjs');
const { createReturnData } = require('../untils');
export default [
  /**
    * 【描述】 查询归属银行列表
    * 【开发】 陈艳秋、豆江东
    * */
  {
    url: '/CBBC050078',
    type: 'post',
    response: function (config) {
      return createReturnData(
        Mock.mock({
          onkgryCd: "1"
        })
      );
    }
  }
]