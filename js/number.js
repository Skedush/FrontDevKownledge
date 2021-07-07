/*-------八进制---------*/
let octalNum1 = 070; // 八进制的56
let octalNum2 = 0o77; // 八进制的56
let octalNum3 = 079; //无效的八进制值，当成79处理
let octalNum4 = 08; // 无效的八进制值，当成 8 处理

/*-------十进制---------*/
let hexNum1 = 0xa; // 十六进制10
let hexNum2 = 0x1f; // 十六进制31

/*-------浮点值---------*/
let floatNum1 = 1.1;
let floatNum2 = 0.1;
//let floatNum3 = .1; // 有效，但不推荐

/*-------自动转整数---------*/
let floatNum4 = 1; // 小数点后面没有数字，当成整数 1 处理
let floatNum5 = 10.0; // 小数点后面是零，当成整数 10 处理

/*-------科学记数法---------*/
let floatNum = 3.125e7; // 等于31250000

/*-------特定的浮点值舍入错误---------*/
let a = 0.1,
  b = 0.2;
console.log(a + b); //0.30000000000000004
if (a + b == 0.3) {
  // 别这么干!
  console.log("You got 0.3.");
}

/*-------确定一个值是不是有限大---------*/
let result = Number.MAX_VALUE + Number.MAX_VALUE;
console.log(isFinite(result)); // false

/*-------NaN特性---------*/
console.log(0 / 0); // NaN
console.log(-0 / +0); // NaN
console.log(5 / 0); // Infinity
console.log(5 / -0); // -Infinity
console.log(NaN == NaN); // false
console.log(isNaN(NaN)); // true
console.log(isNaN(10)); // false，10 是数值
console.log(isNaN("10")); // false，可以转换为数值10
console.log(isNaN("blue")); // true，不可以转换为数值
console.log(isNaN(true)); // false，可以转换为数值1

/*-------Number()数值转换---------*/
let num1 = Number("Hello world!"); // NaN
let num2 = Number(""); //0
let num3 = Number("000011"); // 11
let num4 = Number(true); //1
let test = Number({ a: "123" }); //NaN

/*-------parseInt()数值转换---------*/
let num1 = parseInt("1234blue"); // 1234
let num2 = parseInt(""); // NaN
let num3 = parseInt("0xA"); // 10，解释为十六进制整数
let num4 = parseInt(22.5); // 22
let num5 = parseInt("70"); // 70，解释为十进制值
let num6 = parseInt("0xf"); // 15，解释为十六进制整数
let num = parseInt("0xAF", 16); // 175

let num7 = parseInt("AF", 16); // 175
let num8 = parseInt("AF"); // NaN

let num9 = parseInt("10", 2); // 2，按二进制解析
let num10 = parseInt("10", 8); // 8，按八进制解析
let num11 = parseInt("10", 10); // 10，按十进制解析
let num12 = parseInt("10", 16); // 16，按十六进制解析

/*-------parseFloat()数值转换---------*/
let num1 = parseFloat("1234blue"); // 1234，按整数解析
let num2 = parseFloat("0xA"); // 0
let num3 = parseFloat("22.5"); // 22.5
let num4 = parseFloat("22.34.5"); // 22.34
let num5 = parseFloat("0908.5"); // 908.5
let num6 = parseFloat("3.125e7"); // 31250000
