// Receving the data from main file and executing the event handler
self.onmessage = (e) => {
  console.log(e.data);

  let result = 0;

  for (let i = 0; i <= 1000000000; i++) {
    result += i;
  }

  // Sending back the data to the main file
  self.postMessage(result);
};
