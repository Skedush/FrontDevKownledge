let name1 = "Nicholas";
let name2 = new String("Matt");
name1.age = 27;
name2.age = 26;
console.log(name1.age); // undefined
console.log(name2.age); // 26
console.log(typeof name1); // string
console.log(typeof name2); // object

/**------------函数传递参数------------ */
function addTen(num) {
  num += 10;
  return num;
}
let count = 20;
let result = addTen(count);
console.log(count); // 20，没有变化
console.log(result); // 30

function setName(obj) {
  obj.name = "Nicholas";
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"

/**------------函数对象值传递证明------------ */

function setName(obj) {
  obj.name = "Nicholas";
  obj = new Object();
  obj.name = "Greg";
}
let person = new Object();
setName(person);
console.log(person.name); // "Nicholas"
