/*-------const 的行为与 let 基本相同但是它是常量，声明必须赋值且不允许修改---------*/
const age = 26;
age = 36; // TypeError: 给常量赋值
// const 也不允许重复声明
const name = "Matt";
const name = "Nicholas"; // SyntaxError
// const 声明的作用域也是块 const name = 'Matt';
if (true) {
  const name = "Nicholas";
}
console.log(name); // Matt

/*-------const限制只适用于它指向的变量的引用---------*/
const person = {};
person.name = "Matt"; // ok

/*-------const不能声明迭代变量---------*/
for (const i = 0; i < 10; ++i) {} // TypeError:给常量赋值

/*-------const可以声明一个不会被修改的 for 循环变量---------*/
let i = 0;
for (const j = 7; i < 5; ++i) {
  console.log(j);
}
// 7, 7, 7, 7, 7
for (const key in { a: 1, b: 2 }) {
  console.log(key);
}
// a, b
for (const value of [1, 2, 3, 4, 5]) {
  console.log(value);
}
// 1, 2, 3, 4, 5
