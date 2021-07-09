let result = "Brick" < "alphabet"; // true
let result = "Brick".toLowerCase() < "alphabet".toLowerCase(); // false
let result = "23" < "3"; // true
let result = "23" < 3; // false
let result = "a" < 3; // 因为"a"会转换为NaN，所以结果是false
let result1 = NaN < 3; // false
let result2 = NaN >= 3; // false
