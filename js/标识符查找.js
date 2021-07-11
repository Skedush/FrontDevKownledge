/**------------标识符搜索------------ */
var color = "blue";
function getColor() {
  return color;
}
console.log(getColor()); // 'blue'
/**第一步，搜索 getColor()的变量对象，查找名为 color 的标识符。结果没找到，
  于是继续搜索下一 个变量对象(来自全局上下文)，然后就找到了名为 color 的标识符。 */

/**------------引用最近的上下文标识------------ */
var color = "blue";
function getColor() {
  let color = "red";
  {
    let color = "green";
    return color;
  }
}
console.log(getColor()); // 'green'
