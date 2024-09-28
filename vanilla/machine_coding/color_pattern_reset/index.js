const selectBoxes = document.querySelector("ul");

let selectedboxesArr = [];

selectBoxes.addEventListener("click", (e) => {
  if (e.target && e.target.nodeName === "LI") {
    e.target.classList.add("active");
    selectedboxesArr.push(e.target);

    if (selectedboxesArr.length === 7) {
      removeElementsHandler(selectedboxesArr);

      selectedboxesArr = [];
    }
  }
});

function removeElementsHandler(selectedboxesArr, counter = 0) {
  if (counter === 7) {
    return;
  }

  setTimeout(() => {
    selectedboxesArr[counter].classList.remove("active");
    counter = counter + 1;

    removeElementsHandler(selectedboxesArr, counter);
  }, 500);
}
