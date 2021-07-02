function New(fc) {
  let newObj = {};
  if (fc.prototype !== null) {
    newObj.__proto__ = fc.prototype;
  }
  let res = fc.apply(newObj, Array.prototype.slice.call(arguments, 1));
  // console.log(res)
  if ((typeof res === "object" || typeof res === "function") && res !== null) {
    return res;
  }
  return newObj;
}
function A() {
  return 1;
}
console.log(New(A));
// 等价于
console.log(new A());
