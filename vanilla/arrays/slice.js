const animals = [];

const newArr1 = animals.slice(-2);

console.log(newArr1);

const newArr2 = animals.slice(3);

console.log(newArr2);

// slice(-2) = slice(arr.length + -2) = slice(3)

const newArr3 = animals.slice(2, -1);

console.log(newArr3);

const newArr4 = animals.slice(2, 4);

console.log(newArr4);

// slice(2, -1) = slice(2, arr.length + -1) = slice(2, 4)

const newArr5 = animals.slice(6);

console.log(newArr5);
