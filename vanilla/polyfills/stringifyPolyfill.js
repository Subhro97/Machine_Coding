function myStringify(value, replacer, space) {
  function getIndentation(space) {
    if (typeof space === "number") {
      return " ".repeat(space);
    } else if (typeof space === "string") {
      return space.repeat(space.length);
    }
  }
  if (Array.isArray(value)) {
    if (replacer) {
      value = value.map((val, idx) => {
        if (!replacer(null, val)) return null;

        return val;
      });
    }

    let res = space ? "[\n" : "[";

    value.forEach((val, idx) => {
      let value = space
        ? `${getIndentation(space)} ${val === null ? `null` : `${val}`}, \n`
        : val === null
        ? `null,`
        : `${val},`;

      res += value;
    });

    let endVal = space ? "\n]" : "]";

    res = res.slice(0, -1) + endVal;

    return res;
  } else if (typeof value === "object") {
    if (replacer) {
      const entries = Object.entries(value); // Array of key and values

      const filtered = entries.filter(([key, value]) =>
        replacer(key, value) ? true : false
      );

      value = Object.fromEntries(filtered); // Convert array of entries back to an object
    }

    let result = space ? "{\n" : "{";

    for (const key in value) {
      let val = space
        ? `${getIndentation(space)}"${key}":${value[key]}, \n`
        : `"${key}":${value[key]}, `;

      result += val;
    }

    let endVal = space ? "\n}" : "}";
    result = result.slice(0, -2) + endVal; // To only consider the string with characters from 0 to the second last elements(to remove ", " fromt he last property )

    return result;
  }

  return "";
}

function replacer(key, value) {
  if (typeof value === "string" || typeof value === "boolean") return undefined;

  return value;
}

console.log(myStringify({ name: "Subhro", age: 27, weight: 65 }, replacer, 20));

console.log(
  JSON.stringify({ name: "Subhro", age: 27, weight: 65 }, replacer, 20)
);

console.log(myStringify(["Subhro", 27, 65, true], replacer, "\t"));

console.log(JSON.stringify(["Subhro", 27, 65, true], replacer, 20));
