function makeBitonic(arr) {
  // Calculate the total sum of the input array
  const totalSum = arr.reduce((sum, value) => sum + value, 0);

  // Forward sweep to create non-decreasing sequence
  let maxValue = 0;
  for (let i = 0; i < arr.length; i++) {
    maxValue = Math.min(maxValue + 1, arr[i]);
    arr[i] = maxValue;
    console.log(arr);
  }

  // Backward sweep to create non-increasing sequence
  maxValue = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    maxValue = Math.min(maxValue + 1, arr[i]);
    arr[i] = maxValue;
  }

  // Find the maximum value in the modified array
  const m = Math.max(...arr);

  // Calculate the result as totalSum - m * m
  return totalSum - m * m;
}

// Example usage:
const arr = [0, 0, 0, 1, 2, 6, 2, 1];
const result = makeBitonic(arr);
console.log("Result:", result);
