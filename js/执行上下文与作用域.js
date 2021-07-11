/**------------作用域链------------ */
var color = "blue";
function changeColor() {
  if (color === "blue") {
    color = "red";
  } else {
    color = "blue";
  }
}
changeColor();

/**------------局部作用域中定义的变量在局部上下文中替换全局变量------------ */
var color = "blue";
function changeColor() {
  let anotherColor = "red";
  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    // 这里可以访问color、anotherColor和tempColor
  }
  // 这里可以访问color和anotherColor，但访问不到tempColor
  swapColors();
}
// 这里只能访问color
changeColor();

/**------------作用域增强------------ */
function buildUrl() {
  let qs = "?debug=true";
  with (location) {
    let url = href + qs;
  }
  return url;
}

/**------------var 的函数作用域声明------------ */
function add(num1, num2) {
  var sum = num1 + num2;
  return sum;
}
let result = add(10, 20); // 30
console.log(sum); // 报错:sum 在这里不是有效变量

/**------------省略var变成全局上下文的变量------------ */
function add(num1, num2) {
  sum = num1 + num2;
  return sum;
}
let result = add(10, 20); // 30 console.log(sum); // 30

/**------------var变量提升------------ */
var myName = "Jake";
// 等价于:
var myName;
myName = "Jake";
//下面是两个等价的函数:
function fn1() {
  var myName = "Jake";
}
// 等价于:
function fn2() {
  var myName;
  myName = "Jake";
}
//通过在声明之前打印变量，可以验证变量会被提升。声明的提升意味着会输出 undefined 而不是 Reference Error:
console.log(myName); // undefined
var myName = "Jake";
function fn3() {
  console.log(myName); // undefined
  var myName = "Jake";
}

/**------------let块级作用域------------ */
if (true) {
  let a;
}
console.log(a); // ReferenceError: a 没有定义
while (true) {
  let b;
}
console.log(b); // ReferenceError: b 没有定义
function foo() {
  let c;
}
console.log(c); // ReferenceError: c 没有定义
// 这没什么可奇怪的
// var 声明也会导致报错
// 这不是对象字面量，而是一个独立的块
// JavaScript 解释器会根据其中内容识别出它来
{
  let d;
}
console.log(d); // ReferenceError: d 没有定义

/**------------let不能重复声明------------ */
var a;
var a;
// 不会报错
{
  let b;
  let b;
}
// SyntaxError: 标识符 b 已经声明过了

/**------------var会泄漏到循环外部let不会------------ */
for (var i = 0; i < 10; ++i) {}
console.log(i); // 10
for (let j = 0; j < 10; ++j) {}
console.log(j); // ReferenceError: j 没有定义
