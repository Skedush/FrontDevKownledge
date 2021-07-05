/*---------作用域限制--------*/
if (true) {
  var myName = "Matt";
  console.log(myName); // Matt
}
console.log(myName); // Matt

if (true) {
  let age = 26;
  console.log(age);
}
console.log(age);
// 26
// ReferenceError: age 没有定义

/*-------同一个块作用域中出现冗余声明---------*/
var name;
var name;
let age;
let age; //SyntaxError;标识符age已经声明过了

/*-------嵌套使用相同的标识符---------*/
var myname = "Nicholas";
console.log(myname); // 'Nicholas' if (true) {
var myname = "Matt";
console.log(myname); // 'Matt' }

let age = 30;
console.log(age); // 30
if (true) {
  let age = 26;
  console.log(age); // 26
}

/*-------声明冗余报错---------*/
var name;
let name; // SyntaxError
let age;
var age; // SyntaxError

/*-------let不会变量提升---------*/
// myName 会被提升
console.log(myName); // undefined
var myName = "Matt";
// age 不会被提升
console.log(age); // ReferenceError:age 没有定义
let age = 26;

/*-------关于是否成为 window 对象---------*/
var name = "Matt";
console.log(window.name); // 'Matt'
let age = 26;
console.log(window.age); // undefined

/*-------var声明的迭代变量会渗透到循环体外部---------*/
for (var i = 0; i < 5; ++i) {
  // 循环逻辑
}
console.log(i); // 5

/*-------let声明的迭代变量不会渗透到循环体外部---------*/
for (let i = 0; i < 5; ++i) {
  // 循环逻辑
}
console.log(i); // ReferenceError: i 没有定义

/*-------迭代变量的奇特声明和修改---------*/
for (var i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// 你可能以为会输出0、1、2、3、4 // 实际上会输出5、5、5、5、5
for (let i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0);
}
// 会输出0、1、2、3、4
