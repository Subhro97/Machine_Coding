let obj = {
  A: "12",
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
};

const deepFlatten = (obj, prefix = "") => {
  let flattedObj = {};

  for (let key in obj) {
    let newKey = prefix === "" ? key : prefix + "." + key;

    if (typeof obj[key] === "object" && obj[key] !== null) {
      let flatten = deepFlatten(obj[key], newKey);
      flattedObj = { ...flattedObj, ...flatten };
    } else {
      flattedObj[newKey] = obj[key];
    }
  }

  return flattedObj;
};

console.log(deepFlatten(obj));
