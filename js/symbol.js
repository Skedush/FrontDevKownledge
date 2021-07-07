let genericSymbol = Symbol();
let otherGenericSymbol = Symbol();
let fooSymbol = Symbol("foo");
let otherFooSymbol = Symbol("foo");
console.log(genericSymbol == otherGenericSymbol); // false
console.log(fooSymbol == otherFooSymbol); // false

let genericSymbol = Symbol();
console.log(genericSymbol); // Symbol()
let fooSymbol = Symbol("foo");
console.log(fooSymbol); // Symbol(foo);

/*-------不能new--------*/
let myBoolean = new Boolean();
console.log(typeof myBoolean); // "object"
let myString = new String();
console.log(typeof myString); // "object"
let myNumber = new Number();
console.log(typeof myNumber); // "object"
let mySymbol = new Symbol(); // TypeError: Symbol is not a constructor

/*-------符号包装对象--------*/
let mySymbol = Symbol();
let myWrappedSymbol = Object(mySymbol);
console.log("myWrappedSymbol: ", myWrappedSymbol);
console.log(typeof myWrappedSymbol); // "object"

/*-------使用全局符号注册表--------*/
let fooGlobalSymbol = Symbol.for("foo"); // 创建新符号
let otherFooGlobalSymbol = Symbol.for("foo"); // 重用已有符号
console.log(fooGlobalSymbol === otherFooGlobalSymbol); // true

let emptyGlobalSymbol = Symbol.for();
console.log(emptyGlobalSymbol); // Symbol(undefined)

/*-------查询全局注册表--------*/
// 创建全局符号
let s = Symbol.for("foo");
console.log(Symbol.keyFor(s)); // foo
// 创建普通符号
let s2 = Symbol("bar");
console.log(Symbol.keyFor(s2)); // undefined
//如果传给 Symbol.keyFor()的不是符号，则该方法抛出 TypeError:
Symbol.keyFor(123); // TypeError: 123 is not a symbol

/*-------使用符号作为属性--------*/
let s1 = Symbol("foo"),
  s2 = Symbol("bar"),
  s3 = Symbol("baz"),
  s4 = Symbol("qux");
let o = {
  [s1]: "foo val",
};
// 这样也可以:o[s1] = 'foo val';
console.log(o);
// {Symbol(foo): foo val}
Object.defineProperty(o, s2, { value: "bar val" });
console.log(o);
// {Symbol(foo): foo val, Symbol(bar): bar val}
Object.defineProperties(o, {
  [s3]: { value: "baz val" },
  [s4]: { value: "qux val" },
});
console.log(o);
// {Symbol(foo): foo val, Symbol(bar): bar val,
// Symbol(baz): baz val, Symbol(qux): qux val}

/*-------获取对象常规属性和符号属性--------*/
let s1 = Symbol("foo"),
  s2 = Symbol("bar");
let o = {
  [s1]: "foo val",
  [s2]: "bar val",
  baz: "baz val",
  qux: "qux val",
};
console.log(Object.getOwnPropertySymbols(o)); // [Symbol(foo), Symbol(bar)]
console.log(Object.getOwnPropertyNames(o)); // ["baz", "qux"]
console.log(Object.getOwnPropertyDescriptors(o));
// {baz: {...}, qux: {...}, Symbol(foo): {...}, Symbol(bar): {...}}
console.log(Reflect.ownKeys(o));
// ["baz", "qux", Symbol(foo), Symbol(bar)]

/*-------查找对象常的符号属性--------*/
let o = {
  [Symbol("foo")]: "foo val",
  [Symbol("bar")]: "bar val",
};
console.log(o);
// {Symbol(foo): "foo val", Symbol(bar): "bar val"}
let barSymbol = Object.getOwnPropertySymbols(o).find((symbol) =>
  symbol.toString().match(/bar/)
);
console.log(barSymbol); // Symbol(bar)

/*-------异步迭代器--------*/
class Foo {
  async *[Symbol.asyncIterator]() {}
}
let f = new Foo();
console.log(f[Symbol.asyncIterator]());
// AsyncGenerator {<suspended>}

class Emitter {
  constructor(max) {
    this.max = max;
    this.asyncIdx = 0;
  }
  async *[Symbol.asyncIterator]() {
    while (this.asyncIdx < this.max) {
      yield new Promise((resolve) => resolve(this.asyncIdx++));
    }
  }
}
async function asyncCount() {
  let emitter = new Emitter(5);
  for await (const x of emitter) {
    console.log(x);
  }
}
asyncCount();
// 0
// 1
// 2
// 3 // 4
