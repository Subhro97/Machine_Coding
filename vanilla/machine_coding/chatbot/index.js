class Store {
  constructor() {
    this.store = {};
  }

  updateStore(object) {
    this.store = object;
  }

  fetchStore() {
    return this.store;
  }
}

let store = new Store();

let productCont = document.querySelector(".productsCont");
let chatCont = document.querySelector(".chatCont");

function getMessage(productChats, isReplied) {
  let statementCont = document.createElement("div");

  let statementElm = document.createElement("p");

  statementElm.textContent = !isReplied
    ? productChats["statement"]
    : productChats["answer"];

  statementCont.append(statementElm);

  // If options is present
  if (productChats["options"]) {
    let optionCont = document.createElement("div");

    for (let i = 0; i < productChats["options"].length; i++) {
      let optionElm = document.createElement("span");
      optionElm.setAttribute("data-index", i);
      optionElm.textContent = productChats["options"][i]["statement"];
      optionCont.append(optionElm);
    }

    statementCont.append(optionCont);
  }

  !isReplied ? (chatCont.innerHTML = "") : "";
  chatCont.classList.remove("noSelect");

  chatCont.append(statementCont);
}

function replyHandler(text, index) {
  let answerElm = document.createElement("p");
  let answerCont = document.createElement("div");

  answerElm.textContent = text;

  answerCont.append(answerElm);
  answerCont.classList.add("answer");
  chatCont.append(answerCont);

  if (!store.fetchStore().data["options"]) {
    setTimeout(() => {
      console.log(
        findChat(data[store.fetchStore().product]["options"], text),
        "3"
      );
      store.updateStore({
        data: findChat(data[store.fetchStore().product]["options"], text),
        product: store.fetchStore().product,
      });
      getMessage(store.fetchStore().data, true);
    }, 1000);
  } else {
    setTimeout(() => {
      store.updateStore({
        data: store.fetchStore().data["options"][index],
        product: store.fetchStore().product,
      });
      getMessage(store.fetchStore().data, true);
    }, 1000);
  }
}

function findChat(options, text) {
  console.log(options, text, "2");
  for (const item of options) {
    if (item["statement"] === text) {
      console.log(item, "1");

      return item;
    }

    if (item["options"]) {
      const result = findChat(item["options"], text);
      if (result) {
        return result;
      }
    }
  }
}

chatCont.addEventListener("click", (e) => {
  let text = e.target.textContent;
  let { index } = e.target.dataset;

  if (!!text && !!index) {
    replyHandler(text, index);
  }
});

productCont.addEventListener("click", (e) => {
  let product = e.target.dataset["id"];

  store.updateStore({ data: data[product], product: product });

  getMessage(store.fetchStore().data);
});
