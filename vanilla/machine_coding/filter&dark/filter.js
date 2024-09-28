const brands = ["Apple", "Samsung", "Google", "OnePlus", "Xiaomi"];

const models = {
  Apple: ["iPhone 13", "iPhone 12", "iPhone 11"],
  Samsung: ["Galaxy S21", "Galaxy S20", "Galaxy Note 20"],
  Google: ["Pixel 6", "Pixel 5", "Pixel 4a"],
  OnePlus: ["9 Pro", "8T", "Nord"],
  Xiaomi: ["Mi 11", "Redmi Note 10", "POCO X3"],
};

const suffixes = ["Pro", "Max", "Ultra", "Lite"];

const images = [
  "https://idestiny.in/wp-content/uploads/2022/09/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_Avail__en-IN.jpg",
  "https://images.samsung.com/is/image/samsung/p6pim/in/sm-a055fzsdins/gallery/in-galaxy-a05-sm-a055-sm-a055fzsdins-539716450?$1300_1038_PNG$",
  "https://lh3.googleusercontent.com/6LOW_K9oS-Zk0QUdo8HdMGnYaGSyYqDznSBHGXNSStzndMQSTbVYk4W7D2hiNWbsSvOLxb15Y7lrk7WswNpiH2G_BKTzQcjaJOg=rw-e365-w3000",
  "https://th.bing.com/th/id/OIP.dbj4vZ27uU0SFYC1rRAcSgHaFj?w=190&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
  "https://th.bing.com/th/id/OIP.dbj4vZ27uU0SFYC1rRAcSgHaFj?w=190&h=180&c=7&r=0&o=5&dpr=2&pid=1.7",
];

const dummyMobiles = [];

for (let i = 0; i < 100; i++) {
  const brandIndex = Math.floor(Math.random() * brands.length);
  const brand = brands[brandIndex];

  const modelIndex = Math.floor(Math.random() * models[brand].length);
  const model = models[brand][modelIndex];

  const suffixIndex = Math.floor(Math.random() * suffixes.length);
  const suffix = suffixes[suffixIndex];

  const mobile = {
    name: `${brand} ${model} ${suffix}`,
    image: `mobile${i + 1}.jpg`,
    price: Math.floor(Math.random() * 1000) + 200,
    cellularTech: `${Math.floor(Math.random() * (5 - 2 + 1)) + 2}G`,
    brand: brand,
  };

  dummyMobiles.push(mobile);
}

const itemsCont = document.querySelector(".items-cont");
const pagination = document.querySelector(".pagination");
const paginationElms = document.querySelectorAll(".pagination li");
const brandList = document.querySelector(".brands-list");
const techList = document.querySelector(".tech-list");
const switchBtn = document.querySelector(".switch");
const body = document.getElementsByTagName("BODY")[0];

let filteredList = [];
let checkBoxList = {
  "brands-list": [],
  "tech-list": [],
};

// Append List
function appendItemsHandler(start = 0, end = 10, arrayList = dummyMobiles) {
  let str = "";
  let renderingList = arrayList.slice(start, end + 1);
  renderingList.forEach((item, idx) => {
    str += `        
    <div class="item">
      <img
        src=${images[brands.indexOf(item.brand)]}
      />
      <p>${item.name}</p>
      <p>${item.brand}</p>
      <p>${item.price}</p>
  </div>`;
  });
  itemsCont.innerHTML = str;
}

// Pagination Handler
pagination.addEventListener("click", (e) => {
  const target = e.target;
  const activeTagValue = +document
    .querySelector(".active")
    .getAttribute("data-tag");

  paginationElms.forEach((elm) => elm.classList.remove("active"));

  let value = +target.getAttribute("data-tag");

  if (value === -1 || value === 1) value = value + activeTagValue;

  if (value < 1) {
    paginationElms[0].classList.add("active");
    return;
  }
  if (value > 10) {
    paginationElms[0].classList.add("active");
    value = 1;
  }

  paginationElms[value - 1].classList.add("active");

  value = value * 10;

  itemsCont.innerHTML = "";
  appendItemsHandler(value - 10, value);
});

function filterHandler(listItem, idx) {
  if (
    checkBoxList["tech-list"].length > 0 &&
    checkBoxList["brands-list"].length > 0
  ) {
    return (
      checkBoxList["tech-list"].includes(listItem.cellularTech) &&
      checkBoxList["brands-list"].includes(listItem.brand)
    );
  } else if (
    checkBoxList["tech-list"].length < 1 &&
    checkBoxList["brands-list"].length > 0
  ) {
    return checkBoxList["brands-list"].includes(listItem.brand);
  } else if (
    checkBoxList["tech-list"].length > 0 &&
    checkBoxList["brands-list"].length < 1
  ) {
    return checkBoxList["tech-list"].includes(listItem.cellularTech);
  }
}

// Checkbox Handler
const checkBoxHandler = (e) => {
  const target = e.target;

  const targetInput = target.querySelector("input");
  const type = target.parentElement.classList[0];

  targetInput.checked = !targetInput.checked;
  let value = targetInput.value;

  if (targetInput.checked) {
    !checkBoxList[type].includes(value) ? checkBoxList[type].push(value) : "";
  } else {
    if (checkBoxList[type].indexOf(value) > -1) {
      checkBoxList[type].splice(checkBoxList[type].indexOf(value), 1);
    }
  }

  filteredList = dummyMobiles.filter(filterHandler);

  filteredList.length === 0 ? (filteredList = dummyMobiles) : "";

  appendItemsHandler(0, 10, filteredList);
};

// Filter Handlers
brandList.addEventListener("click", checkBoxHandler);
techList.addEventListener("click", checkBoxHandler);

// Dark/Light Mode
function toggleMode() {
  const mode = localStorage.getItem("mode");

  mode === "dark" ? body.classList.add("dark") : "";

  switchBtn.addEventListener("click", (e) => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      localStorage.setItem("mode", "light");
    } else {
      body.classList.add("dark");
      localStorage.setItem("mode", "dark");
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  appendItemsHandler();
  toggleMode();
});
