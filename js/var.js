//var
var message = "hi";
message = 100; // 合法，但不推荐改变变量保存值的类型

/*----------------*/
//作用域
function test() {
  var message = "hi"; // 局部变量
}
test();
console.log(message); // 出错!

/*----------------*/
function test() {
  message = "hi"; // 全局变量
}
test();
console.log(message); // "hi"

/*-------定义多个变量---------*/
var message = "hi",
  found = false,
  age = 29;

/*-------  var 声明提升---------*/
//使用这个关键字声明的变量会自动提升到函数作用域顶部
function foo() {
  console.log(age);
  var age = 26;
}
foo(); // undefined

/*-------上面等于这个---------*/
function foo() {
  var age;
  console.log(age);
  age = 26;
}
foo(); // undefined

/*-------多次声明也没有关系---------*/
function foo() {
  var age = 16;
  var age = 26;
  var age = 36;
  console.log(age);
}
foo(); // 36
