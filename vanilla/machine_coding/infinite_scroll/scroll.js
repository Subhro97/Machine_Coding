// Function to generate a random string of given length
function generateRandomString(length) {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

// Function to generate a random data object
function generateRandomDataObject() {
  const id = Math.floor(Math.random() * 1000); // Random ID between 0 and 999
  const name = generateRandomString(8); // Random name with 8 characters
  const description = generateRandomString(20); // Random description with 20 characters
  return { id, name, description };
}

// Create an array to store the data objects
const dataArray = [];
let counter = 0;

// Generate 20 random data objects and add them to the array
function dummayData(val) {
  for (let i = 0; i < val; i++) {
    const dataObject = generateRandomDataObject();
    dataArray.push(dataObject);
  }

  return dataArray;
}

const listCont = document.querySelector("ul");

// DUMMY API SIMULATION
const API = function (value = 1) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(() => dummayData(20 * value)), 2000);
  });
};

function listItem(item) {
  const listItem = document.createElement("li");
  listItem.setAttribute("id", item.id);

  const nameElm = document.createElement("p");
  const descElm = document.createElement("p");

  nameElm.textContent = item.name;
  descElm.textContent = item.description;

  listItem.append(nameElm);
  listItem.append(descElm);

  return listItem;
}

function appendListHandler(count = 1) {
  const dataPromise = API(count);
  dataPromise
    .then((listItemArr) => {
      const fragment = new DocumentFragment();

      listItemArr().forEach((list) => {
        const item = listItem(list);
        fragment.append(item);
      });

      listCont.innerHTML = "";
      listCont.append(fragment);

      initializeInfiniteScroll();
    })
    .catch((err) => {
      console.log(err);
      throw new Error("No Data Found!");
    });
}

function initializeInfiniteScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      // Called when thresold crosses and during initialization
      let lastItem = entries[0];

      if (!lastItem.isIntersecting) return;

      counter = counter + 1;

      appendListHandler(counter);

      // Since Intersection Obser is again re initialized for new last element, so disconnecting previous observer
      observer.disconnect();
    },
    {
      root: listCont, // Container in which the card must be intersecting
      threshold: 0.5,
    }
  );

  const arr = Array.from(document.querySelectorAll("ul li"));
  observer.observe(arr[arr.length - 1]); //Observing last card
}

window.addEventListener("DOMContentLoaded", () => {
  appendListHandler();
});
