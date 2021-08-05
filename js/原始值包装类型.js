/**-----------原始值特殊引用类型------------ */
let s1 = "some text";
let s2 = s1.substring(2); //创建了原始值包装类型对象，调用方法，再销毁原始值包装类型对象
//相当于-->
let s1 = new String("some text");
let s2 = s1.substring(2);
s1 = null;

/**-----------原始值特殊引用类型------------ */
let s1 = "some text";
s1.color = "red"; //创建了原始值包装类型对象，给原始值包装类型对象添加属性，再销毁原始值包装类型对象
console.log(s1.color); // undefined 又创建了原始值包装类型对象，但是这个对象没有color属性

/**-----------Object 构造函数根据传入值的类型返回相应原始值包装类型的实例------------ */
let obj = new Object("some text");
console.log(obj instanceof String); // true

/**-----------new 调用原始值包装类型的构造函数，与调用同名的转型函数区别------------ */
let value = "25";
let number = Number(value); // 转型函数
console.log(typeof number); // "number"
let obj = new Number(value); // 构造函数
console.log(typeof obj); // "object"

/**-----------使用Boolean对象容易引起误会------------ */
let falseObject = new Boolean(false); //这是一个Boolean对象
let result = falseObject && true; //所有对象在布尔表达式中都会自动转换成true
console.log(result); // true
let falseValue = false;
result = falseValue && true;
console.log(result); // false

console.log(typeof falseObject); // object
console.log(typeof falseValue); // boolean
console.log(falseObject instanceof Boolean); // true
console.log(falseValue instanceof Boolean); // false

/**-----------Number 类型------------ */
let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"

/**-----------toFixed()方法------------ */
let num = 10;
console.log(num.toFixed(2)); // "10.00"

let num = 10.005;
console.log(num.toFixed(2)); // "10.01"

/**-----------toExponential()方法------------ */
let num = 10;
console.log(num.toExponential(1)); // "1.0e+1"

/**-----------toPrecision()方法------------ */
let num = 99;
console.log(num.toPrecision(1)); // "1e+2"
console.log(num.toPrecision(2)); // "99"
console.log(num.toPrecision(3)); // "99.0"

/**-----------Number的原始数值和引用数值------------ */
let numberObject = new Number(10);
let numberValue = 10;
console.log(typeof numberObject); // "object"
console.log(typeof numberValue); // "number"
console.log(numberObject instanceof Number); // true
console.log(numberValue instanceof Number); // false

/**-----------Number.isInteger()方法------------ */
console.log(Number.isInteger(1)); // true
console.log(Number.isInteger(1.0)); // true
console.log(Number.isInteger(1.01)); // false

/**-----------Number.isSafeInteger()方法------------ */
console.log(Number.isSafeInteger(-1 * 2 ** 53)); // false
console.log(Number.isSafeInteger(-1 * 2 ** 53 + 1)); // true
console.log(Number.isSafeInteger(2 ** 53)); // false
console.log(Number.isSafeInteger(2 ** 53 - 1)); // true

/**-----------String.charAt()方法------------ */
let message = "abcde";
console.log(message.charAt(2)); // "c"

/**-----------String.charCodeAt()方法------------ */
let message = "abcde";
// Unicode "Latin small letter C"的编码是U+0063
console.log(message.charCodeAt(2)); // 99
// 十进制99等于十六进制63
console.log(99 === 0x63); // true

/**-----------String.fromCharCode()方法------------ */
// Unicode "Latin small letter A"的编码是U+0061
// Unicode "Latin small letter B"的编码是U+0062
// Unicode "Latin small letter C"的编码是U+0063
// Unicode "Latin small letter D"的编码是U+0064
// Unicode "Latin small letter E"的编码是U+0065
console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65)); // "abcde"
// 0x0061 === 97
// 0x0062 === 98
// 0x0063 === 99
// 0x0064 === 100
// 0x0065 === 101
console.log(String.fromCharCode(97, 98, 99, 100, 101)); // "abcde"

/**-----------代理对------------ */
// "smiling face with smiling eyes" 表情符号的编码是 U+1F60A // 0x1F60A === 128522
let message = "ab☺de";
console.log(message.length); // 6
console.log(message.charAt(1)); // b
console.log(message.charAt(2)); // <?>
console.log(message.charAt(3)); // <?>
console.log(message.charAt(4)); // d
console.log(message.charCodeAt(1)); // 98
console.log(message.charCodeAt(2)); // 55357
console.log(message.charCodeAt(3)); // 56842
console.log(message.charCodeAt(4)); // 100
console.log(String.fromCodePoint(0x1f60a)); // ☺
console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab☺de

/**-----------String.codePointAt()------------ */
let message = "ab☺de";
console.log(message.codePointAt(1)); // 98
console.log(message.codePointAt(2)); // 128522
console.log(message.codePointAt(3)); // 56842 码元索引并非代理对的开头，就会返回错误的码点
console.log(message.codePointAt(4)); // 100

console.log([..."ab☺de"]); // ["a", "b", "☺", "d", "e"]   // 使用码元数遍历字符串来规避

/**-----------String.fromCodePoint()------------ */

console.log(String.fromCharCode(97, 98, 55357, 56842, 100, 101)); // ab☺de
console.log(String.fromCodePoint(97, 98, 128522, 100, 101)); // ab☺de
