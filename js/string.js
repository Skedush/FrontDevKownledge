let firstName = "John";
let lastName = "Jacob";
let lastName2 = `Jingleheimerschmidt`;
let text = "This is the letter sigma: \u03a3.";
console.log(text.length); //28

/*-------字符串是不可变的(immutable)---------*/
let lang = "Java";
lang = lang + "Script";

/*-------转换为字符串---------*/
let age = 11;
let ageAsString = age.toString(); // 字符串"11"
let found = true;
let foundAsString = found.toString(); // 字符串"true"

/*-------toString()底数参数---------*/
let num = 10;
console.log(num.toString()); // "10"
console.log(num.toString(2)); // "1010"
console.log(num.toString(8)); // "12"
console.log(num.toString(10)); // "10"
console.log(num.toString(16)); // "a"

/*-------String()转型函数可以转null和undefined---------*/
let value1 = 10;
let value2 = true;
let value3 = null;
let value4;
console.log(String(value1)); // "10"
console.log(String(value2)); // "true"
console.log(String(value3)); // "null"
console.log(String(value4)); // "undefined"

/*-------模板字面量定义字符串---------*/
let myMultiLineString = "first line\nsecond line";
let myMultiLineTemplateLiteral = `first line
second line`;
console.log(myMultiLineString);
// first line
// second line"
console.log(myMultiLineTemplateLiteral);
// first line
// second line"
console.log(myMultiLineString === myMultiLineTemplateLiteral); // true

/*-------模板字面量定义模板---------*/
let pageHTML = `
<div>
    <a href="#">
        <span>Jake</span>
    </a>
</div>`;

// 这个模板字面量在换行符之后有 25 个空格符
let myTemplateLiteral = `first line
                         second line`;
console.log(myTemplateLiteral.length); // 47

// 这个模板字面量以一个换行符开头
let secondTemplateLiteral = `
first line
second line`;
console.log(secondTemplateLiteral[0] === "\n"); // true

// 这个模板字面量没有意料之外的字符
let thirdTemplateLiteral = `first line
second line`;
console.log(thirdTemplateLiteral);
// first line
// second line

/*-------字符串插值--------*/
let value = 5;
let exponent = "second";
// 以前，字符串插值是这样实现的:
let interpolatedString =
  value + " to the " + exponent + " power is " + value * value;
// 现在，可以用模板字面量这样实现:
let interpolatedTemplateLiteral = `${value} to the ${exponent} power is ${
  value * value
}`;
console.log(interpolatedString); // 5 to the second power is 25
console.log(interpolatedTemplateLiteral); // 5 to the second power is 25

/*-------字符串插值可以调用函数和方法--------*/

function capitalize(word) {
  return `${word[0].toUpperCase()}${word.slice(1)}`;
}
console.log(`${capitalize("hello")}, ${capitalize("world")}!`); // Hello, World!

/*-------模板插值--------*/
let value = "";
function append() {
  value = `${value}abc`;
  console.log(value);
}
append(); // abc
append(); // abcabc
append(); // abcabcabc

/*-------模板字面量标签函数--------*/
let a = 6;
let b = 9;
function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
  console.log(strings);
  console.log(aValExpression);
  console.log(bValExpression);
  console.log(sumExpression);
  return "foobar";
}
let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15
console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "foobar"

/*-------通过剩余操作符收集--------*/
let a = 6;
let b = 9;
function simpleTag(strings, ...expressions) {
  console.log(strings);
  for (const expression of expressions) {
    console.log(expression);
  }
  return "foobar";
}
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15
console.log(taggedResult); // "foobar"

/*-------获得表达式求值的结果拼接--------*/
let a = 6;
let b = 9;
function zipTag(strings, ...expressions) {
  return (
    strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join("")
  );
}
let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = zipTag`${a} + ${b} = ${a + b}`;
console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "6 + 9 = 15"

/*-------原始字符串--------*/
// Unicode 示例
// \u00A9 是版权符号
console.log(`\u00A9`); // ©
console.log(String.raw`\u00A9`); // \u00A9

// 换行符示例
console.log(`first line\nsecond line`); // first line
// second line
console.log(String.raw`first line\nsecond line`); // "first line\nsecond line"
// 对实际的换行符来说是不行的
// 它们不会被转换成转义序列的形式
console.log(`first line
second line`);
// first line
// second line
console.log(String.raw`first line second line`);
// first line
// second line

/*-------标签函数获取原始字符串--------*/
function printRaw(strings) {
  console.log("Actual characters:");
  for (const string of strings) {
    console.log(string);
  }
  console.log("Escaped characters;");
  for (const rawString of strings.raw) {
    console.log(rawString);
  }
}
printRaw`\u00A9${"and"}\n`;
// Actual characters:
// ©
//(换行符)
// Escaped characters:
// \u00A9
// \n
