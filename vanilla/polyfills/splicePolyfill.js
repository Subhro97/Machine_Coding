Array.prototype.mySplice = function (start, deleteCount, ...itemsToAdd) {
  // Handle negative start values
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  }

  // Handle deleteCount greater than remaining elements
  if (deleteCount != 0 && !deleteCount) {
    deleteCount = this.length;
  } else {
    deleteCount = Math.min(deleteCount, this.length - start);
  }

  // Store the deleted items
  const deletedItems = this.slice(start, start + deleteCount);

  // Create the new array with the added items
  const newArray = [
    ...this.slice(0, start),
    ...itemsToAdd,
    ...this.slice(start + deleteCount),
  ];

  // Replace the original array with the new array
  this.length = 0;
  for (let i = 0; i < newArray.length; i++) {
    this[i] = newArray[i];
  }

  // Return the deleted items
  return deletedItems;
};

const months = ["Jan", "March", "April", "June"];

months.mySplice(1, 0, "Feb");

console.log(months);

months.mySplice(-1, 1, "May");

console.log(months);

months.mySplice(5);

console.log(months);

months.mySplice(5, 10, "June");

console.log(months);

months.mySplice(-6);

console.log(months);
