/*-------一元加---------*/
let s1 = "01";
let s2 = "1.1";
let s3 = "z";
let b = false;
let f = 1.1;
let o = {
  valueOf() {
    return -1;
  },
};
s1 = +s1; // 值变成数值1
s2 = +s2; // 值变成数值1.1
s3 = +s3; // 值变成NaN
b = +b; // 值变成数值 0
f = +f; // 不变，还是 1.1
o = +o; // 值变成数值-1

/*-------一元减---------*/
let num = 25;
num = -num;
console.log(num); // -25

let s1 = "01";
let s2 = "1.1";
let s3 = "z";
let b = false;
let f = 1.1;
let o = {
  valueOf() {
    return -1;
  },
};
s1 = -s1; // 值变成数值-1
s2 = -s2; // 值变成数值-1.1
s3 = -s3; // 值变成NaN
b = -b; // 值变成数值 0
f = -f; // 变成-1.1
o = -o; // 值变成数值 1
