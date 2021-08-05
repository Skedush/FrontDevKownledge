/**-----------Date.parse------------ */
let someDate = new Date(Date.parse("May 23, 2019"));
//Date构造方法会隐式调用Date.parse
let someDate = new Date("May 23, 2019");

/**-----------Date.UTC------------ */
// GMT时间2000年1月1日零点
let y2k = new Date(Date.UTC(2000, 0));
// GMT时间2005年5月5日下午5点55分55秒
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55)); //2005-05-05T17:55:55.000Z
//Date构造方法会隐式调用Date.UTC
// 本地时间2000年1月1日零点
let y2k = new Date(2000, 0); // 1999-12-31T16:00:00.000Z
// 本地时间2005年5月5日下午5点55分55秒
let allFives = new Date(2005, 4, 5, 17, 55, 55); //2005-05-05T09:55:55.000Z
