function printName() {
  const val = document.querySelector("#input").value;

  console.log(val);
}

function debounce(func, delay) {
  let timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func();
    }, delay);
  };
}

const optimizedFunc = debounce(printName, 300);

document.querySelector("#input").addEventListener("keyup", optimizedFunc);
