const kb = new keyBoard({
  chaosMode: 0, // 混乱模式,0:无混乱;1:打开时乱一次;2:每输入一个字符乱一次,默认值0
  pressStatus: 1, // 按键状态,0:按下、抬起按键无变化;1:按下、抬起按键的颜色变化,默认值0
  svg: "svg", //svg图片的地址
  hasMap: 1, //是否使用映射层算法，1表示使用;0表示不使用
  license:
    "aEJTbVZzTXZpSWZQWkIrUzJTZXF4MHNMa2dpeWxqUDF1V0xTNFMvck1WVjdNbHBtUjUwMUJBR09xSEFrMkl5Q3NJQUpqc05ucVJGVmtCS3M2U0Jzdko3NkNGWWIzMzMvZ3VQOUNRdHdKR3I2VWdjSFhaNzFHSlRGSVoyclJYRVE5QnlNT050VVY3WXUxOENndm1rcWtvL3BIOWhUOWJXOFYrOGxwQVR3elA0PXsiaWQiOjAsInR5cGUiOiJ0ZXN0IiwicGxhdGZvcm0iOjEwLCJub3RiZWZvcmUiOiIyMDIwMDEyMCIsIm5vdGFmdGVyIjoiMjAyMDA0MjAifQ==",
});
//映射表指定，也可以通过passGuard对象的mappurl属性指定后端url进行下发
passGuard.mapArr =
  "Wyc1NycsICc2MCcsICc4NycsICcxMTgnLCAnNTQnLCAnOTknLCAnNzAnLCAnNzMnLCAnMTExJywgJzc4JywgJzQ2JywgJzEwNycsICcxMjUnLCAnMTE3JywgJzY0JywgJzEwMScsICc4OScsICc1NScsICc0OScsICcxMjQnLCAnOTAnLCAnNTAnLCAnMTE0JywgJzEwNScsICcxMDgnLCAnOTcnLCAnMTE5JywgJzYzJywgJzQ0JywgJzUyJywgJzgyJywgJzM5JywgJzYxJywgJzY5JywgJzQ3JywgJzEwNCcsICc1MScsICc2OCcsICc3NCcsICc0NScsICc1MycsICc3MScsICczNycsICc1NicsICcxMDInLCAnMTIwJywgJzExNScsICcxMjYnLCAnMzMnLCAnMzYnLCAnMTEzJywgJzc3JywgJzkyJywgJzExMCcsICc4MCcsICc1OCcsICc0MCcsICc0MicsICc4MScsICc5OCcsICc0MScsICczOCcsICc3MicsICc2NScsICc4NicsICc5NicsICc5MScsICcxMjInLCAnMTIzJywgJzExNicsICc0OCcsICczNCcsICc5MycsICc3OScsICc1OScsICcxMDAnLCAnMTIxJywgJzY3JywgJzEwMycsICc5NCcsICc4NCcsICc3NicsICcxMTInLCAnODUnLCAnNjInLCAnODMnLCAnOTUnLCAnODgnLCAnMTA5JywgJzQzJywgJzY2JywgJzM1JywgJzc1JywgJzEwNidd";

const passGuard1 = new passGuard({
  mappurl: ENV_CONFIG.assetsUrl + "assets/send_mapping.jsp", //映射表下发地址，当kb对象的hasMap为1时生效，也可以通过passGuard.mapArr直接指定映射表
  maxLength: 12, // 允许输入的最大输入长度
  regExp1: "[\\S\\s]", // 输入过程限制的正则
  regExp2: "^[0-9]{6,12}$", // 输入完毕后待验证的正则，与函数getValid()对应
  displayMode: 0, // 显示形式,0:星号;1:明文,默认值0
  callBack: ()=>{
    console.log('正则regExp2成功时回调')
  }, //已输入的密码匹配正则regExp2成功时回调，键盘隐藏时回调此函数
  errorCallBack: ()=>{
    console.log('正则regExp2失败时回调')
  }, //已输入的密码匹配正则regExp2失败时回调，键盘隐藏时回调此函数
  focus: ()=>{
      console.log('获得焦点')
      $1.css("#kb1", { border: "1px solid red" });
  }, //H5键盘获取焦点回调此函数
  blur: ()=>{
      console.log('失去焦点')
      $1.css("#kb1", { border: "1px solid #000" });
  }, //H5键盘失去焦点回调此函数
  overHeight: "0", //远离输入框的距离（一般键盘都是在输入框的正下方，接口不写时默认为0）
  sm2KeyHex:
    "1093A047C5CBF48283EC7A210703F3FF9EA4448DC15D56B4CD82FCB27DAD2D45F2BB0BF953BCEBB635D9D34E473ECEFC9F25880EB1669F94DE050A29AC86F308",
  //RSA公钥
  rsaPublicKey:
    "3081890281810092d9d8d04fb5f8ef9b8374f21690fd46fdbf49b40eeccdf416b4e2ac2044b0cfe3bd67eb4416b26fd18c9d3833770a526fd1ab66a83ed969af74238d6c900403fc498154ec74eaf420e7338675cad7f19332b4a56be4ff946b662a3c2d217efbe4dc646fb742b8c62bfe8e25fd5dc59e7540695fa8b9cd5bfd9f92dfad009d230203010001", // rsa公钥
});
window.passGuard1 = passGuard1;
window.onload = function() {
  //清空密码键盘input框的值，防止缓存
  setTimeout(function() {
    //绘制密码键盘html标签
    kb.generate();
  }, 100);
};
export function initMicrodoneH5(id,type=1){
    console.log(3333)
    //初始化密码卫士,绑定键盘对象。数字参数：0代表全键盘，1代表数字键盘
    passGuard1.generate(id, kb, "passGuard1", type);
}