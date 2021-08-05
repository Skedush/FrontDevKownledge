class Promise {
  constructor(executor) {
    //不能相信用户的输入
    if (typeof executor !== "function") {
      throw new TypeError(`Promise resolver ${executor} is not a function `);
    }
    this.value = null; //终值
    this.reason = null; //拒因
    this.state = "pending"; //状态

    const resolve = function (value) {
      //成功后的操作(状态的改变，成功回调的执行)
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
      }
    };
    const reject = function (reason) {
      //失败后的操作（状态的改变，失败回调的执行）
      if (this.state === "pending") {
        this.state = "rejected";
        this.reason = reason;
      }
    };
    executor(resolve, reject);
  }
}

module.exports = Promise;
