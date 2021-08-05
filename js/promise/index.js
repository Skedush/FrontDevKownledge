new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  });
}).then(
  (value) => {
    console.log(value);
  },
  (reason) => {
    console.log(reason);
  }
);
