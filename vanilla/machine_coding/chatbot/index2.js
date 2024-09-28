let prodCont = document.querySelector(".productsCont");
let chatCont = document.querySelector(".chatCont");

// To display the chat bot greetings, answers and options
function messagesHandler(productSelected, productName, isSentFromReply) {
  let statementCont = document.createElement("div");

  let statement = document.createElement("p");

  // If reply then shows answer to reply otherwise the query
  statement.textContent = isSentFromReply
    ? productSelected["answer"]
    : productSelected["statement"];

  statementCont.append(statement);

  // To present all the options if present
  if (productSelected["options"]) {
    let optionsCont = document.createElement("div");

    for (let i = 0; i < productSelected["options"].length; i++) {
      let optionElm = document.createElement("span");
      optionElm.setAttribute("data-option", true); // To check if the click was on an options
      optionElm.setAttribute("data-productname", productName); // To get the product associated with the query
      optionElm.textContent = productSelected["options"][i]["statement"];
      optionsCont.append(optionElm);
    }

    statementCont.append(optionsCont);
  }

  // To clear the chat cont when new product is selected
  isSentFromReply ? "" : (chatCont.innerHTML = "");
  chatCont.classList.remove("noSelect");

  chatCont.append(statementCont);
}

// To show the option selected by user on the right side and then show the response of chatbot in timeout
function optionSelectHandler(text, productName) {
  let replyCont = document.createElement("div");
  let replyElm = document.createElement("p");

  replyElm.textContent = text;

  replyCont.classList.add("answer");
  replyCont.append(replyElm);
  chatCont.append(replyCont);

  setTimeout(() => {
    let selectedOption = searchOptionHandler(text, data[productName]);
    messagesHandler(selectedOption, productName, true);
  }, 500);
}

// To recursively go thru the data object for the option, user selected, that matches the chat object and then display is useing the messageHandler
function searchOptionHandler(text, product) {
  if (product["statement"] === text) {
    return product;
  }

  if (product["options"]) {
    let result;
    for (let i = 0; i < product["options"].length; i++) {
      result = searchOptionHandler(text, product["options"][i]);

      if (result) {
        return result;
      }
    }
  }
}

prodCont.addEventListener("click", (e) => {
  const { id: product } = e.target.dataset;
  if (!!product) {
    messagesHandler(data[product], product);
  }
});

chatCont.addEventListener("click", (e) => {
  let { option, productname } = e.target.dataset;
  let text = e.target.textContent;

  if (!!text && option) {
    optionSelectHandler(text, productname);
  }
});
