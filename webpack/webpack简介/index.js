// 不能import es6语法浏览器不能识别，需要使用webpack打包成es5语法
//引入样式资源
import $ from "jquery";
//引入样式资源
import "./index.less";
$("#title").click(() => {
  $("body").css("backgroundColor", "deeppink");
});
