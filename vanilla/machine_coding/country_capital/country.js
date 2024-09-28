const DATA = {
  India: "Delhi",
  Russia: "Moscow",
  China: "Beijing",
  France: "Paris",
  Japan: "Tokyo",
  "South Korea": "Seoul",
  USA: "Washington",
  Germany: "Berlin",
};

const gameListElm = document.querySelector(".gameList");

const dataArr = Object.entries(DATA); // Array of [keys, values]

const newArr = [...dataArr.flat()]; // Array of keys and values

// Fisher-Yates Shuffling Algo --> O(N)
function shuffle(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]]; // array destructuring assignment --> Swaps 2 values without needing 3rd variable
  }

  return arr;
}

let shuffledArr = shuffle(newArr);

// Append List to select
function appendList() {
  shuffledArr.forEach((item, idx) => {
    const listElm = document.createElement("li");
    listElm.textContent = item;

    gameListElm.append(listElm);
  });
}

appendList();

let count = 0; // to track selected option(not more than 2)
let firstItem; // To store first option selected

// Select Options
gameListElm.addEventListener("click", (e) => {
  const target = e.target;

  if (target && target.nodeName === "LI") {
    count++;

    // For 1st option sleect
    if (count === 1) {
      target.classList.add("selected");
      firstItem = target;
    }

    // 2nd option select
    if (count === 2) {
      firstItem.classList.remove("selected");

      if (isValid(firstItem.innerText, target.innerText)) {
        firstItem.classList.add("correct");
        target.classList.add("correct");

        validityHandler(firstItem, target);
      } else {
        firstItem.classList.add("incorrect");
        target.classList.add("incorrect");

        validityHandler();
      }
    }
  }
});

// To show success Msg if all are correct
function isEmpty() {
  if (gameListElm.children.length === 0) {
    gameListElm.textContent = "Congratulations!";
  }
}

// Reset if incorrect & remove if correct
function validityHandler(firstItem, secondItem) {
  setTimeout(() => {
    console.log(firstItem);
    if (firstItem !== undefined) {
      firstItem.remove();
      secondItem.remove();

      isEmpty();
    } else {
      gameListElm.innerHTML = "";
      appendList();
    }
    count = 0;
  }, 1000);
}

// Is the selected options valid
function isValid(value1, value2) {
  for (let i = 0; i < dataArr.length; i++) {
    if (
      (dataArr[i][0] === value1 && dataArr[i][1] === value2) ||
      (dataArr[i][0] === value2 && dataArr[i][1] === value1)
    )
      return true;
  }

  return false;
}
