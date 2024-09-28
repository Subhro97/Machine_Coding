const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");

const firstData = document.querySelector(".first-data");
const secondData = document.querySelector(".second-data");

const btn1v2 = document.querySelector(".btn1-v2");
const btn2v2 = document.querySelector(".btn2-v2");

const firstdatav2 = document.querySelector(".first-data-v2");
const seconddatav2 = document.querySelector(".second-data-v2");

btn1.addEventListener("click", (e) => {
  let result = 0;

  // Complutationally Heavy Code blocking Main thread
  for (let i = 0; i <= 1000000000; i++) {
    result += i;
  }

  firstData.textContent = result;
});

btn2.addEventListener("click", (e) => {
  secondData.textContent = "HI!";
});

btn1v2.addEventListener("click", (e) => {
  // Outsourcing the computational heavy code to the web worker
  const worker = new Worker("worker.js");

  // Sending the data and triggering the worker thread to execute code
  worker.postMessage("Start Worker");

  // Receiving the result from the worker event handler
  worker.onmessage = (e) => {
    firstdatav2.textContent = e.data;
  };
});

btn2v2.addEventListener("click", (e) => {
  seconddatav2.textContent = "HI!";
});
