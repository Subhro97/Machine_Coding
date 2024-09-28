const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");

console.log(months);

months.splice(-1, 1, "May");

// splice(-1, 1, "May") = splice(4, 1, "May")

console.log(months);

months.splice(5);

console.log(months);

months.splice(5, 10, "June");

console.log(months);

months.splice(-6);

console.log(months);
