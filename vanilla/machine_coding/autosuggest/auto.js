const inputElm = document.querySelector(".autoSuggest input");
const suggestionList = document.querySelector(".suggestionList");

// Append the list items in the container
function renederSearchList(arr) {
  suggestionList.innerHTML = "";

  arr.forEach((item, idx) => {
    const listElm = document.createElement("LI");

    listElm.textContent = item;

    suggestionList.append(listElm);

    suggestionList.style.display = "flex";
  });
}

// To Simulate a API request for a query
const fetchData = (searchQuery) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredArr = DATA.filter((searchItem) =>
        searchItem.toLowerCase().includes(searchQuery)
      );
      resolve(filteredArr);
    }, 200);
  });
};

// To show the dropdown when the list is present
const queryHandler = async (e) => {
  const value = e.target.value.trim().toLowerCase();

  if (value.length > 0) {
    const filteredList = await fetchData(value);

    renederSearchList(filteredList);
  } else {
    suggestionList.style.display = "none";
  }
};

// Showing previously fetched data withou sending API call if present in cache
const memoizeHandler = (fn) => {
  let cache = {};

  return function (e) {
    const key = JSON.stringify(e.target.value);

    console.log(cache);

    if (cache[key]) {
      const filteredArr = DATA.filter((searchItem) =>
        searchItem.toLowerCase().includes(cache[key].toLowerCase())
      );
      renederSearchList(filteredArr);
      return;
    }

    cache[key] = e.target.value;
    fn.call(this, e);
  };
};

// To clear the id for the debounce
let timer;

// Debounce Rate Limiter
const optimizedQuery = (e) => {
  clearTimeout(timer);

  timer = setTimeout(() => {
    queryHandler(e);
  }, 2500);
};

let memoizedQueryHandler = memoizeHandler(optimizedQuery);

inputElm.addEventListener("keyup", memoizedQueryHandler);

// To select the displayed list item
suggestionList.addEventListener("click", (e) => {
  const target = e.target;

  if (target && target.nodeName === "LI") {
    const value = target.innerText;

    inputElm.value = value;
    suggestionList.style.display = "none";
  }
});
