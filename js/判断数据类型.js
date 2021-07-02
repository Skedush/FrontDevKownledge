typeof ""; //string
typeof 1; //number
typeof false; //boolean
typeof undefined; //undefined
typeof function () {}; //function
typeof {}; //object
typeof Symbol(); //symbol
typeof null; //object
typeof []; //object
typeof new Date(); //object
typeof new RegExp(); //object

//直接量不能使用instanceof的。instanceof的用途是判断一个对象是否在某个对象原型链上。或者说判断一个对象是某个对象的实例。
//只有经过显示的实例化转化，才能进行判断。
"123" instanceof String; //false
true instanceof Boolean; //false
1 instanceof Number; //false
new String(123) instanceof String; //true
//当然，数组这种引用类型的数据则可以直接进行判断。
[] instanceof Array; //true
({} instanceof Object); //true
[] instanceof Object; //true

function instance(left, right) {
  let prototype = right.prototype; //获取类型的原型
  let proto = left.__proto__; //获取对象的原型
  while (true) {
    //循环判断对象的原型是否等于类型的原型，直到对象原型为null，因为原型链最终为null
    if (proto === null || proto === undefined) {
      return false;
    }
    if (proto === prototype) {
      return true;
    }
    proto = proto.__proto__;
  }
}
console.log(instance({}, Object)); //true
console.log(instance([], Number)); //false

var o = {};
o.constructor == Object; //true
var arr = [];
arr.constructor == Array; //true
arr.constructor == Object; //false
//可以看出constructor可以区分Array和Object。
var n = true;
n.constructor == Boolean; //true
var num = 1;
num.constructor == Number; //true
var str = "hello world";
str.constructor == String; //true
var num = new Number();
num.constructor == Number; //true
//不过要注意，constructor属性是可以被修改的，会导致检测出的结果不正确

//Object.prototype.toString.call()最好用
Object.prototype.toString.call(123);
//"[object Number]"

Object.prototype.toString.call("str");
//"[object String]"

Object.prototype.toString.call(true);
//"[object Boolean]"

Object.prototype.toString.call({});
//"[object Object]"

Object.prototype.toString.call([]);
//"[object Array]"
Object.prototype.toString.call(null);
//"[object Null]"
