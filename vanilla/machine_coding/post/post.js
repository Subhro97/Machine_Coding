const textElm = document.querySelector(".textarea");

const errorMsg = document.querySelector(".errorTxt");
const currentCount = document.querySelector(".current");

const imageInput = document.querySelector(".imageCont input");
const imageBtn = document.querySelector(".imageCont img");
const mediaCont = document.querySelector(".mediaCont");

let flag = false;

textElm.addEventListener("keyup", (e) => {
  const text = e.target.innerText;
  const value = text.trim().length;

  const lastChar = text.trim().charAt(value - 1);

  if (lastChar === "@") {
    flag = true;
  }
  console.log(e);

  if (e.key === "Enter") {
    flag = false;

    const textArr = text.trim().split("@");
    console.log(textArr);
    const tagElm = document.createElement("a");
    tagElm.classList.add("tagTxt");
    tagElm.textContent = textArr[1];

    textElm.textContent = "";
    textElm.textContent += textArr[0];

    textElm.append(tagElm);
  }

  if (value >= 200) {
    errorMsg.style.opacity = 1;
  } else {
    errorMsg.style.opacity = 0;
  }

  currentCount.textContent = value;
});

imageInput.addEventListener("change", (e) => {
  const file = imageInput.files[0];

  const reader = new FileReader();

  reader.onload = () => {
    const imageUrl = reader.result;

    const imageCont = document.createElement("div");
    const removeElm = document.createElement("div");
    removeElm.classList.add("remove");

    const imgElm = document.createElement("img");
    imgElm.src = imageUrl;

    imageCont.append(imgElm);
    imageCont.append(removeElm);
    mediaCont.append(imageCont);
    mediaCont.style.display = "flex";
  };

  reader.readAsDataURL(file);
});

mediaCont.addEventListener("click", (e) => {
  if (mediaCont.children.length === 0) {
    mediaCont.style.display = "none";
  }

  const target = e.target;

  if (target.classList[0] === "remove") {
    target.parentElement.remove();
  }
});

imageBtn.addEventListener("click", () => {
  imageInput.click();
});
