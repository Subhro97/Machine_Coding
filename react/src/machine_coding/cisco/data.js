export class Student {
  constructor(name, marks, regID) {
    this.name = name;
    this.marks = marks;
    this.regID = regID;
  }
}

export const data1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      new Student("Gojo", 100, "G0007"),
      new Student("Kakashi", 100, "K0010"),
      new Student("Zenitsu", 75, "Z0001"),
      new Student("Goku", 95, "Z0005"),
    ]);
  }, 1000);
});

export const data2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      new Student("Gojo", 100, "G0007"),
      new Student("Kakashi", 100, "K0010"),
      new Student("Zenitsu", 75, "Z0001"),
      new Student("Goku", 95, "Z0005"),
    ]);
  }, 1000);
});
