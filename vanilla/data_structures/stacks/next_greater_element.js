const Stack = require("./stack.js");

const st = new Stack();

let arr = [3, 10, 4, 2, 1, 2, 6, 1, 7, 2, 9];
let len = arr.length;
let ans = [];

for (let i = 2 * arr.length - 1; i >= 0; i--) {
  while (st.empty() !== -1 && st.top() <= arr[i % len]) {
    st.pop();
  }

  if (i < len) {
    if (st.empty() !== -1) {
      ans[i] = st.top();
    }
  }

  st.push(arr[i % len]);
}

ans = ans.map((val) => (val === undefined ? -1 : val));

console.log(ans);
