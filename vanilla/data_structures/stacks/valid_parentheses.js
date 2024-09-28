const Stack = require("./stack.js");

const st = new Stack();

let str = "][{()}]";

function validParentheses() {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[" || str[i] === "(" || str[i] === "{") {
      st.push(str[i]);
    } else {
      console.log("1");
      if (st.empty() === -1) return false;

      let char = st.top();
      st.pop();

      if (
        (str[i] === "]" && char === "[") ||
        (str[i] === "}" && char === "{") ||
        (str[i] === ")" && char === "(")
      ) {
      } else {
        console.log("2", st.print(), str[i]);
        return false;
      }
    }
  }
  console.log("3");
  if (st.empty()) return true;
  else {
    console.log("4");
    return false;
  }
}

console.log(validParentheses(str));
