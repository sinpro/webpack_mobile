<template>
  <div class="serverError-page">
    <div
      class="bank-header"
      style="position: fixed; z-index: 1; width: 100%;"
    >
      <div class="center-header">
        <img
          src="../../images/404.png"
          class="logo"
        >
      </div>
    </div>
    <div class="serverError-page-box">
      <img
        src="../../images/404.png"
        rel="serverError"
      >
      <p class="serverError-tip">
        <b>服务器出错，请重试</b>
      </p>
      <button
        class="retry-btn"
        type="primary"
      >
        重试
      </button>
      <div
        v-if="showError"
        class="errorText"
      >
        {{ errorText }}
      </div>
      <p
        class="error-title"
      >
        页面出错
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },
  methods: {
    
  }
};
</script>

<style lang='scss' scoped>
.error-page {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  p.error-tip {
    font-size: 16px;
    color: #666666;
    margin-top: 25px;
    margin-bottom: 20px;
  }
}

.serverError-page {
  width: 100%;
  height:100%;
  .bank-header{
    width:80%;
    height:70px;
    background:#fff;
    position: fixed;
    top:0;
    left: 0;
    z-index: 50;
    box-shadow: 0 2px 4px rgba(39, 52, 125, 0.12);
    .center-header{
      padding-left: 290px;
      .logo {
        float: left;
        font-size: 18px;
        height: 100%;
        width: 160px;
        padding: 10px;
        margin-top: 12.5px;
        img {
         // width: 90%;
         width: 134px;
         height:27px;
        }
        a {
          color: inherit;
        }
      }
    }
      
  }
  .serverError-page-box{
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  
  .serverError-tip{
    font-size: 24px;
    color: rgba(0,0,0,0.85);
    text-align: center;
    line-height: 32px;
  }
  .retry-btn{
  //  margin-bottom: 15px;
  margin-top: 16px;
  font-size: 16px;
  }
  .error-title{
    margin: 17px auto;
    cursor: pointer;
    font-size: 14px;
    color: #4E7BD0;
    text-align: center;
    line-height: 22px;
  }
  .errorText{
    margin: 17px auto 0;
    width: 490px;
    font-size: 14px;
    color: rgba(0,0,0,0.43);
    text-align: center;
    line-height: 22px;
  }
}
}
</style>
