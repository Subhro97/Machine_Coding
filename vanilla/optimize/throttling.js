function printName() {
  const val = document.querySelector("#input").value;

  console.log(val);
}

function throttling(func, delay) {
  let flag = true;

  return function () {
    if (flag) {
      flag = false;

      func();

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const optimizedFunc = throttling(printName, 1000);

document.querySelector("#input").addEventListener("keyup", optimizedFunc);
