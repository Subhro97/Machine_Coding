// 1. Values from Instances

const num1 = JSON.stringify(new Number(20));

console.log(num1);

const str1 = JSON.stringify(new String("Subhro"));

console.log(str1);

const bool1 = JSON.stringify(new Boolean(true));

console.log(bool1);

BigInt.prototype.toJSON = function () {
  return this.toString();
};

const bigInt1 = JSON.stringify(BigInt(123455667)); // TypeErroe: BigInt cannot be serialized

console.log(bigInt1);

const obj1 = {
  function1: () => {},
  undefined1: undefined,
  Symbol1: Symbol("1234"),
};

const objConv = JSON.stringify(obj1);

console.log(objConv);

const arr1 = [() => {}, undefined, Symbol("12345"), 10];

const arrConv = JSON.stringify(arr1);

console.log(arrConv);

const obj2 = {
  nan: NaN,
  nul: null,
  infi: Infinity,
};

const obj2Conv = JSON.stringify(obj2);

console.log(obj2Conv);

const arr2 = [NaN, Infinity, null, 10];

const arr2Conv = JSON.stringify(arr2);

console.log(arr2Conv);

const arr3 = ["Gojo", "Spidey"];

arr3[2] = "Batman";

const arr3Conv = JSON.stringify(arr3);

console.log(arr3Conv);

let obj3 = {
  test: 3,
  [Symbol("123")]: 4,
};

const obj3Conv = JSON.stringify(obj3);

console.log(obj3Conv);

let obj4 = {
  test: 3,
  moretest: 4,
  toJSON(key) {
    return key ? `Property Name:${key}` : this;
  },
};

const obj4Conv = JSON.stringify(obj4);

console.log(obj4Conv);

let prop1 = {
  obj5: {
    test: 3,
    moretest: 4,
    toJSON(key) {
      return key ? `Property Name:${key}` : this;
    },
  },
};

const obj5Conv = JSON.stringify(prop1);

console.log(obj5Conv);

const value = JSON.stringify(
  Object.create(null, {
    x: { value: "x", enumerable: false },
    y: { value: "y", enumerable: true },
  })
);

console.log(value);

let obj6 = {
  name: "Subhro",
  age: 27,
  weight: 65,
  prof: "Frontend",
};

const obj6Conv = JSON.stringify(obj6, null, "abdc");

console.log(obj6Conv);
