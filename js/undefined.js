/**包含 undefined 值的变量跟未定义变量是有区别-------- */
let message; // 这个变量被声明了，只是值为undefined
// 确保没有声明过这个变量
// let age
console.log(message); // "undefined"
console.log(age); // 报错

/**未初始化的变量与为声明的变量调用 typeo */
let message; // 这个变量被声明了，只是值为undefined
// 确保没有声明过这个变量
// let age
console.log(typeof message); // "undefined"
console.log(typeof age); // "undefined"

/**初始化与未声明条件判断 */
let message; // 这个变量被声明了，只是值为undefined
// age 没有声明
if (message) {
  // 这个块不会执行
}
if (!message) {
  // 这个块会执行
}
if (age) {
  // 这里会报错
}
