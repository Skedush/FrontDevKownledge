/**------------引用计数管理内存的问题(Netscape Navigator 3.0)------------ */
function problem() {
  let objectA = new Object();
  let objectB = new Object();
  objectA.someOtherObject = objectB;
  objectB.anotherObject = objectA;
}

/**------------IE8 及更早版本BOM与DOM组件对象模型循环引用问题------------ */
let element = document.getElementById("some_element");
let myObject = new Object();
myObject.element = element;
element.someObject = myObject;

/**------------内存管理------------ */
function createPerson(name) {
  let localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}
let globalPerson = createPerson("Nicholas"); // 解除 globalPerson 对值的引用
globalPerson = null;

/**------------V8 javascript隐藏类优化------------ */
//本来是用一个隐藏类，单对a2赋值之后这在V8引擎中会产生2个隐藏类导致性能降低
function Article() {
  this.title = "Inauguration Ceremony Features Kazoo Band";
}
let a1 = new Article();
let a2 = new Article();
a2.author = "Jake";

/**------------一次性声明所有属性优化隐藏类------------ */
function Article(opt_author) {
  this.title = "Inauguration Ceremony Features Kazoo Band";
  this.author = opt_author;
}
let a1 = new Article();
let a2 = new Article("Jake");

/**------------delete导致生成相同隐藏类片段------------ */
//本来是用一个隐藏类，但是删除导致产生2个隐藏类导致性能降低
function Article() {
  this.title = "Inauguration Ceremony Features Kazoo Band";
  this.author = "Jake";
}
let a1 = new Article();
let a2 = new Article();
delete a1.author;

/**------------应该不使用delete而是将属性设为null------------ */
function Article() {
  this.title = "Inauguration Ceremony Features Kazoo Band";
  this.author = "Jake";
}
let a1 = new Article();
let a2 = new Article();
a1.author = null;

/**------------定时器内存泄漏------------ */
let myName = "Jake";
setInterval(() => {
  console.log(myName);
}, 100);

/**-----------闭包存泄漏------------ */
let outer = function () {
  let name = "Jake";
  return function () {
    return name;
  };
};

/**-----------不要动态创建对象优化性能------------ */
//函数生命周期短，resultant成为垃圾，矢量加法函数频繁被调用会加快垃圾回收调度
function addVector(a, b) {
  let resultant = new Vector();
  resultant.x = a.x + b.x;
  resultant.y = a.y + b.y;
  return resultant;
}

/**-----------使用一个已有的矢量对象------------ */
function addVector(a, b, resultant) {
  resultant.x = a.x + b.x;
  resultant.y = a.y + b.y;
  return resultant;
}

/**-----------使用一个已有的矢量对象------------ */
// vectorPool 是已有的对象池
let v1 = vectorPool.allocate();
let v2 = vectorPool.allocate();
let v3 = vectorPool.allocate();
v1.x = 10;
v1.y = 5;
v2.x = -3;
v2.y = -6;
addVector(v1, v2, v3);
console.log([v3.x, v3.y]); // [7, -1]
vectorPool.free(v1);
vectorPool.free(v2);
vectorPool.free(v3);
// 如果对象有属性引用了其他对象
// 则这里也需要把这些属性设置为null
v1 = null;
v2 = null;
v3 = null;

/**-----------避免动态分配操作,开始就创建够用的数组------------ */
// 这会导致删除原来的数组，创建一个更大的数组
let vectorList = new Array(100);
let vector = new Vector();
vectorList.push(vector);
