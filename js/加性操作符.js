let result1 = 5 + 5; // 两个数值
console.log(result1); // 10
let result2 = 5 + "5"; // 一个数值和一个字符串
console.log(result2); // "55"

let num1 = 5;
let num2 = 10;
let message = "The sum of 5 and 10 is " + num1 + num2;
console.log(message); // "The sum of 5 and 10 is 510"

let num1 = 5;
let num2 = 10;
let message = "The sum of 5 and 10 is " + (num1 + num2);
console.log(message); // "The sum of 5 and 10 is 15"

let result1 = 5 - true; // true被转换为1，所以结果是4
let result2 = NaN - 1; // NaN
let result3 = 5 - 3; //2
let result4 = 5 - ""; // ""被转换为0，所以结果是5
let result5 = 5 - "2"; // "2"被转换为2，所以结果是3
let result6 = 5 - null; // null被转换为0，所以结果是5
