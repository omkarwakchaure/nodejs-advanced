function delayFn(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

async function delayed(name) {
  await delayFn(1000);
  console.log(`Hello, ${name}!`);
}

delayed("JavaScript");

async function division(num1, num2) {
  try {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  } catch (error) {
    return error;
  }
}

division(10, 0).then((result) => console.log(result));
division(10, 2).then((result) => console.log(result));
