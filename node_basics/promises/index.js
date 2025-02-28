function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
console.log("Promise lecture starts");

delayFn(2000).then(() => console.log("after 2 seconds promise resolved"));

console.log("Promise lecture ends");

function divideFn(num1, num2) {
  return new Promise((res, rej) => {
    if (num2 === 0) {
      rej("Cannot divide by zero");
    } else {
      res(num1 / num2);
    }
  });
}

divideFn(10, 2)
  .then((result) => console.log(result, "res"))
  .catch((err) => console.log(err, "err"));
